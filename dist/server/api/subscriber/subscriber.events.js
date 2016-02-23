/**
 * Subscriber model events
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _events = require('events');

var Subscriber = require('./subscriber.model');
var SubscriberEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
SubscriberEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Subscriber.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    SubscriberEvents.emit(event + ':' + doc._id, doc);
    SubscriberEvents.emit(event, doc);
  };
}

exports['default'] = SubscriberEvents;
module.exports = exports['default'];
//# sourceMappingURL=subscriber.events.js.map
