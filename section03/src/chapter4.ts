/**
 * 대수 타입 : 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입 & 교집합 타입
 * | 를 추가하여 만들수 있는 타입의 개수는 무한대이다.
 */

// 1. 합집합 타입 - Union 타입

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

/** 
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};
*/

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   name: "",
// };

// 2. 교집합 타입 - Intersection 타입
let variable: number & string;
// 기본 타입중에서는 서로 공유하거나 겹치는 값들이 없기에 대부분 never타입이다. 그래서 Intersection 타입은 주로 객체타입에서 사용한다.

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
  // 모든 프로퍼티를 다 갖고 있는 객체만 교집합 타입으로 포함된다.
  name: "",
  color: "",
  language: "",
};
