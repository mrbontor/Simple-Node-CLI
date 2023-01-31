const { UserRepository } = require('../../repositories');
const { NotFoundError } = require('../../../helpers/exceptions');

module.exports = {
    getUsers: () => {
        const users = UserRepository.getUsers();
        if (users.length > 0) return users;

        throw new NotFoundError('No data users!');
    },
};
