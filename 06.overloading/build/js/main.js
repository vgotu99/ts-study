"use strict";
// 함수 구현
function add(a, b) {
    return a + b;
}
add('hello', 'world');
add(2, 3);
// add(900, '원')  < number, string은 인자로 사용 불가
function saySomething(word) {
    if (typeof word === 'string') {
        return word;
    }
    else if (Array.isArray(word)) {
        return word.join(' ');
    }
    throw new Error('can not say undefined value');
}
saySomething('hello');
saySomething(['hello', 'word']);
function saySomething1(word) {
    if (typeof word === 'string') {
        return word;
    }
    else if (Array.isArray(word)) {
        return word.join(' ');
    }
    throw new Error('can not say undefined value');
}
saySomething1('hello');
saySomething1(['hello', 'word']);
