import { writable } from 'svelte/store';
import { browser } from "$app/environment"
import { OpenAiStrategy } from '../strategies/openAiStrategy';
import { SpringAiStrategy } from '../strategies/springAiStrategy';

/**
 * @param {string} key
 * @param {{ systemPrompt: string; backendUrl: string; httpHeaders: {name: string; value: string}[]; strategy: string; modelName: string, historySize: number}} initialValue
 */
function persist(key, initialValue) {
    let storedValue;
    if (browser) {
        storedValue = localStorage.getItem(key);
    }

    const data = storedValue ? JSON.parse(storedValue) : initialValue;

    const store = writable(data);

    if (browser) {
        store.subscribe((value) => {
            localStorage.setItem(key, JSON.stringify(value));
        });
    }

    return store;
}

export const settings = persist('settings', {
    systemPrompt: 'You are a helpful assistant.',
    backendUrl: 'https://api.openai.com/v1/chat/completions',
    httpHeaders: [
        { name: 'Content-Type', value: 'application/json' },
        { name: 'Authorization', value: 'Bearer token' }
    ],
    strategy: 'OpenAiStrategy',
    modelName: 'gpt-4o-mini',
    historySize: 2,
});

export const strategies = ['OpenAiStrategy', 'SpringAiStrategy'];

/**
 * @type {import('svelte/store').Writable<boolean>}
 */
export const isSettingsOpen = writable(false);

/**
 * Get the appropriate strategy instance based on the strategy name.
 * @param {string} strategyName
 * @returns {Strategy}
 */
export function getStrategyInstance(strategyName) {
    switch (strategyName) {
        case 'OpenAiStrategy':
            return new OpenAiStrategy();
        case 'SpringAiStrategy':
            return new SpringAiStrategy();
        default:
            throw new Error(`Unknown strategy: ${strategyName}`);
    }
}
