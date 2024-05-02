/**
 * 함수 타입 표현식
 * 타입 별칭을 이용해서 자바스크립트 화살표 함수를 만들듯이 함수의 타입을 타입 별칭으로 별도로 정의해줄 수 있다.
 * 함수의 타입을 표현식으로 정의할 때는 매개변수의 개수와 타입을 맞춰줘야 한다.
 */
type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b;
// 타입 별칭 없이 표현식만으로도 타입을 정의할 수 있다.
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

/**
 * 호출 시그니처 (콜 시그니처)
 * 함수의 타입을 별도로 정의하는 문법으로 함수 타입 표현식과 동일한 기능을 한다.
 */
type Operation2 = {
  (a: number, b: number): number;
  name: string;
};
/**
 * 함수의 타입을 정의하는데 {}를 열어서 객체타입을 정의하듯이 하는 이유는 실제 자바스크립트의 함수도 객체이기 때문이다.
 */
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;
