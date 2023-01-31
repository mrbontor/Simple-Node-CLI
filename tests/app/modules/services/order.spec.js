const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const { OrderRepository } = require('../../../../app/modules/repositories');
const { OrderService } = require('../../../../app/modules/services');

const mockDB = require('../../mockDb/database.json');

describe('Order Service', () => {
    let getOrdersStub, response;
    let name = 'bruce_banner';
    beforeEach(() => {
        getOrdersStub = sinon.stub(OrderRepository, 'getOrders');
    });

    afterEach(() => {
        getOrdersStub.restore();
    });
    describe('getOrders ', () => {
        it('Success', () => {
            getOrdersStub.returns(mockDB.orders);

            response = OrderService.getOrderByName(name);

            expect(getOrdersStub.calledOnce).to.be.true;

            expect(response).to.be.an('array');
            response.every((i) => expect(i).to.have.all.keys('user', 'products'));
            expect(response).to.have.length.at.least(1);
        });

        it('Error No data orders!', () => {
            getOrdersStub.returns({ order: [] });

            try {
                OrderService.getOrderByName();
            } catch (error) {
                expect(getOrdersStub.calledOnce).to.be.true;

                expect(error.message).to.equal('No data orders!');
                expect(error.statusCode).to.equal(404);
                expect(error.errors).to.be.null;
            }
        });
    });
});
