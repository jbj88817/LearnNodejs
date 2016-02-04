var fs = require('fs');
var zlib = require('zlib');


var readable = fs.createReadStream(__dirname + 
'/greet53.txt');

var writable = fs.createWriteStream(__dirname + 
'/greetcopy53.txt');

var compressed = fs.createWriteStream(__dirname + 
'/greet53.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);