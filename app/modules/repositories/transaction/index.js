const { readData } = require('../../../libs/fsLib');
const DB_PATH = process.env.DB_PATH || './db/database.json';

module.exports = {
    getTrasactions: (user) => {
        const { transactions } = readData(DB_PATH) || [];
        let results = transactions;
        if (user) {
            results = transactions.filter((transaction) => transaction.user === user);
        }
        return results;
    },
};
