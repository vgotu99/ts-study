// Boolean
let boolean: boolean;
let falseBoolena: boolean = false;

// Number
let number: number;
let integer: number = 6;
let float: number = 1.2345;

// String
let string: string;
let firstName: string = "Doe";

// Union
let union: (string | number )
union = 'hi'
union = 123
// union = false // boolean 타입은 정의해주지 않았으므로 boolean 값 할당 불가능

// Array
  // 한가지 타입만 가지는 배열
  let names1: string[] = ["John", "Kim"];
  let names2: Array<string> = ["John", "Kim"];

  // 여러 타입을 가지는 배열(유니언 타입 사용)
  let array1: (string | number)[] = ["John", 1, 2];
  let array2: Array<string | number> = ["John", 1, 2];

  // 여러 타입을 단언할 수 없는 경우는 any를 사용
  let someArray: any[] = ["John", 1, [], {}, false];

// Interface, Type

// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray1: readonly string[] = ["A", "B"];
let stringArray2: ReadonlyArray<string> = ["A", "B"];
let numberArray1: readonly number[] = [1, 2];
let numberArray2: ReadonlyArray<number> = [1, 2];
// 읽기 전용 배열이기 때문에 값을 추가하거나 수정하는 등의 배열 메소드를 사용할 수 없다.
  // stringArray1.push('C')
  // stringArray2[0] = 'C'
  // numberArray1.push(3)
  // numberArray2[0] = 3


// Tuple
let tuple1:[string, number]
tuple1 = ['a', 1]
// tuple 타입은 배열의 인덱스마다 타입을 정의해주는 방식이므로 특정 인덱스에 해당하는 타입의 값만 넣어줄 수 있고 지정해주지 않은 인덱스에는 값을 넣을 수 없다
  // tuple1 = [1, 'a']
  // tuple1 = ['a', 1, 1]

let tuple2: [string, number]
tuple2 = ['a', 1]
tuple2.push(2) // push 메소드를 이용해서 tuple 타입 배열에 값을 넣어줄 수는 있다.
// tuple2.push(false) // 하지만 처음에 정의해준 타입 외의 타입은 추가할 수 없다.
console.log(tuple2) // [ 'a', 1, 2 ]

let users: [number, string][]
users = [[1, 'John'], [2, 'Doe']]

// Any
// 서드파티 라이브러리 사용 시 해당 라이브러리의 타입을 모두 알고 사용할 수는 없으니 그때 사용! 평소에는 가급적 사용xxx
let any: any = 'abc'
any = 1
any = []
any = false

// Unknown
let unknown: unknown = 'abc';
// let string1: string = unknown // unknown 타입으로 정의된 값은 다른 변수에 할당할 수 없다.
let string2: string = unknown as string // as type을 사용하면 unknown 타입으로 정의된 값도 다른 변수에 할당할 수 있다.

// Object
let obj: object = {}
let arr: object = []
// let nul: object = null // 실제로 null은 object가 아니기 때문에 object 타입으로 정의할 수 없다. 다만 tsconfig.json의 "strict": false로 변경해주면 null 값에 object 타입을 정의할 수 있게된다.
let date: object = new Date()

const obj1: {id: number, title: string, description: string} = {
  id: 1,
  title: 'hello',
  description: 'world'
}

// Function
let func1: (arg1: number, arg2: number) => number
// 매개변수와 리턴값에 타입을 정의할 수 있다.
func1 = (x, y) => {
  return x * y
}

let func2: () => void
// 리턴이 없는 경우 void 타입으로 정의해준다.
func2 = () => {
  console.log('func2')
}

// Void
const greeting = (): void => {
  console.log('hi')
}

const hi: void = greeting()
console.log(hi) // undefined

// Never
const throwError = (): never => {
  throw new Error('error')
}

const keepProcessing = (): never => {
  while (true) {
    console.log('keep!!')
  }
}