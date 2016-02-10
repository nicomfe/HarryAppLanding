'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var subscriberCtrlStub = {
  index: 'subscriberCtrl.index',
  show: 'subscriberCtrl.show',
  create: 'subscriberCtrl.create',
  update: 'subscriberCtrl.update',
  destroy: 'subscriberCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var subscriberIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './subscriber.controller': subscriberCtrlStub
});

describe('Subscriber API Router:', function() {

  it('should return an express router instance', function() {
    subscriberIndex.should.equal(routerStub);
  });

  describe('POST /api/subscriber', function() {

    it('should route to subscriber.controller.create', function() {
      routerStub.post
        .withArgs('/', 'subscriberCtrl.create')
        .should.have.been.calledOnce;
    });
  });
});
