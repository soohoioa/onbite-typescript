/**
 * 기본 타입 호환성 : 특정 타입을 다른 타입으로 취급해도 괜찮은지 판단
 */
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입 호환성 : 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은지 판단
 */
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yello",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진돗",
};

animal = dog;
//dog = animal;

type Book = {
  name: string;
  price: number;
};
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한입 크기로 잘라먹는",
  price: 33000,
  skill: "React_js",
};

book = programmingBook;
//programmingBook = book;

/**
 * 초과 프로퍼티 검사
 */
let book2: Book = {
  name: "한입 크기로 잘라먹는",
  price: 33000,
  //skill: "React_js",
};

let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: "한입 크기로 잘라먹는",
  price: 33000,
  //skill: "React_js",
});
// 함수의 인수로 객체를 전달할때 객체 리터럴을 전달하면 초과 프로퍼티가 발동하므로 만약 서브 타입의 객체를 넣는다면

func(programmingBook); // 변수에 저장해두고 인수로 변수를 전달해야 한다.
