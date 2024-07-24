/**
 * @typedef {Object} ChatCompletion
 * @property {string} id - The ID of the chat completion.
 * @property {string} object - The type of object, which is "chat.completion".
 * @property {number} created - The timestamp of when the completion was created.
 * @property {string} model - The model used for the completion.
 * @property {string} system_fingerprint - The system fingerprint.
 * @property {Choice[]} choices - An array of choices returned by the completion.
 * @property {Usage} usage - The usage statistics of the completion.
 */

/**
 * @typedef {Object} Choice
 * @property {number} index - The index of the choice.
 * @property {Message} message - The message object of the choice.
 * @property {Message} delta - The delta object containing a part of a message
 * @property {string} finish_reason - The reason for finishing the completion.
 */

/**
 * @typedef {Object} Message
 * @property {string} role - The role of the message sender.
 * @property {string} content - The content of the message.
 */

/**
 * @typedef {Object} Usage
 * @property {number} prompt_tokens - The number of tokens in the prompt.
 * @property {number} completion_tokens - The number of tokens in the completion.
 * @property {number} total_tokens - The total number of tokens.
 */

