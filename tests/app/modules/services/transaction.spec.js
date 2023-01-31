const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const { TransactionRepository } = require('../../../../app/modules/repositories');
const { TransactionService, OrderService } = require('../../../../app/modules/services');

const mockDB = require('../../mockDb/database.json');

describe('TRansaction Service', () => {
    let getTrasactionsStub, getOrderByNameStub;
    let response;

    beforeEach(() => {
        getTrasactionsStub = sinon.stub(TransactionRepository, 'getTrasactions');
        getOrderByNameStub = sinon.stub(OrderService, 'getOrderByName');
    });

    afterEach(() => {
        getTrasactionsStub.restore();
        getOrderByNameStub.restore();
    });
    describe('countTotalAmountTransactionAndPoints ', () => {
        it('Success', () => {
            let name = 'bruce_banner';

            getTrasactionsStub.returns(mockDB.transactions);

            getOrderByNameStub.returns(mockDB.orders);

            response = TransactionService.countTotalAmountTransactionAndPoints(name);

            expect(getTrasactionsStub.calledOnce).to.be.true;
            expect(getOrderByNameStub.calledOnce).to.be.true;

            expect(response).to.have.property('totalAmountTransaction').to.be.a('number');
            expect(response).to.have.property('totalPoints').to.be.a('number');
            expect(response).to.have.property('totalItems').to.be.a('number');
        });

        it('Error No data transactions!', () => {
            let name = 'bruce_banner';
            getTrasactionsStub.returns({ transactions: [] });

            try {
                TransactionService.countTotalAmountTransactionAndPoints(name);
            } catch (error) {
                expect(getTrasactionsStub.calledOnce).to.be.true;
                expect(getOrderByNameStub.calledOnce).to.be.true;

                expect(error.message).to.equal('No data transactions!');
                expect(error.statusCode).to.equal(404);
                expect(error.errors).to.be.null;
            }
        });
    });

    describe('countTotalTransactions ', () => {
        it('Success', () => {
            getTrasactionsStub.returns(mockDB.transactions);

            response = TransactionService.countTotalTransactions();

            expect(getTrasactionsStub.calledOnce).to.be.true;
            expect(response).to.have.property('totalAmountTransaction').to.be.a('number');
        });

        it('Error No data transactions!', () => {
            getTrasactionsStub.returns({ transactions: [] });

            try {
                TransactionService.countTotalTransactions();
            } catch (error) {
                expect(error.message).to.equal('No data transactions!');
                expect(error.statusCode).to.equal(404);
                expect(error.errors).to.be.null;
            }
        });
    });
});
