//데이터 타입, 연산자 실습

1 + "1";
// '11'
1 - "2";
// -1
11 - "1";
// 10

const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
};

if (profile.age >= 20) {
  console.log("성인입니다.");
} else if (profile.age >= 8) {
  console.log("학생입니다.");
} else if (profile.age > 0) {
  console.log("어린이 입니다.");
} else {
  console.log("다시 입력해주세요.");
}
// 학생입니다.
