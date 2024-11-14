// 타입 선언
function add(a: string, b: string): string
function add(a: number, b: number): number

// 함수 구현
function add(a: any, b: any): any {
  return a + b
}

add('hello', 'world')
add(2, 3)
// add(900, '원')  < number, string은 인자로 사용 불가


function saySomething(word: string | string[]): string {
  if (typeof word === 'string'){
    return word
  } else if (Array.isArray(word)) {
    return word.join(' ')
  }
  throw new Error('can not say undefined value')
}

saySomething('hello')
saySomething(['hello', 'word'])

// 위 함수를 아래처럼 오버로딩을 이용해서 변환 가능
function saySomething1(word: string): string
function saySomething1(words: string[]): string

function saySomething1(word: any): any {
  if (typeof word === 'string'){
    return word
  } else if (Array.isArray(word)) {
    return word.join(' ')
  }
  throw new Error('can not say undefined value')
}

saySomething1('hello')
saySomething1(['hello', 'word'])