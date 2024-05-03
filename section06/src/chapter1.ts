/**
 * 타입스크립트의 클래스
 * 타입스크립트의 클래스는 자바스크립트 클래스로 취급이 되면서 동시에 타입으로 취급된다. -> 클래스 자체가 하나의 타입으로도 작용할 수 있다.
 * -> 타입스크립트는 구조적으로 타입을 결정하는 구조적타입 시스템을 따른다. -> 클래스의 구조를 보고 필드와 메서드가 있으면 employee 타입이라 하자라는 식으로 결정한다.
 */

const employee = {
  name: "몽블랑",
  age: 30,
  position: "developer",
  work() {
    console.log("일하는중");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일하는중");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("바밤바", 20, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
