const { readData } = require('../../../libs/fsLib');
const DB_PATH = process.env.DB_PATH || './db/database.json';

module.exports = {
    getUsers: () => {
        const { users } = readData(DB_PATH) || [];
        return users;
    },
};
