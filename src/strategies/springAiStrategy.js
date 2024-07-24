/**
 * @implements {Strategy}
 */
export class SpringAiStrategy {
    /**
     * @param {Object} data
     * @returns {string}
     */
    getText(data) {
        return data.result.output.content;
    }
}
