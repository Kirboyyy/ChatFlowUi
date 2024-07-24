/**
 * @implements {Strategy}
 */
export class OpenAiStrategy {
    /**
     * @param {Object} data
     * @returns {string}
     */
    getText(data) {
        const text = data.choices[0].delta.content
        return text != undefined ? text : "";
    }
}
