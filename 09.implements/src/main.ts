class Car {
  mileage = 0
  price = 100
  color = 'white'

  drive() {
    return 'drive!'
  }

  brake() {
    return 'brake!'
  }
}

interface Part {
  seats: number
  tire: number
}

// 부모가 가진 프로퍼티와 메소드를 상속 받아 사용할 수 있는 extends와는 달리 implements는 Class 부모가 가진 프로퍼티의 key를 가져야만하고(value는 달라도 됨) interface가 가진 프로퍼티와 타입을 만족하도록 구조를 강제한다.
class FordIm implements Car, Part {
  mileage = 1
  price = 110
  color = 'red'
  seats = 4
  tire = 4

  drive() {
    return 'drive!'
  }

  brake() {
    return 'brake!'
  }
}

console.log(new FordIm())