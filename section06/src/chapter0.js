/**
 * 자바스크립트의 클래스
 */
let studentA = {
  name: "몽블랑",
  grade: "A+",
  age: 30,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요");
  },
};

// 동일한 형식, 동일한 모양의 객체를 여러개 만들어야 한다면 중복코드 발생 -> 이때 자바스크립트의 클래스를 사용
class Student {
  // 필드 : 클래스가 만들어낼 객체의 프로퍼티
  name;
  grade;
  age;

  // 생성자 : 객체를 생성하는 역할을 하는 함수 (객체를 만드는 메서드)
  constructor(name, grade, age) {
    // 매개변수로 받은 값들을 실제로 만들 객체의 프로퍼티의 값으로 설정
    this.name = name;
    this.grade = grade;
    this.age = age;
    // 여기서 this 는 이 클래스가 만들고 있는 객체
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다!`);
    // this를 메서드 안에서 이용하면 현재 객체의 프로퍼티의 값들을 가져와서 메서드에 사용할 수 있다.
  }
}

// 클래스를 이용해서 만든 객체를 인스턴스 라고 부른다. -> 스튜던트 인스턴스 라 할 수 있음
let studentB = new Student("바밤바", "B+", 20);
console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    //super 함수를 호출하면 부모클래스의 생성자가 호출된다.
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함.`);
  }
}

const studentDeveloper = new StudentDeveloper("메로나", "C+", 25, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
