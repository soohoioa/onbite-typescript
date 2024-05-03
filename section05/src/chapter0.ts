/**
 * 인터페이스
 */

interface Person {
  name: string;
  age?: number;
  //sayHi: () => void; // 메서드 타입도 interface에서 정의 가능하다.
  sayHi(): void; // 메서드의 오버라이딩을 구현하고 싶다면 호출 시그니처 사용 권장
  sayHi(a: number, b: number): void;
}

// 차이점1. 타입별칭에서는 유니온 타입, 인터섹션 타입을 만들수 있지만 인터페이스에서는 유니온 타입, 인터섹션 타입울 만들 수 없다.
// 인터페이스로 만든 Person같은 객체에 유니온 타입, 인터섹션 타입을 이용해야 한다면 타입별칭, 타입주석에 활용해야 한다.
type Type1 = number | string;
type Type2 = number & string;

const person: Person = {
  name: "몽블랑",
  age: 20,
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
