// void : 아무것도 없음을 의미하는 타입
function func1(): string {
  return "hello"; // 함수의 반환값에도 타입 정의할 수 있다. -> 함수의 매개변수를 작성하는 ()뒤에 타입 주석을 써준다.
}

function func2(): void {
  console.log("hello");
  return undefined;
}
/**
함수의 반환 값 타입을 undefined 으로 정의하면 undefined 이라는 값을 반환하도록 만들어야 한다. 
함수의 반환 값 타입을 null 으로 정의하면 null 이라는 값을 반환하도록 만들어야 한다. 
-> 반환값의 타입으로 undefined 이나 null 을 정의해버리면 진짜 undefined 이나 null 을 반환하기 위해서 return문을 또 작성해줘야 한다.
-> return문으로 사용하고 싶지 않은 함수의 반환값 타입으로 void를 사용한다. 
 */

let a: void; // 변수에도 void타입으로 정의할 수 있으며 아무런 값도 담을 수가 없지만 undefined 이나 null 은 가능하다.
a = undefined;

// never : 존재하지 않는 불가능한 타입
function func3(): never {
  while (true) {}
} // 절대로 정상적으로 종료됭 수가 없어서 함수에 반환값이 있는거 자체가 모순이다 하는 경우에 사용하는 타입

function func4(): never {
  throw new Error();
}

let b: never; // 변수에도 never 타입으로 정의할 수 있으며 undefined 이나 null 을 포함하여 아무런 값도 담을 수가 없다.
