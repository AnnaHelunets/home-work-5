const students = ["John", "Jane", "Mike", "Anna"];
const grades = [
  [90, 87, 93, 88],
  [78, 82, 80, 85],
  [92, 89, 85, 78],
  [75, 80, 92, 87],
];

function calculate(rating) {
  let sum = 0;
  for (const number of rating) {
    sum += number;
  }
  const average = sum / rating.length
  return average
}
console.log(calculate([90, 87, 93, 88]));

function fnA (students, grades) {}
for (const student of students) {
  if (students.indexOf === grades.indexOf) {
    console.log(`Середній бал студента ${students[1]} - ${calculate(grades[1])}`);
  }
  return students[0], grades[0]
}


fnA("John", [90, 87, 93, 88])