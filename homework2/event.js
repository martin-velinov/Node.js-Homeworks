
//CORE MODULE 3
var events = require('events');
var eventEmitter = new events.EventEmitter();


eventEmitter.on('hello', function() {
console.log('someone said hello!');
});
eventEmitter.emit('hello');


eventEmitter.once('hello world', () => console.log('listen one time'));
eventEmitter.emit('hello world');
