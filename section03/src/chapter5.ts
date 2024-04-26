/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
// 타입스크립트가 타입을 추론하는 기준은 변수의 초기값이다.
let c = {
  id: 1,
  name: "몽블랑",
  propile: {
    nickname: "바밤바",
  },
  urls: ["https://aaa.com"],
};

let { id, name, propile } = c;

let [one, two, thrre] = [1, "hello", true];
// 웬만한 변수선언은 자동으로 추론한다.

function func() {
  return "hello";
}
// 함수의 반환값 타입을 추론할때는 초기화하는 값이 아닌 return문 다음에 오는 반환값 타입을 기준으로 추론한다.

function func1(message = "hello") {
  return "hello";
}
// 매개변수가 있을때 매개변수에 기본값이 설정되어 있다면 기본값을 기준으로 타입을 추론한다.

/**
 * 마치 타입이 변신하듯 계속 바뀌는 상황을 Any 타입의 진화 라고 한다.
 */
let d; // 변수를 선언 후 초기값을 지정하지 않으면 암묵적으로 any타입으로 추론된다.
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
