const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const readData = require('../../../../app/libs/fsLib');
const { UserRepository } = require('../../../../app/modules/repositories');

describe('User Repository', () => {
    describe('getUsers', () => {
        it('Success', () => {
            let readerStub = sinon.spy(readData, 'readData');
            readerStub.restore();

            let response = UserRepository.getUsers();

            expect(response).to.be.an('array');
            response.every((i) => expect(i).to.have.all.keys('name'));
            expect(response).to.have.length.at.least(1);
        });
    });
});
