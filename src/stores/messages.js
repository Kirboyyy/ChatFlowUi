import { get, writable } from 'svelte/store';
import { sendStreamingRequest } from '../services/requestService';
import { getStrategyInstance, settings } from './settings';

/**
 * @typedef {Object} Message
 * @property {string} id - The unique identifier of the message.
 * @property {string} content - The content of the message.
 * @property {string} [role] - The type of the message (e.g., 'user', 'assistant').
 * @property {boolean} error - shows if the message contains a error.
 */

/*
 * @type {Writable<Map<string, Message>>}
 */
export const messageMap = writable(new Map);

/*
 * @type {Writable<boolean>}
 */
export const isGenerating = writable(false);


/**
 * @type {EventSource}
 */
let eventSource;

/**
 * @param {string} message
 */
export async function sendMessage(message) {

    const id = crypto.randomUUID();
    messageMap.update(map => map.set(id, { id: id, role: "user", content: message }));

    const { strategy } = get(settings);
    const strategyInstance = getStrategyInstance(strategy);
    const responseId = crypto.randomUUID();

    isGenerating.set(true);
    const response = await sendStreamingRequest();
    if (!response.ok) {
        isGenerating.set(false);
        const errorText = await response.text();
        messageMap.update(map => map.set(responseId, { id: responseId, content: errorText, role: "assistant", error: true }))
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        try {
            processChunk(responseId, chunk, strategyInstance);
            window.scrollTo(0, document.body.scrollHeight);
        } catch (exception) {
            messageMap.update(map => {
                let text = exception;
                if (map.has(id)) {
                    const existingMessage = map.get(id);
                    text = existingMessage.content + text;
                }
                map.set(responseId, { id: responseId, content: text, error: true });
                return new Map(map);
            })
            console.error("error during chunk processing ", exception)
        }
    }
    isGenerating.set(false);
}


/**
 * @param {string} chunk
 * @param {string} id
 * @param {Strategy} strategy
 */
function processChunk(id, chunk, strategy) {
    const events = chunk.split('\n\n');
    events.forEach(event => {
        if (event) {
            if (!event.includes("{")) {
                console.log("skipped event ", event)
                return;
            }
            const parsedEvent = JSON.parse(event.slice(event.indexOf('{')));
            const text = strategy.getText(parsedEvent)
            console.log(parsedEvent)

            messageMap.update(map => {
                if (map.has(id)) {
                    const existingMessage = map.get(id);
                    existingMessage.content += text;
                    map.set(id, existingMessage)
                } else {
                    map.set(id, {
                        id,
                        content: text,
                        role: "assistant"
                    })
                }
                return new Map(map);
            })
        }
    });
}

export function disconnect() {
    if (eventSource) {
        eventSource.close();
    }
}
