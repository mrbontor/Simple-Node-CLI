const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const { OrderService } = require('../../../../app/modules/services');
const { OrderController } = require('../../../../app/modules/controllers');
const ResponseHelper = require('../../../../app/helpers/response');

const mockDB = require('../../mockDb/database.json');

describe('Order Controller', () => {
    let orderServiceStub, resSuccesStub, resErrorStub, response;

    beforeEach(() => {
        orderServiceStub = sinon.stub(OrderService, 'getOrderByName');
        resSuccesStub = sinon.stub(ResponseHelper, 'success');
        resErrorStub = sinon.stub(ResponseHelper, 'error');
    });

    afterEach(() => {
        orderServiceStub.restore();
        resSuccesStub.restore();
        resErrorStub.restore();
    });
    describe('Get Order ', () => {
        it('Success', () => {
            orderServiceStub.returns(mockDB.orders);
            resSuccesStub.returns(mockDB.orders);
            response = OrderController.getOrderByName();

            expect(orderServiceStub.calledOnce).to.be.true;
            expect(resSuccesStub.calledOnce).to.be.true;

            expect(response).to.be.an('array');
            response.every((i) => expect(i).to.have.all.keys('user', 'products'));
            expect(response).to.have.length.at.least(1);
        });

        it('Error No data orders!', () => {
            orderServiceStub.returns();
            try {
                OrderController.getOrderByName();
            } catch (error) {
                resErrorStub.returns(error)
                expect(orderServiceStub.calledOnce).to.be.true;
                expect(resErrorStub.calledOnce).to.be.true;

                expect(error.message).to.equal('No data orders!');
                expect(error.statusCode).to.equal(404);
                expect(error.errors).to.be.null;
            }
        });
    });
});
