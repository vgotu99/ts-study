// interface
interface Animal {
  name: string
}
// extends를 이용한 interface 확장, class형 문법 느낌
interface Bear extends Animal {
  honey: boolean
}
// 같은 이름으로 재선언하여 Animal의 모든 타입들을 병합할 수 있다.
interface Animal {
  cute: boolean
}

const bear: Bear= {
  name: 'honey bear',
  honey: true,
  cute: true
}


// ==============================================================================

// type
type Car = {
  name: string;
}
// intersection operator를 이용한 타입 결합, 확장 처럼 보이지만 사실은 다른 타입과 결합하는 것
type Porsche = Car & {
  fancy: boolean;
}
/* 재선언이 불가능하다. 즉, 선언 병합 불가능
type Car = {
   fast: boolean
}
*/

const boxster: Porsche = {
  name: 'boxster',
  fancy: true
}