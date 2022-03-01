abstract class AbstractPerson {
  protected _name: string = 'Mark';

  abstract setName(name: string): void;
}

class Person extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }

}

const p = new Person();
p.setName('Mark Jr');

