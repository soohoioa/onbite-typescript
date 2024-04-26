/**
Unknown 타입
Unknown 타입 변수에는 업캐스팅을 해서 모든 값을 넣을 수 있지만, 
반대로 Unknown 타입 변수는 어떤 타입의 변수에도 들어갈 수 없다. -> 다운캐스팅은 안된다.
 */
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
  //let unm: number = unknownVar;
  //let str: string = unknownVar;
  //let bool: boolean = unknownVar;
}

/**
Never 타입
모든 타입의 서브타입(모든 집합의 부분집합)이므로 어떤 변수에도 값을 다 넣을 수 있다.
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //let never1: never = 10; // never 타입에 숫자를 넣는것은 number 타입이 never타입으로 다운캐스팅 된다는 것으로 오류 발생
  //let never2: never = "String";
  //let never3: never = true;
}

/**
Void 타입
return문 자체가 없는 함수에 반환값 타입을 명시하는데 사용돤다.
-> void 타입은 undefined 타입의 super타입니다.
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined;
}

/**
any 타입 (타입 계층도를 아예 무시함)
never타입을 제외하고 any 타입은 모든 타입의 super타입으로 위치하기도 하고 모든타입의 sub 타입으로 위치하기도 한다.
-> 위험한 타입으로 웬만하면 사용 안하는것이 좋다.
예외적으로 never타입은 순수한 공집합이기 때문에 never타입 변수에는 그 어떤 타입도 다운캐스팅이 불가능하다.
 */

function anyExam() {
  let unknownVar: undefined;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;
  // neverVar = anyVar;
}
