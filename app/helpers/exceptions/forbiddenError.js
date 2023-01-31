const ApplicationError = require('./applicationError');

class ForbiddenError extends ApplicationError {
    constructor(message) {
        super(message || 'Access Forbidden!', 403);
    }
}

module.exports = ForbiddenError;
