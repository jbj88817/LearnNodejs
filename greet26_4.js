function Greetr() {
    this.greeting = 'Hello 4';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;