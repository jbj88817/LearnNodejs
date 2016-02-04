var fs = require('fs');

var readable = fs.createReadStream(__dirname + 
'/greet51.txt', {encoding: 'utf8', highWaterMark: 16*1024});

var writable = fs.createWriteStream(__dirname + 
'/greetcopy51.txt');

readable.on('data', function(chunk) {
    console.log(chunk.length);
    writable.write(chunk);
});