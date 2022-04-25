import superTest from 'supertest';
import { app } from '../../../src';
import { expect } from 'chai';

describe('MotusIntTest', () => {
  it('should return full word when all letter are found', async () => {
    const result = await superTest(app)
      .get(`/api/motus`)
      .query({ word: 'helloworld' });
    expect(result.text).equal('helloworld');
  });

  it('should return first letter of word when not letter are found and underscore for other letter', async () => {
    const result = await superTest(app)
      .get(`/api/motus`)
      .query({ word: 'abcd' });
    expect(result.text).equal('h_________');
  });

  it('should return all letter found', async () => {
    const result = await superTest(app)
      .get(`/api/motus`)
      .query({ word: 'helfclkwld' });
    expect(result.text).equal('hel_____ld');
  });

  it('should return error 400 when no word is provided', async () => {
    const result = await superTest(app).get(`/api/motus`);
    expect(result.statusCode).equal(400);
  });
});
