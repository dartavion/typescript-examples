import { Person } from './person';
import { expect } from 'chai';
import 'mocha';
import sinon, { SinonFakeServer } from 'sinon';


describe('Person', () => {
  let server:SinonFakeServer;

  before(() => server = sinon.fakeServer.create());
  after(() => server.restore());

  it('has replies with boolean', () => {
    // server.respondWith('boo')
    const ted = new Person();

    let reply = ted.ask(`has glasses`);
    expect(reply).to.be.true
    
  })
})