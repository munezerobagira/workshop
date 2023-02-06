const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../index');
// console.log(app);
const expect = chai.expect;

describe('GET /posts', () => {
  it('shoud should have 200 status', async () => {
    const response = await chai.request(app).get('/posts');
    expect(response).have.status(200);
  });
  it('shoud should have 200 status', async () => {
    const response = await chai.request(app).get('/posts');
    expect(response.body).be.an('array');
  });
});
