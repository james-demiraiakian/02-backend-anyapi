const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('01-backend-anyapi routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });
});

test('create a cat', async () => {
  const expected = {
    name: 'Eowyn',
    age: 8,
    coat: 'Calico',
  };
  const res = await request(app).post('/api/v1/dogs').send(expected);

  expect(res.body).toEqual(expected);
});
