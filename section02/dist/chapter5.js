// enum 타입(열거형 타입) : 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// -> js에는 없지만 ts에서만 제공하는 새로운 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {})); // 굳이 숫자를 작성하지 않아도 위에서부터 순서대로 0, 1, 2, ... 식으로 숫자가 자동으로 들어간다.
// 만약 처음 숫자를 10으로 작성하면 +1씩 증가하여 숫자가 자동으로 들어간다.
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
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
export {};
/**
enum은 특이하게도 컴파일 결과 사라지지 않는다.
 */
