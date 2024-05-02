/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하며 두 가지의 기준이 모두 만족되어야만 두 함수의 타입이 호환된다고 말할 수 있다.
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가 - 반환값 타입끼리는 업캐스팅하는 상황에서만 호환되고, 다운캐스팅하는 상황에서는 호환되지 않는다.
type A = () => number;
type B = () => 10;

let a: A = () => 10; //number
let b: B = () => 10; //number 리터럴

a = b;
// b = a; // A 를 B 에 넣는다는것은 number 타입을 number 리터럴 타입에 넣는다는 것인데 이는 다운캐스팅으로 오류가 발생한다.

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때 - 매개변수의 타입을 기준으로 함수 타입의 호환성을 판단할때는 업캐스팅일땐 안되고, 다운캐스팅일때만 호환된다.
type C = (value: number) => void; //number
type D = (value: 10) => void; //number 리터럴

let c: C = (value) => {};
let d: D = (value) => {};
//c = d;
d = c;

/**
//00. 이 부분은 객체타입으로 이해하면 쉽다.
//01. 객체 타입 생성 : Animal 타입이 조건이 더 적으므로 Dog 타입의 슈퍼타입이다.

type Animal = { // 슈퍼 티입
  name: string;
};

type Dog = { // 서브 타입
  name: string;
  color: string;
};

// 02. 매개변수를 받는 함수 생성
let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

animalFunc = dogFunc; 
// animalFunc 의 매개변수 타입이 더 큰 타입인데 업캐스팅인데 안된다.
// animalFunc 에 dogFunc 를 넣는다는 것은 이런 함수를 만드는 것과 같다.
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  console.log(animal.color); -> 오류 발생
};
// Animal 타입에는 color 이라는 프로퍼티가 없어 오류가 발생한다. 
// 할당하려고 하는 함수의 매개변수의 타입이 Dog 처럼 서브타입일 경우에는 animalFunc = dogFunc; 를 허용하면
// console.log(animal.color); 라는 말도 안되는 코드가 나올수 있기 때문에 업캐스팅을 막아준다.
// 반대로 dogFunc 에 animalFunc 를 넣는다는 것은 이런 함수를 만드는 것과 같다.
dogFunc = animalFunc;
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};
// Dog 타입은 Animal 타입의 서브타입이기 때문에 기본적으로 Animal 타입의 객체들이 갖고 있는 모든 프로퍼티들을 Dog 타입이 이미 갖고있다.
// 그렇기 때문에 animalFunc 를 dogFunc 에 할당해도 문제가 되지 않는다. 
 */

// 2-2. 매개변수의 개수가 다를 때 - 할당 하려고 하는 쪽의 함수의 타입 매개변수의 개수가 더 적을때만 호환된다.
// -> 타입이 다르면 아예 오류가 발생하므로 타입이 같은 매개변수 있어야 된다라고 이해하면 된다.
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
//func2 = func1;
