/**
 * 접근 제어자
 * access modifier => public, private, proteced
 */

class Employee {
  // 필드
  name: string;
  // private 로 설정된 필드는 클래스 내부에서만 사용이 가능하고 파생클래스에서 조차 접근을 할 수 없다.
  age: number;
  // protected는 외부에서는 접근을 막지만 파생클래스까지는 허용하고 싶을때 사용한다.
  position: string;
  // 앞에 아무것도 없다면 public 이 생략되어 있고, 외부에서 접근이 가능하다.

  // 생성자
  constructor(name: string, age: number, position: string) {
    // 접근제어자는 생성자의 매개변수 앞에 설정도 가능하다. -> 자동으로 필드를 만들기 때문에 필드를 또 작성할 이유가 없다.
    // -> 생성자에 접근제어자를 설정하면 필드 정의는 생략가능하다.
    // 또한 생성자에 접근제어자가 붙어있는 매개변수들은 자동으로 필드도 정의하고, 필드의 값 초기화도 자동으로 한다.
    // -> this.name = name; 을 생략해도 오류는 발생하지 않는다.
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

  // 메서드
  func() {
    this.name;
    this.age;
  }
}

const employee = new Employee("몽블랑", 20, "개발자");
employee.name = "바밤바";
employee.age = 30;
employee.position = "디자이너";

console.log(employee);
