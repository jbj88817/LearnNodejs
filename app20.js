function Person(firstname, lastname) {
    this.lastname = lastname;
    this.firstname = firstname;
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' +
    this.lastname);
}

var john = new Person('John', 'Doe');
console.log(john.firstname);
john.greet();

var jane = new Person('Jane', 'Boor');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);