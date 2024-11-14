// function getArrayLength(arr: number[] | string[] | boolean[]): number {
//   return arr.length
// }

function getArrayLength<T>(arr: T[]): number {
  return arr.length
}

const array1 = [1, 2, 3]
const array2 = ['a', 'b', 'c']
const array3 = [true, false, true]

getArrayLength<number>(array1)
getArrayLength<string>(array2)
getArrayLength<boolean>(array3)

// ================================================================

interface Vehicle<T> {
  name: string
  color: string
  option: T
}

const car: Vehicle<{price: number}> = {
  name: 'car',
  color: 'red',
  option: {
    price: 1000
  }
}

const bike: Vehicle<boolean> = {
  name: 'bike',
  color: 'green',
  option: true
}

// ================================================================

const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y]
}

const arr1 = makeArr<number, number>(4, 5)
const arr2 = makeArr<string, string>('a', 'b')

const makeArr1 = <X, Y= string>(x: X, y: Y): [X, Y] => {
  return [x, y]
}

const arr3 = makeArr1<string>('a', 'b')

const makeFullName = <T extends {firstName: string, lastName: string}>(obj: T) => {
  // <T extends 어쩌구> = 어쩌구라는 매개변수는 반드시 호출할 때 인자로 포함되어야한다. 라는 뜻이다.
  return {
    ...obj,
    fulleName: obj.firstName + ' ' + obj.lastName
  }
}

makeFullName({firstName:'John', lastName:'Doe', location:3})