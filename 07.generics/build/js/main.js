"use strict";
// function getArrayLength(arr: number[] | string[] | boolean[]): number {
//   return arr.length
// }
function getArrayLength(arr) {
    return arr.length;
}
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const array3 = [true, false, true];
getArrayLength(array1);
getArrayLength(array2);
getArrayLength(array3);
const car = {
    name: 'car',
    color: 'red',
    option: {
        price: 1000
    }
};
const bike = {
    name: 'bike',
    color: 'green',
    option: true
};
// ================================================================
const makeArr = (x, y) => {
    return [x, y];
};
const arr1 = makeArr(4, 5);
const arr2 = makeArr('a', 'b');
const makeArr1 = (x, y) => {
    return [x, y];
};
const arr3 = makeArr1('a', 'b');
const makeFullName = (obj) => {
    // <T extends 어쩌구> = 어쩌구라는 매개변수는 반드시 호출할 때 인자로 포함되어야한다. 라는 뜻이다.
    return Object.assign(Object.assign({}, obj), { fulleName: obj.firstName + ' ' + obj.lastName });
};
makeFullName({ firstName: 'John', lastName: 'Doe', location: 3 });
