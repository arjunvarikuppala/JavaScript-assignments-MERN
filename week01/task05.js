/****************************************************
 * ASSIGNMENT 2: Student Performance Dashboard
 * --------------------------------------------
 * This program demonstrates the usage of:
 * 1. filter()     -> to get passed students
 * 2. map()        -> to add grade field
 * 3. reduce()     -> to calculate average marks
 * 4. find()       -> to find a specific student
 * 5. findIndex()  -> to find index of a student
 ****************************************************/

// ---------- Test Data ----------
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// ---------- 1. filter(): Students who passed (marks >= 40) ----------
const passedStudents = students.filter(student => student.marks >= 40);

console.log("1) Passed students:");
console.log(passedStudents);

// ---------- 2. map(): Add grade field ----------
const studentsWithGrades = students.map(student => {
  let grade;

  if (student.marks >= 90) {
    grade = "A";
  } else if (student.marks >= 75) {
    grade = "B";
  } else if (student.marks >= 60) {
    grade = "C";
  } else {
    grade = "D";
  }

  // Return new object with old data + grade
  return {
    ...student,
    grade: grade
  };
});

console.log("\n2) Students with grades:");
console.log(studentsWithGrades);

// ---------- 3. reduce(): Calculate average marks ----------
const totalMarks = students.reduce((sum, student) => {
  return sum + student.marks;
}, 0);

const averageMarks = totalMarks / students.length;

console.log("\n3) Average marks:");
console.log(averageMarks);

// ---------- 4. find(): Find the student who scored 92 ----------
const topper = students.find(student => student.marks === 92);

console.log("\n4) Student who scored 92:");
console.log(topper);

// ---------- 5. findIndex(): Find index of student "Kiran" ----------
const kiranIndex = students.findIndex(student => student.name === "Kiran");

console.log("\n5) Index of Kiran:");
console.log(kiranIndex);

// ---------- BONUS (for real skill): Highest & Lowest using reduce ----------

// Find highest marks
const highestMarks = students.reduce((max, s) => {
  return s.marks > max ? s.marks : max;
}, 0);

// Find lowest marks
const lowestMarks = students.reduce((min, s) => {
  return s.marks < min ? s.marks : min;
}, students[0].marks);

console.log("\nBonus:");
console.log("Highest Marks =", highestMarks);
console.log("Lowest Marks =", lowestMarks);
