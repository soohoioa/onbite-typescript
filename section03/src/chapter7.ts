/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed()
// value => string : toUpperCase()
// value => Date : getTime()
// value => Person : name은 age살 입니다.
function func1(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
    // instanceof: 왼쪽에 있는 값이 오른쪽에 instance냐 라고 물어보는 연산자 -> 그렇다고 하면 treu, 아니다라고 하면 false 반환
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
