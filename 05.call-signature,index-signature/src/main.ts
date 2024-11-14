interface getLikeNumber {
  (like: number): number; // < 호출 시그니처
  // (매개변수: 타입): 리턴값 타입
}

interface Post {
  id: number;
  title: string;
  getLikeNumber: getLikeNumber;
}

const post: Post = {
  id: 1,
  title: "post",
  getLikeNumber(like: number) {
    return like;
  },
};

post.getLikeNumber(1);

// =====================================================================

interface Post1 {
  id: number;
  title: string;
  [key: string]: unknown; // < 객체 인덱스 시그니처
// [key: string]: value의 타입  < 어떤 타입의 데이터가 올 지 모르니 unknown 사용! 근데 대략적으로 유추가 가능한 경우! [key: string]: string | number로 해도 될 거 같다!
}

const post1: Post1 = {
  id: 1,
  title: "post1",
};

//key의 타입은 string / value의 타입은 string
post1["description"] = "description1";
//key의 타입은 string / value의 타입은 number
post1["pages"] = 300;


interface Names {
  [key: number]: string // < 배열 인덱스 시그니처
}

const userNames: Names = ['John', 'Kim', 'Joe']

// key의 타입은 number / value의 타입은 string
userNames[0] = 'Lee'