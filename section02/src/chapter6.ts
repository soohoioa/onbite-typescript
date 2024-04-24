// any : 특정 변수의 타입을 우리가 확실히 모를때 사요할 수 있는 타입
let anyVar: any = 10; // 여기서 anyVar는 범용적으로 사용된다고 가정.
/**
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};
anyVar.toUpperCase();
anyVar.toFixed();
any 를 사용하면 숫자, 문자, 함수, 메소드등 제약없이 자유롭게 사용이 가능하다. -> 자바스크립트 변수처럼
 */

let num: number = 10;
num = anyVar; // any타입은 변수에 지정할 경우 모든 타입의 값을 할당받을 수 있고, 반대로 모든 타입의 변수에 any타입을 넣을 수도 있다.
/**
any타입은 타입검사를 어찌되든 다 통과하는 치트키같은 타입이기 때문에 사실상 타입 검사를 안하는거와 똑같다. 
변수에 any타입을 지정한다는 건 타입스크립트가 가지는 이점을 다 포기한다는 것과 다를게 없다.
오류가 있는 코드도 감사를 다 통과하고 런타임 에러가 발생하는 최악의 오류가 발생한다. -> any타입은 최대한 사용하지 않는것이 좋다.
 */

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
/**
unknown은 모든 타입의 값을 할당받을 수 있지만, 반대로 모든 타입의 변수에 unknown타입을 넣을 수 없다.
메소드, 연산 자체도 unknown타입 에서는 사용이 불가능하다. 
 */
if (typeof unknownVar === "number") {
  num = unknownVar;
} // 만약 unknown타입의 값을 사용하고 싶다면 조건문으로 typeof를 사용하여 unknownVar가 number타입이라 지정해줄 때만 number타입으로 정제해서 사용가능하다.
// 변수에 저장할 값의 타입이 확실하지 않을 때는 any타입 보다는 조금 더 안전한 unknown타입을 활용하는게 좋다.
