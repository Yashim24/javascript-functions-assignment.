function registerStudent(name = "Unknown", course = "JavaScript", duration = 3) {
    console.log("Student Name: " + name);
    console.log("Course: " + course);
    console.log("Duration: " + duration + " months");
    console.log("--------------------");
}

// Call 1: Pass all arguments
registerStudent("Alice", "Python", 6);

// Call 2: Pass different arguments
registerStudent("John", "Web Development", 4);

// Call 3: Call without arguments
registerStudent();