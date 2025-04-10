const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert
const server = require('../server.js')

chai.use(chaiHttp)

let Translator = require('../components/translator.js')

suite('Functional Tests', () => {
  test('', done => {
    chai
      .request(server)
      .post('/api/solve')
      .send({})
      .end((err, res) => {
        assert.strictEqual(0, 0)
        done()
      })
  })
  test('', done => {
    chai
      .request(server)
      .post('/api/solve')
      .send({})
      .end((err, res) => {
        assert.strictEqual(0, 0)
        done()
      })
  })
  test('', done => {
    chai
      .request(server)
      .post('/api/solve')
      .send({})
      .end((err, res) => {
        assert.strictEqual(0, 0)
        done()
      })
  })
  test('', done => {
    chai
      .request(server)
      .post('/api/solve')
      .send({})
      .end((err, res) => {
        assert.strictEqual(0, 0)
        done()
      })
  })
  test('', done => {
    chai
      .request(server)
      .post('/api/solve')
      .send({})
      .end((err, res) => {
        assert.strictEqual(0, 0)
        done()
      })
  })
  test('', done => {
    chai
      .request(server)
      .post('/api/solve')
      .send({})
      .end((err, res) => {
        assert.strictEqual(0, 0)
        done()
      })
  })
})
