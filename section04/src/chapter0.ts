/**
 * 함수 정의 타입
 * 함수를 설명하는 가장 좋은 방법
 * JavaScript : 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
 * TypeScript : 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
 */
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의 하는 방법
 */
const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 * - 기본값과 다른 타입으로 매개변수의 타입을 정의하면 오류가 발생한다.
 * - 자동 추론된 매개변수의 타입과 다른 타입의 값을 인수로 전달하면 오류가 발생한다.
 * - 선택적 매개변수는 필수 매개변수(생략하면 안되는 매개변수)들 앞에 오면 오류가 발생한다.
 */
function introduce(name = "몽블랑", age: number, tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
  console.log(`tall : ${tall}`);
}

introduce("몽블랑", 20, 170);
// introduce("몽블랑"); 처럼 tall 이라는 매개변수를 생략하고 싶다면 변수의 이름 뒤에 ? 를 붙여서 선택적 매개변수로 만들어준다.

function getSum(...rest: number[]) {
  // 만약 매개변수의 개수를 정하고 싶다면 튜플타입의 정의해준다.
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}
getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
// 가변적인 길이의 인수들을 전달하면 배열로 묶어 rest라는 변수에 저장할 수 있도록 도와주는 문법이다.
