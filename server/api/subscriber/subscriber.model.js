'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var SubscriberSchema = new mongoose.Schema({
  name: String,
  email: String
});

export default mongoose.model('Subscriber', SubscriberSchema);
