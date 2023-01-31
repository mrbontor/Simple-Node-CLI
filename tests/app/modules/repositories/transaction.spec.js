const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const readData = require('../../../../app/libs/fsLib');
const { TransactionRepository } = require('../../../../app/modules/repositories');

describe('TransactionRepository', () => {
    describe('getTransactionRepository', () => {
        it('Success', () => {
            let readerStub = sinon.spy(readData, 'readData');
            readerStub.restore();

            let response = TransactionRepository.getTrasactions();

            expect(response).to.be.an('array');
            response.every((i) => expect(i).to.have.all.keys('id', 'user','total_amount_transaction', 'transaction_date'));
            expect(response).to.have.length.at.least(1);
        });
    });
});
