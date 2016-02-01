var greet = require('./greet26_1');
greet();

var greet2 = require('./greet26_2').greet;
greet2();

var greet3 = require('./greet26_3');
greet3.greet();
greet3.greeting = 'Changed';

var greet3b = require('./greet26_3');
greet3b.greet();

var Greet4 = require('./greet26_4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet26_5').greet;
greet5();