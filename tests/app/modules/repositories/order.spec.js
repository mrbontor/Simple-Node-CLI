const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const readData = require('../../../../app/libs/fsLib');
const { OrderRepository } = require('../../../../app/modules/repositories');

describe('Order Repository', () => {
    describe('getOrders', () => {
        it('Success', () => {
            let readerStub = sinon.spy(readData, 'readData');
            readerStub.restore();

            let response = OrderRepository.getOrders();

            expect(response).to.be.an('array');
            response.every((i) => expect(i).to.have.all.keys('user', 'products'));
            expect(response).to.have.length.at.least(1);
        });
    });
});
