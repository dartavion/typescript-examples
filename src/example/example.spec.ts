import { Example } from './example'
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {

  it('should return hello world', () => {
    const example = new Example();
    const result = example.helloWorld()
    expect(result).to.equal('Hello World!');
  });

});