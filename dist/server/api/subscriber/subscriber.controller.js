/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/subscriber              ->  index
 * POST    /api/subscriber              ->  create
 * GET     /api/subscriber/:id          ->  show
 * PUT     /api/subscriber/:id          ->  update
 * DELETE  /api/subscriber/:id          ->  destroy
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.create = create;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var Subscriber = require('./subscriber.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

// Creates a new Subscriber in the DB

function create(req, res) {
  Subscriber.createAsync(req.body).then(responseWithResult(res, 201))['catch'](handleError(res));
}
//# sourceMappingURL=subscriber.controller.js.map
