const ApplicationError = require('./applicationError');

class ValidationError extends ApplicationError {
    constructor(errors) {
        super('Validation Error!', 400, errors);
    }
}

module.exports = ValidationError;
