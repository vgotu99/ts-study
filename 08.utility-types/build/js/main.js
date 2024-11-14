"use strict";
// Partial<interface>는 interface이 가진 모든 속성을 선택 속성(?)으로 변환하여 일부 속성만 포함하거나 아무 속성도 포함하지 않을 수 있게 해준다.
const me = {};
const you = { email: "jobh@naver.com" }; // 따라서 선택 속성으로 변환되었기 때문에 여기서 할당된 email은 Address.email: string 타입이 아닌 email?: string | undefined가 된다.
const all = { email: "jobh@naver.com", address: "asd" };
const todo = {
    title: 'clean room',
    completed: false
};
const todo1 = {
    title: 'clean room',
    completed: false,
    createdAt: 123123123,
};
const fruit1 = 'kiwi';
const fruit2 = 1;
let firstUser = {
    firstName: 'John'
};
const cats = {
    tigger: { age: 3, breed: 'korean shorhair', name: 'tigger' },
    boris: { age: 5, breed: 'maine coon', name: 'boris' },
    mordred: { age: 13, breed: 'british shorthair', name: 'mordred' },
};
const fn = (str) => {
    return str;
};
const a = 'hello';
// const b: ReturnType<typeof fn> = true  // typeof fn은 string type이므로 오류 발생!
