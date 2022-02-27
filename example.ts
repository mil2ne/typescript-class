class Person {
  public constructor(private _name: string, private age: number){}

  get name() {
    return this._name + ' Hello';
  }

  set name(n: string) {
    this._name = n;
  }
}


const p1 = new Person("Mark",22);
console.log(p1.name); // get
p1.name = "David" //  set
console.log(p1.name);