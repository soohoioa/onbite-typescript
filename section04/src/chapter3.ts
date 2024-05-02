/**
 * 함수 오버로딩 : 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 문법
 * 자바스크립트에서는 지원이 안되고 오직 타입스크립트에서만 지원이 된다.
 * - 하나의 함수 func, 모든 매개변수의 타입 number,
 * - Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
 * - Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한값을 출력
 */

// 1. 가장 먼저 함수에 어떤 버전들이 있는이 알려줘야 한다. -> 함수의 구현부 없이 선언식만 써놓은 것을 오버로드 시그니처 라고 부른다.
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 2. 함수의 실제 구현부를 만들어준다. -> 구현 시그니처 라고 부른다.
// 오버로드 시그니처들의 매개변수에 개수 차이가 있다면 최대한 방어적으로 선택적 프로퍼티 ? 를 사용하여 매개변수들을 정의해서 모든 오버로드 시그니처들이 의미가 있도록 만들어준다.
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);
func(1, 2, 3);
