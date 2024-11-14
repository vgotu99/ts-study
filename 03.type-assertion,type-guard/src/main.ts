// as Type을 이용한 type 단언 => 특정 type으로 정의해줌
const bodyElement1 = document.querySelector('body') as HTMLBodyElement
bodyElement1.innerText = 'Hello'

// ! 을 이용한 type 단언 => type이 null이나 undefined는 아니라고 정의해줌
const bodyElement2 = document.querySelector('body')
bodyElement2!.innerText = 'Hello'

// type guard
const bodyElement3 = document.querySelector('body')
if (bodyElement3) {
  bodyElement3.innerText = 'Hello'
}

