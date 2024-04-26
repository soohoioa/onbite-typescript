/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};
let person = {} as Person;
person.name = "몽블랑";
person.age = 20;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진돗",
} as Dog;
// 타입 단언으로 객체값을 Dog를 작성했기에 타입 정의는 적어주지 않아도 자동으로 Dog타입으로 추론된다.

/**
 * 타입 단언 규칙
 * 값 as 단언 <- 단언식
 * 값의 타입을 A, 단언하는 타입을 B 라고 가정했을때 (A as B)
 * -> A가 B의 슈퍼타입 이거나 반대로 A가 B의 서브타입 일때 가능하다.
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string; // 다중 단언 -> 절대 좋은 방법 아님

/**
 * const 단언 -> 객체와 사용할때 활용도가 높다.
 */
let num4 = 10 as const;
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// as const를 붙여서 초기화 한 객체는 cat.name="" 처럼 프로퍼티의 값을 수정할 수 없는 객체가 된다.

/**
 * Non Null 단언 : 어떤 값이 null & undefined 이 아니라고 타입스크립트 컴파일러에게 알려주는 역할을 한다.
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "몽블랑",
};

const len: number = post.author!.length;
