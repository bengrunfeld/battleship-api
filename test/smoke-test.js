const server = require('../server.js')
const expect = require('chai').expect
const supertest = require('supertest')

describe('Smoke Test', function () {

  beforeEach((done) => {
    supertest(server)
      .post('/battleship')
      .send({ positions: [[0,3], [4,8], [6,6]]})
      .expect(200)
      .end(function(err, res) {
        done()
      })
  })

  describe('/battleship', () => {
    it('shows miss', (done) => {
      assertAttack(0, 4, 'miss', done)
    })

    it('shows hit', (done) => {
      assertAttack(0, 3, 'hit', done)
    })

    it('shows sunk', (done) => {
      assertAttack(0, 3, 'hit', () => {
        assertAttack(0, 2, 'hit', () => {
          assertAttack(0, 1, 'sunk', done)
        })
      })
    })
  })

  function assertAttack(x, y, expectedResult, callback) {
    supertest(server)
      .put('/battleship')
      .expect(200)
      .send({ x: x, y: y })
      .end(function(err, res) {
        expect(res.body.message).to.equal(expectedResult)
        callback()
      })
  }
})
