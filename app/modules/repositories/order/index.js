const { readData } = require('../../../libs/fsLib');
const DB_PATH = process.env.DB_PATH || './db/database.json';

module.exports = {
    getOrders: (user) => {
        const { orders } = readData(DB_PATH) || [];
        let results = orders;
        if (user) {
            results = orders.filter((order) => order.user === user);
        }
        return results;
    },
};
