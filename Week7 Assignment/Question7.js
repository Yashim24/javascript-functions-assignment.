// this is an array of five students
const students = [
    { firstName: "John", lastName: "Doe", score: 85 },
    { firstName: "Mary", lastName: "James", score: 92 },
    { firstName: "Peter", lastName: "Smith", score: 78 },
    { firstName: "Grace", lastName: "Brown", score: 88 },
    { firstName: "David", lastName: "Wilson", score: 95 }
];

// this is forEach(). it is used to display each student's name and score
console.log("Students' Names and Scores:");

students.forEach(student => {
    console.log(`${student.firstName} ${student.lastName}: ${student.score}`);
});

// this is map(). it is used to create a new array with full names and scores
const studentResults = students.map(student => {
    return {
        fullName: `${student.firstName} ${student.lastName}`,
        score: student.score
    };
});

// this one Display the new array
console.log("New Array of Student Results:");
console.log(studentResults);
