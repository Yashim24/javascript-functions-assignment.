const students = [
    { name: "David John", score: 85, location: "Port Harcourt" },
    { name: "Mary James", score: 65, location: "Lagos" },
    { name: "David Peter", score: 72, location: "Abuja" },
    { name: "Grace Paul", score: 90, location: "Port Harcourt" },
    { name: "John Mark", score: 55, location: "Enugu" }
];

// this is for Students who scored 70 or above
const highScores = students.filter(student => student.score >= 70);
console.log("Students who scored 70 or above:", highScores);

// this is for Students who live in Port Harcourt
const portHarcourtStudents = students.filter(
    student => student.location === "Port Harcourt"
);
console.log("Students in Port Harcourt:", portHarcourtStudents);

// this is for Students whose first name is David
const davids = students.filter(
    student => student.name.split(" ")[0] === "David"
);
console.log("Students named David:", davids);