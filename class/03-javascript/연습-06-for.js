let persons = [
  { name: "철수", age: 17 },
  { name: "영희", age: 22 },
  { name: "도우너", age: 5 },
  { name: "그루트", age: 65 },
  { name: "도비", age: 3 },
];

for (let i = 0; i < persons.length; i++) {
  if (persons[i].age >= 19) {
    console.log(`${persons[i].name}님은 성인입니다`);
  } else {
    console.log(`${persons[i].name}님은 미성년자입니다`);
  }
}
// VM2181:5 철수님은 미성년자입니다
// VM2181:3 영희님은 성인입니다
// VM2181:5 도우너님은 미성년자입니다
// VM2181:3 그루트님은 성인입니다
// VM2181:5 도비님은 미성년자입니다
