document.getElementById('checkButton').addEventListener('click', checkResult);

function checkResult() {
    const name = document.getElementById("name").value.toLowerCase();
    const rollNumber = document.getElementById("rollNumber").value;

    // Result data
    const results = {
        "kasim": {
            "rollNumber": "999",
            "result": "Pass, python: 85, java: 90, c++: 92"
        },
        "sumit": {
            "rollNumber": "888",
            "result": "Pass, python: 78, java: 88, c++: 80"
        },
        "sohel": {
            "rollNumber": "777",
            "result": "Fail"
        }
    };

    // Check result
    const resultDiv = document.getElementById("result");
    if (results[name] && results[name].rollNumber === rollNumber) {
        resultDiv.textContent = "Your result is: " + results[name].result;
        resultDiv.style.color = "yellow";
    } else {
        resultDiv.textContent = "No result found. Please check your name or roll number.";
        resultDiv.style.color = "red";
    }
}