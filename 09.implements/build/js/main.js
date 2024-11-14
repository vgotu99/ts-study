"use strict";
class Car {
    constructor() {
        this.mileage = 0;
        this.price = 100;
        this.color = 'white';
    }
    drive() {
        return 'drive!';
    }
    brake() {
        return 'brake!';
    }
}
// 부모가 가진 프로퍼티와 메소드를 상속 받아 사용할 수 있는 extends와는 달리 implements는 Class 부모가 가진 프로퍼티의 key를 가져야만하고(value는 달라도 됨) interface가 가진 프로퍼티와 타입을 만족하도록 구조를 강제한다.
class FordIm {
    constructor() {
        this.mileage = 1;
        this.price = 110;
        this.color = 'red';
        this.seats = 4;
        this.tire = 4;
    }
    drive() {
        return 'drive!';
    }
    brake() {
        return 'brake!';
    }
}
console.log(new FordIm());
