const { OrderRepository } = require('../../repositories');
const { NotFoundError } = require('../../../helpers/exceptions');

module.exports = {
    getOrderByName: (username) => {
        const orders = OrderRepository.getOrders(username);
        if (orders.length > 0) return orders;

        throw new NotFoundError('No data orders!');
    },
};
