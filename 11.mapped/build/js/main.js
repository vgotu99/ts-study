"use strict";
/* 위 UserAge는 Mapped type을 이용해서 아래와 같은 형태의 객체 타입이 된다.
type UserAge = {
  John: number,
  Han: number,
  Kim: number
}
*/
const userFirstNameInfo = {
    John: 25,
    Han: 31,
    Kim: 22,
    // Kim: true
    // Lee: 27
    // key는 반드시 Users에 속하는 타입이어야하고 value는 반드시 UserFirstNames에 속하는 타입이어야한다.
};
const iphone = {
    manufacturer: "apple",
    price: 300,
};
const x = {
    a: 'a',
    b: 3,
};
// 선택 속성으로 만드는 방법 2
/* 위 OptinalType1은 아래와 같은 형태의 객체 타입이 된다.
type OptinalType1 = {
  a: string,
  b: number,
}
Omit<T, P>로 T 타입에서 P 속성을 제거한다.
Pick<T, P>로 T 타입에서 P 속성만 추출해서 새로운 타입으로 만들어준다.
Partial<newP>로 P 속성을 선택 속성으로 변경한다 => c?: boolean
*/
const yxz = {
    a: 'a',
    b: 2,
    // c는 생략가능
};
