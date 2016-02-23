'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var SubscriberSchema = new mongoose.Schema({
  name: String,
  email: String
});

exports['default'] = mongoose.model('Subscriber', SubscriberSchema);
module.exports = exports['default'];
//# sourceMappingURL=subscriber.model.js.map
