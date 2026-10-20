function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function getGrade(average) {
    if (average >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// this one Test both functions
let average = calculateAverage(60, 70, 80);

// this one Display the returned value outside the function
console.log("Average:", average);

//this one  Pass the average to getGrade()
let grade = getGrade(average);
console.log("Grade:", grade);
