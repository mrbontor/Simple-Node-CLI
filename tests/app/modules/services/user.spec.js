const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const { UserRepository } = require('../../../../app/modules/repositories');
const { UserService } = require('../../../../app/modules/services');

const mockDB = require('../../mockDb/database.json');

describe('User Service', () => {
    let getUsersStub, response;

    beforeEach(() => {
        getUsersStub = sinon.stub(UserRepository, 'getUsers');
    });

    afterEach(() => {
        getUsersStub.restore();
    });
    describe('getUsers ', () => {
        it('Success', () => {
            getUsersStub.returns(mockDB.users);

            response = UserService.getUsers();

            expect(getUsersStub.calledOnce).to.be.true;

            expect(response).to.be.an('array');
            response.every(i => expect(i).to.have.all.keys('name'))
            expect(response).to.have.length.at.least(1);
        });

        it('Error No data users!', () => {
            getUsersStub.returns({ users: [] });

            try {
                UserService.getUsers();
            } catch (error) {
                expect(getUsersStub.calledOnce).to.be.true;

                expect(error.message).to.equal('No data users!');
                expect(error.statusCode).to.equal(404);
                expect(error.errors).to.be.null;
            }
        });
    });
});
