// Mapped
// Mapped type은 중복을 피하기 위해 다른 타입을 바탕으로 새로운 타입을 생성할 수 있다.
// type이 다른 type에서 파생되고 동기화 상태를 유지해야 하는 경우에 특히 유용하다.
// { [T in unionType] : type_of_value }
// map method처럼 하나씩 순회를 하며 객체 타입을 만들어주는 느낌!
type AppConfig = {
  username: string
  email: string
  imgURL: string
  phone: number
}

type AppPermissions = {
  changeUsername: boolean
  changeEmail: boolean
}
// 위의 AppPermissions는 AppConfig에 새로운 타입인 a: string을 추가하면 일일히 changeA: boolean 타입을 추가해줘야한다. 따라서 아래 처럼 mapped type을 이용해서 AppConfig 타입에 새로운 타입이 추가되면 AppPermissionsMapped 타입에 새로운 타입이 추가되도록 변경해주면 유지보수에 좋다!
type AppPermissionsMapped = {
  [K in keyof AppConfig as `change${Capitalize<K>}`]: boolean
}
/* 위 OptinalType은 아래와 같은 형태의 객체 타입이 된다.
type AppPermissionsMapped = {
  chageUsername: boolean
  chageEmail: boolean
  chageImgURL: boolean
  chagePhone: boolean
}
*/

type Users = "John" | "Han" | "Kim";

type UserAge = { [T in Users]: number };
/* 위 UserAge는 Mapped type을 이용해서 아래와 같은 형태의 객체 타입이 된다.
type UserAge = {
  John: number,
  Han: number,
  Kim: number
}
*/

const userFirstNameInfo: UserAge = {
  John: 25,
  Han: 31,
  Kim: 22,
  // Kim: true
  // Lee: 27
  // key는 반드시 Users에 속하는 타입이어야하고 value는 반드시 UserFirstNames에 속하는 타입이어야한다.
};


type DeviceFormatter<T> = {
  [K in keyof T]: T[K];
};

type Device = {
  manufacturer: string;
  price: number;
};

const iphone: DeviceFormatter<Device> = {
  manufacturer: "apple",
  price: 300,
};


type OptinalType<T> = {
  [K in keyof T]? : T[K]
  // 선택 속성으로 만드는 방법 1
}
/* 위 OptinalType은 아래와 같은 형태의 객체 타입이 된다.
type OptinalType = {
  a?: string,
  b?: number,
  c?: boolean
}
*/

type Type = {
  a: string,
  b: number,
  c: boolean
}

const x:OptinalType<Type> = {
  a: 'a',
  b: 3,
}

type OptinalType1<T, P extends keyof T> = Omit<T, P> & Partial<Pick<T, P>>
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

const yxz: OptinalType1<Type, 'c'> = {
  a: 'a',
  b: 2,
  // c는 생략가능
}