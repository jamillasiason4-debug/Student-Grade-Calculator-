function calculate() {

    let grades = [];
    let total = 0;
    let isCollege = false;

    // Get grades from the 9 subjects
    for (let i = 1; i <= 9; i++) {

        let subject = document.getElementById("sub" + i).value.trim();
        let grade = parseFloat(document.getElementById("grade" + i).value);

        if (subject === "" || isNaN(grade)) {
            alert("Please enter all subject names and grades.");
            return;
        }

        grades.push(grade);
        total += grade;

        // Detect college grading (1.00–5.00)
        if (grade <= 5) {
            isCollege = true;
        }
    }

    let average = total / grades.length;

    document.getElementById("average").innerHTML =
        "📊 Average: <b>" + average.toFixed(2) + "</b>";

    let status = "";
    let message = "";

    if (isCollege) {

        // Philippine College Grading System
        if (average <= 3.00) {
            status = "✅ PASSED";
            message = "🎉 Congratulations! You passed.";
            document.getElementById("status").className = "pass";
        } else {
            status = "❌ FAILED";
            message = "📚 Better luck next time.";
            document.getElementById("status").className = "fail";
        }

    } else {

        // Percentage Grading System
        if (average >= 75) {
            status = "✅ PASSED";
            document.getElementById("status").className = "pass";

            if (average >= 98) {
                message = "🏆 With Highest Honors!";
            } else if (average >= 95) {
                message = "🥇 Excellent Performance!";
            } else if (average >= 90) {
                message = "👏 Very Good!";
            } else {
                message = "😊 Good Job!";
            }

        } else {
            status = "❌ FAILED";
            message = "📚 Study harder and try again.";
            document.getElementById("status").className = "fail";
        }

    }

    document.getElementById("status").innerHTML = status;
    document.getElementById("message").innerHTML = message;
}

function resetForm() {

    document.getElementById("name").value = "";
    document.getElementById("studentid").value = "";

    for (let i = 1; i <= 9; i++) {
        document.getElementById("sub" + i).value = "";
        document.getElementById("grade" + i).value = "";
    }

    document.getElementById("average").innerHTML = "";
    document.getElementById("status").innerHTML = "";
    document.getElementById("status").className = "";
    document.getElementById("message").innerHTML = "";
}
