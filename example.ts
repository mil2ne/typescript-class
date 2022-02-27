class Person {
  public name: string = "Mark";
  private age: number;

  public constructor(age?: number){
    if(age === undefined){
      this.age = 20;
    } else {
      this.age = age;
    }
  }
}


const p1 = new Person(22);
console.log(p1.);
