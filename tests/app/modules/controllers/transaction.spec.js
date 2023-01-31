const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const { TransactionService } = require('../../../../app/modules/services');
const { TransactionController } = require('../../../../app/modules/controllers');
const ResponseHelper = require('../../../../app/helpers/response');

const mockDB = require('../../mockDb/database.json');
const { NotFoundError } = require('../../../../app/helpers/exceptions');

describe('Transaction Controller', () => {
    let counterTransactionAndPointServiceStub,
        countTotalTransactionsStub,
        resSuccesStub,
        resErrorStub,
        response;

    let name = 'bruce_banner';

    beforeEach(() => {
        counterTransactionAndPointServiceStub = sinon.spy(
            TransactionService,
            'countTotalAmountTransactionAndPoints',
        );
        countTotalTransactionsStub = sinon.spy(TransactionService, 'countTotalTransactions');
        resSuccesStub = sinon.stub(ResponseHelper, 'success');
        resErrorStub = sinon
            .stub(ResponseHelper, 'error')
            .throws(new NotFoundError('No data transactions!'));
    });

    afterEach(() => {
        counterTransactionAndPointServiceStub.restore();
        countTotalTransactionsStub.restore();
        resSuccesStub.restore();
        resErrorStub.restore();
    });

    describe('getTotalAmountTransactionAndPoints ', () => {
        it('Success', () => {
            TransactionService.countTotalAmountTransactionAndPoints(name);
            const spyCall = TransactionService.countTotalAmountTransactionAndPoints.getCall(0);
            resSuccesStub.returns(spyCall.returnValue);

            response = TransactionController.getTotalAmountTransactionAndPoints(name);

            expect(counterTransactionAndPointServiceStub.calledOnce);
            expect(resSuccesStub.calledOnce).to.be.true;
            expect(response).to.have.property('totalAmountTransaction').to.be.a('number');
            expect(response).to.have.property('totalPoints').to.be.a('number');
            expect(response).to.have.property('totalItems').to.be.a('number');
        });

        it('Error No data Transactions!', () => {
            try {
                TransactionController.getTotalAmountTransactionAndPoints('test');
            } catch (error) {
                resErrorStub.returns(error);
                expect(counterTransactionAndPointServiceStub.calledOnce);
                expect(resErrorStub.calledOnce);

                expect(error.message).to.equal('No data transactions!');
                expect(error.statusCode).to.equal(404);
                expect(error.errors).to.be.null;
            }
        });
    });

    describe('getTotalAmountTransaction ', () => {
        it('Success', () => {
            TransactionService.countTotalTransactions();
            const spyCall = TransactionService.countTotalTransactions.getCall(0);
            resSuccesStub.returns(spyCall.returnValue);

            response = TransactionController.getTotalAmountTransaction();

            expect(counterTransactionAndPointServiceStub.calledOnce);
            expect(resSuccesStub.calledOnce).to.be.true;
            expect(response).to.have.property('totalAmountTransaction').to.be.a('number');
        });
       
        it('Error No data Transactions!', () => {
            try {
                
                response = TransactionController.getTotalAmountTransaction([]);
            } catch (error) {
                resErrorStub.returns(error);
                expect(counterTransactionAndPointServiceStub.calledOnce);
                expect(resErrorStub.calledOnce);
        
                expect(error.message).to.equal('No data transactions!');
                expect(error.statusCode).to.equal(404);
                expect(error.errors).to.be.null;
            }
        });
    });
});
