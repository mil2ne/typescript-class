class Person {
  public readonly name: string = "Mark";
  private readonly country: string;

  public constructor(private _name: string, private age: number){
    this.country = "Korea";
  }

  hello() {
    this.country = 'USA'; // error
  }

}


const p1 = new Person("Mark",22);
console.log(p1.name); // get
p1.name = "David" //  set error
console.log(p1.name);