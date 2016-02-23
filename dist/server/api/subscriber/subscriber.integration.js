'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var app = require('../..');

var newSubscriber;

describe('Subscriber API:', function () {

  describe('POST /api/subscriber', function () {
    beforeEach(function (done) {
      (0, _supertest2['default'])(app).post('/api/subscriber').send({
        name: 'New Subscriber',
        info: 'This is the brand new subscriber!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newSubscriber = res.body;
        done();
      });
    });

    it('should respond with the newly created subscriber', function () {
      newSubscriber.name.should.equal('New Subscriber');
      newSubscriber.info.should.equal('This is the brand new subscriber!!!');
    });
  });
});
//# sourceMappingURL=subscriber.integration.js.map
