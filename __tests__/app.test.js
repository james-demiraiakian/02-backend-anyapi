const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Cat = require('../lib/models/Cat');

describe('01-backend-anyapi routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  test('create a cat', async () => {
    const expected = {
      name: 'Ducky',
      age: 12,
      coat: 'Orange Tabby',
    };
    const res = await request(app).post('/api/v1/cats').send(expected);

    expect(res.body).toEqual({ id: expect.any(Number), ...expected });
  });

  test('fetch a list of cats', async () => {
    const expected = await Cat.findAll();
    const res = await request(app).get('/api/v1/cats');

    expect(res.body).toEqual(expected);
  });

  test('fetch a cat by id', async () => {
    const expected = await Cat.findById(1);
    const res = await request(app).get(`/api/v1/cats/${expected.id}`);

    expect(res.body).toEqual({ ...expected });
  });

  test('return 404 for not found', async () => {
    const res = await request(app).get('/api/v1/cats/counterfeit-cat');

    expect(res.status).toEqual(404);
  });
});
