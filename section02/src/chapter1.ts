// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// String
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// let numA: number = null;
// strictNullChecks : null타입이 아닌 변수에 null값을 할당하는 것을 허용할것인가를 결정하는 옵션

// 리터럴 (값 그 자체가 타입이 된다)
let numA: 10 = 10; // 10 이라는 값만 허용되는 타입을 만들었기 때문에 10 이외의 값은 들어올 수 없다.
let strA: "hello" = "hello";
let boolA: true = true;
