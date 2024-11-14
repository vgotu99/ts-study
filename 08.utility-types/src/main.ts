// Partial
interface Address {
  email: string;
  address: string;
}
// Partial<interface>는 interface이 가진 모든 속성을 선택 속성(?)으로 변환하여 일부 속성만 포함하거나 아무 속성도 포함하지 않을 수 있게 해준다.
const me: Partial<Address> = {};
const you: Partial<Address> = { email: "jobh@naver.com" }; // 따라서 선택 속성으로 변환되었기 때문에 여기서 할당된 email은 Address.email: string 타입이 아닌 email?: string | undefined가 된다.
const all: Address = { email: "jobh@naver.com", address: "asd" };

// Pick
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
// Pick utility type을 사용해서 특정 interface 안에서 원하는 속성의 type만 선택해서 새로운 타입으로 만들어줄 수 있다.
type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'clean room',
  completed: false
}


// Omit
interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number
}
// Omit은 Pick과 반대로 특정 interface 안에서 원하지 않는 속성의 type만 선택해서 빼고 남은 속성들의 type으로 이루어진 새로운 타입을 만든다.
// Omit<interface, key | key>
type TodoPreview1 = Omit<Todo1, 'description'>

const todo1: TodoPreview1 = {
  title: 'clean room',
  completed: false,
  createdAt: 123123123,
}


// Exclude
type Fruit = string | number | boolean
// Exclude를 이용해서 타입이 가지고 있는 타입들 중 특정 타입을 제거하고 남아있는 새로운 타입들을 반환한다
// Omit과 다른 점은 Exclude는 type 자체를 인자로 받고 Omit은 key를 인자로 받는 점이다. 따라서 Omit은 객체 타입에 있는 특정 프로퍼티 타입을 제외하는 것이고 Exclude는 유니온 타입에 있는 특정 타입을 제외하는 것이다.
// Exclude<interface, type | type>
type newFruit = Exclude<Fruit, boolean>

const fruit1: newFruit = 'kiwi'
const fruit2: newFruit = 1
// const fruit3: newFruit = true

interface ABC {
  a: string;
  b: number;
  c: boolean;
}


// Required
type User = {
  firstName: string
  lastName?: string // key?: value는 선택 속성으로 User type을 사용할 때 있어도 되고 없어도 되는 property로 만들 수 있다.
}

let firstUser : User = {
  firstName: 'John'
}
/* Required<Type>으로 Type에 옵셔널한 선택 속성이 있는 경우에도 모든 속성을 필수로 포함하도록 강제할 수 있다.
let secondUser: Required<User> = {
  firstName: 'Kim'
}  */


// Record  |  Record<Keys, Type>
// 키가 Keys이고 값이 Type인 객체 type을 구성한다. type의 속성을 다른 type에 매핑하는데 사용함
interface CatInfo {
  age: number
  breed: string
  name: CatName
}

type CatName = 'tigger' | 'boris' | 'mordred'

const cats: Record<CatName, CatInfo> = {
  tigger: {age:3, breed: 'korean shorhair', name: 'tigger'},
  boris: {age: 5, breed: 'maine coon', name: 'boris'},
  mordred: {age: 13, breed: 'british shorthair', name: 'mordred'},
}


// ReturnType  |  ReturnType<functionType>
// functionType의 반환 타입으로 구성된 타입을 만듭니다.
type T0 = ReturnType<() => string>  // T0은 string type
type T1 = ReturnType<(s: string) => void>  // T1은 void type

const fn = (str: string) => {
  return str
}

const a: ReturnType<typeof fn> = 'hello'
// const b: ReturnType<typeof fn> = true  // typeof fn은 string type이므로 오류 발생!