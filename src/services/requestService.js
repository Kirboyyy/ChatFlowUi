
import { get } from "svelte/store";
import { settings } from "../stores/settings";
import { messageMap } from "../stores/messages";


export async function sendStreamingRequest() {
    const { httpHeaders, backendUrl, systemPrompt, modelName, historySize } = get(settings)
    const map = get(messageMap)

    /**
     * @type{Object.<string, string>} 
     */
    const headers = {}
    httpHeaders.forEach((/** @type {{ name: string ; value: string; }} */ h) => headers[h.name] = h.value)

    const values = Array.from(map.values()).filter(e => !e.error);
    const relevantValues = values.splice(-historySize)

    const messages = relevantValues.map(m => ({ role: m.role, content: m.content }))
    // add systemPrompt
    messages.unshift({ role: 'system', content: systemPrompt })

    return await fetch(backendUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            model: modelName,
            messages: messages,
            stream: true
        })
    });
}
