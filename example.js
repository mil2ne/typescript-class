"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        // console.log('get');
        return this._name + ' Hello';
    }
    set name(n) {
        console.log('set');
        this._name = n;
    }
}
const p1 = new Person("Mark", 22);
console.log(p1.name); // get
p1.name = "David"; //  set
console.log(p1.name);
