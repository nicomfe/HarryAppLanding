'use strict';

var app = require('../..');
import request from 'supertest';

var newSubscriber;

describe('Subscriber API:', function() {

  describe('POST /api/subscriber', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/subscriber')
        .send({
          name: 'New Subscriber',
          info: 'This is the brand new subscriber!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSubscriber = res.body;
          done();
        });
    });

    it('should respond with the newly created subscriber', function() {
      newSubscriber.name.should.equal('New Subscriber');
      newSubscriber.info.should.equal('This is the brand new subscriber!!!');
    });
  });
});
