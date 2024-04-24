// enum 타입(열거형 타입) : 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// -> js에는 없지만 ts에서만 제공하는 새로운 타입

enum Role { // 숫자형 enum : 숫자를 자동으로 할당시킬 수도 있고, 직접 시작하는 숫자를 할당할 수도 있다.
  ADMIN,
  USER,
  GUEST,
} // 굳이 숫자를 작성하지 않아도 위에서부터 순서대로 0, 1, 2, ... 식으로 숫자가 자동으로 들어간다.
// 만약 처음 숫자를 10으로 작성하면 +1씩 증가하여 숫자가 자동으로 들어간다.

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "몽블랑",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
};
const user2 = {
  name: "바밤바",
  role: Role.USER, // 1 <- 일반유저
  language: Language.english,
};
const user3 = {
  name: "메로나",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);
/**
enum은 특이하게도 컴파일 결과 사라지지 않는다. -> tsc 로 컴파일해보면 복잡하지만 enum이 자바스크립트의 객체로 변환되고 있다.
타입스크립트의 enum은 컴파일 결과 사라지지 않고 자바스크립트의 객체로 변환되기 때문에 
코드상에서 role: Role.USER, language: Language.english, 처럼 값을 사용하듯이 사용할 수 있다. 
 */
