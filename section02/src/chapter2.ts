// 배열
let numArr: number[] = [1, 2, 3];
let strArr: String[] = ["Hello", "TypeScript", "World"];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | String)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 -> 타입스크립트에서만 제공되는 타입
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, String, boolean] = [1, "2", true];
tup1.push(1); // 배열 메소드를 사용하면 튜플의 길이제한이 발동하지 않는다. -> 자바스크립트 배열이라 생각하기 때문에 알아보지 못함
// push(), pop()등 배열 메소드 사용시 주의해서 사용해야 한다.

const users: [String, number][] = [
  ["몽블랑", 1],
  ["바밤바", 2],
  ["메로나", 3],
  ["보석바", 4],
  //[5, "누가바"],
]; // 배열을 사용할 때 인덱스의 위치에 따라 넣어야 하는 값들이 이미 정해져있고, 순서를 지키는게 중요할때 튜플을 사용한다.
