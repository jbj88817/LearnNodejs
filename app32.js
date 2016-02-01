// object properties and methods

var obj = {
    greet : 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

// functions and arrays
var arr = [];

//arr.push('hello');
arr.push(function(){
    console.log('Hello1');
});

arr.push(function(){
    console.log('Hello2');
});

arr.push(function(){
    console.log('Hello3');
});

arr.forEach(function(item) {
    item();
})
