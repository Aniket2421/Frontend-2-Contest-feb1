let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];
let arr2 = [
  { id: 1, name: "Virat", age: "18", marks: 90 },
  { id: 2, name: "David", age: "20", marks: 60 },
  { id: 3, name: "Smith", age: "19", marks: 45 },
]

function PrintStudentswithMap() {
  
  let Passstudent = arr.filter((stu) => stu.marks > 50);
  console.log(Passstudent);
}
PrintStudentswithMap();

arr.forEach(student => {
  if (student.marks > 50) {
    console.log(student);
  }
});

function removeFailedStudent() {
  
  let failedStudent = arr.filter((stu) => stu.marks >= 50);
  console.log(failedStudent);
}
removeFailedStudent();

function addData() {
  let newStudent = { id: 4, name: "Susan", age: 20, marks: 45 };
  arr.push(newStudent);
  console.log(newStudent);
}
addData();

function concatenateArray() {
  let combinedArray = arr.concat(arr2);
  console.log(combinedArray);
}
concatenateArray();


