// 타입 별칭 : 타입을 마치 변수처럼 정의하도록 도와주는 문법
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function func() {
  type User = {};
  // func()안에 있는 User은 함수 안에서만 사용이 가능하고, 함수 밖에서는 User라는 타입은 위에 있는 타입이다.
}

let user = {
  id: 1,
  name: "몽블랑",
  nickname: "메로나",
  birth: "2000.01.01",
  bio: "안녕",
  location: "강남구",
};

let user2 = {
  id: 2,
  name: "메로나",
  nickname: "메로나",
  birth: "2000.01.01",
  bio: "안녕",
  location: "강남구",
};

// 인덱스 시그니처 : key와 value의 규칙을 기준으로 객체의 type을 정의할 수 있는 문법
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes = {
  Korea: 410,
  UnitedStates: 840,
  UnitedKingdom: 826,
};

/**
만약 countryNumberCodes의 프로퍼티를 지워도 오류가 발생하지 않는다. 
-> 인덱스 시그니처는 규칙만 위반하지 않으면 모든 객체를 허용한다.
아무런 프로퍼티가 없으니까 규칙을 위반할 것도 없다. 
 */
