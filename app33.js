var Emitter = require('./emitter33');

var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('Somewhere someone said hello');
});

emtr.on('greet', function() {
    console.log('A greeting occurred!');
});

console.log('Hello!');

emtr.emit('greet');