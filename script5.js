const calculateBtn = document.getElementById("calculate");

const gradeDisplay = document.getElementById("grade");
const resultDisplay = document.getElementById("result");
const averageDisplay = document.getElementById("average");

calculateBtn.addEventListener("click", function () {

    const numSubjects = Number(prompt("Enter the number of subjects:"));

    if (numSubjects <= 0 || isNaN(numSubjects)) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    let totalMarks = 0;

    for (let i = 1; i <= numSubjects; i++) {

        let marks = Number(prompt("Enter marks for Subject " + i + " (0-100):"));

        while (marks < 0 || marks > 100 || isNaN(marks)) {
            marks = Number(prompt("Invalid input! Enter marks between 0 and 100 for Subject " + i + ":"));
        }

        totalMarks += marks;
    }

    const average = totalMarks / numSubjects;

    let grade;

    if (average >= 90) {
        grade = "A";
    }
    else if (average >= 75) {
        grade = "B";
    }
    else if (average >= 60) {
        grade = "C";
    }
    else {
        grade = "D";
    }

    averageDisplay.textContent = "Average Marks: " + average.toFixed(2);
    gradeDisplay.textContent = "Grade: " + grade;

    if (average >= 60) {
        resultDisplay.textContent = "Result: Pass";
    }
    else {
        resultDisplay.textContent = "Result: Fail";
    }

});