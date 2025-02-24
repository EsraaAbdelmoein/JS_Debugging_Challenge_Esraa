// Correctly declare variables with proper assignment and data types
var studentName = "Nadia";
var studentAge = 20;
var isEnrolled = true;

// Display student information
document.write("<h2>Student Info</h2>");
document.write("Name: " + studentName + "<br>");
document.write("Age: " + studentAge + "<br>");
document.write("Enrolled: " + isEnrolled + "<br>");

// Convert studentAge to a string and display its type
var ageString = String(studentAge);
document.write("Age Type: " + typeof ageString + "<br>");

// Prompt the user for two numbers and calculate the sum
var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));
var total = num1 + num2;
document.write("Sum: " + total + "<br>");

// Check voting eligibility (assuming 18 or older can vote)
var userAge = Number(prompt("Enter your age"));
if (userAge >= 18) {
  document.write("You can vote!<br>");
} else {
  document.write("Sorry, you can't vote.<br>");
}

// Loop from 1 to 9 and display the numbers
for (var i = 1; i < 10; i++) {
  document.write(i + " ");
}

// Prompt the user until a number greater than or equal to 10 is entered
var num = Number(prompt("Enter a number greater than or equal to 10"));
while (num < 10) {
  num = Number(prompt("Enter a number greater than or equal to 10"));
}
