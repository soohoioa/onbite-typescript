/**
 * 인터페이스 확장
 * 확장(상속) : extends 를 사용하여 다른 인터페이스로부터 해당 인터페이스가 가지고 있는 모든 프로퍼티들을 자동으로 다 포함하도록 만들어주는 문법
 * 인터페이스는 객체타입이면 확장할 수 있다.
 * 인터페이스는 여러가지 인터페이스를 확장하는 다중 확장이 가능하다.
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // 인터페이스 Dog 는 인터페이스 Animal 을 확장하는 타입이다.
  //name: "hello"; // string으로 정의해줬지만 string 리터럴 타입으로 해주었기에 결과적으로는 spring 리터럴 타입이 된다.
  // 모두 정의할수 있는것이 아닌 규칙이 있는데 다시 정의하려고 하는 타입이 원본 타입의 서브타입 이어야 한다.
  // Dog 타입은 Animal타입을 확장하는 서브타입이기 때문에 타입이 다르면 오류가 발생한다.
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 인터페이스의 다중 확장
interface DogCat extends Dog, Cat {
  // Dog 와 Cat 이 가지고 있는 프로퍼티들을 모두 가질 수 있다.
}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
