/**
 * 선언 합침 : 동일한 이름으로 정의한 인터페이스를 합칠 수 있다.
 * 확장이 아닌 선언으로 합칠때에는 서브타입으로 선언해도 문제가 발생하므로 반드시 동일한 타입으로만 정의해야 한다.
 */

interface Person {
  name: string;
}
// 타입별칭과 달리 동일한 이름으로 두 개의 인터페이스를 선언해도 문제가 되지 않는다.
interface Person {
  age: number;
}

const person: Person = {
  name: "",
  age: 4,
};

/**
 * 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
