/*Instructions

Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A

Use console.log to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade?

Start with array of random scores in your JavaScript*/




var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var A = 0;
var B = 0;
var C = 0;
var D = 0;
var F = 0;
var highestGrade = Math.max.apply(Math, scores);
var lowestGrade = Math.min.apply(Math,scores);

for (var i = 0; i < scores.length; i++) {
	if (scores[i] > 90) {
		A++;
	} else if (scores[i] > 80) {
		B++;
	} else if (scores[i] > 70) {
		C++;
	} else if (scores[i] > 60) {
		D++;
	} else { 
		F++;
	}
}

console.log("There are " + A + " A's, " + B + " B's, " + C + " C's, " + D + " D's, and " + F + " F's in the class.");
console.log("The Highest Grade is " + highestGrade + ".");
console.log("The Lowest Grade is " + lowestGrade + ".");
























