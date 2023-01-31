class ApplicationError extends Error {
    /**
     *
     * @param {string} message
     * @param {number} statusCode
     * @param {object||array} errors
     */
    constructor(message, statusCode = 400, errors = null) {
        super(message);

        /**
         * Saving class name in the property of our custom error as a shortcut.
         */
        this.name = this.constructor.name;

        // Capturing stack trace, excluding constructor call from it.
        // Error.captureStackTrace(this, this.constructor);

        this.statusCode = statusCode;
        this.errors = errors;
    }
}

module.exports = ApplicationError;
