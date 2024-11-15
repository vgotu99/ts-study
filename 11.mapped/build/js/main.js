"use strict";
// Mapped
// Mapped type은 중복을 피하기 위해 다른 타입을 바탕으로 새로운 타입을 생성할 수 있다.
// type이 다른 type에서 파생되고 동기화 상태를 유지해야 하는 경우에 특히 유용하다.
// { [T in unionType] : type_of_value }
// map method처럼 하나씩 순회를 하며 객체 타입을 만들어주는 느낌!
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
