"use strict";
// 'name', 'age', 'address'
const user = {
    name: "John",
    age: 20,
    address: "seoul",
};
// typeof를 이용해서 user 객체를 {name: string, age: number, address: string} 형태의 객체 타입으로 변경하고 keyof를 이용해서 IUser의 key들만 모아 UserKeys1 type을 정의한다.
var UserRole;
(function (UserRole) {
    UserRole[UserRole["admin"] = 0] = "admin";
    UserRole[UserRole["manager"] = 1] = "manager";
})(UserRole || (UserRole = {}));
