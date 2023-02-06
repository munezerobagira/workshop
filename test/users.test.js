const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../index');
// console.log(app);
const expect = chai.expect;

describe('GET /users', () => {
  it(' should have 200 status', async () => {
    const response = await chai.request(app).get('/users');
    expect(response).have.status(200);
  });
  it(' should have users array', async () => {
    const response = await chai.request(app).get('/users');
    expect(response.body).be.an('array');
  });
});
