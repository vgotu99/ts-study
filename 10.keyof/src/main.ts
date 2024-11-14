interface IUser {
  name: string;
  age: number;
  address: string;
}

type UserKeys = keyof IUser; // keyof를 이용해서 IUser의 key들만 모아서 UserKeys type을 정의한다.
// 'name' | 'age' | 'address'


const user = {
  name: "John",
  age: 20,
  address: "seoul",
};

type UserKeys1 = keyof typeof user // keyof는 객체 타입에만 사용 가능하다.
// typeof를 이용해서 user 객체를 {name: string, age: number, address: string} 형태의 객체 타입으로 변경하고 keyof를 이용해서 IUser의 key들만 모아 UserKeys1 type을 정의한다.

enum UserRole {
  admin,
  manager
}

type UserRoleKeys = keyof typeof UserRole