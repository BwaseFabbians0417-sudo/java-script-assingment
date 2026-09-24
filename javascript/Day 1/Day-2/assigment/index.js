// let challenge = "30 Days Of JavaScript";
// console.log("Challenge:", challenge);
// console.log("Length:", challenge.length);
// console.log("Uppercase:", challenge.toUpperCase());
// console.log("Lowercase:", challenge.toLowerCase());
// console.log("Substring:", challenge.substring(0, 2));
// console.log("Slice:", challenge.slice(3));
// console.log("Includes Script:", challenge.includes("Script"));
// console.log("Split by space:", challenge.split(" "));

// let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log("Companies:", companies.split(", "));
// console.log("Replace JavaScript with Python:", challenge.replace("JavaScript", "Python"));
// console.log("Character at index 15:", challenge.charAt(15));
// console.log("Character code for J:", challenge.charCodeAt(challenge.indexOf("J")));
// console.log("First a index:", challenge.indexOf("a"));
// // console.log("Last a index:", challenge.lastIndexOf("a"));

// let sentence = "You cannot end a sentence with because because because is a conjunction";
// // console.log("First because:", sentence.indexOf("because"));
// // console.log("Last because:", sentence.lastIndexOf("because"));
// // console.log("Search because:", sentence.search("because"));

// let paddedChallenge = " 30 Days Of JavaScript ";
// // console.log("Trim:", paddedChallenge.trim());
// // // console.log("Starts with 30:", challenge.startsWith("30"));
// console.log("Ends with JavaScript:", challenge.endsWith("JavaScript"));
// console.log("All a matches:", challenge.match(/a/g));

// let firstPart = "30 Days Of";
// let secondPart = "JavaScript";
// console.log("Concat:", firstPart.concat(" ", secondPart));
// console.log("Repeat:", challenge.repeat(2));

// let firstName = "Ada";
// let lastName = "Lovelace";
// let country = "United Kingdom";
// let city = "London";
// let age = 36;
// let isMarried = false;
// let year = 2026;

console.log("\n1. Data types");
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log("\n2. Type comparisons");
console.log("10" === 10);
console.log("10" == 10);
console.log(parseInt("9.8", 10) === 10);

console.log("\n3. Truthy values");
console.log(Boolean("hello"));
console.log(Boolean(42));
console.log(Boolean([]));

console.log("\n3. Falsy values");
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));

console.log("\n4. Comparisons");
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

console.log("\n5. String lengths");
let python = "python";
let jargon = "jargon";
console.log(python.length);
console.log(jargon.length);
console.log(python.length !== jargon.length);

console.log("\n6. Logical expressions");
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

console.log("\n7. Includes 'on'");
console.log("dragon".includes("on"));
console.log("python".includes("on"));
console.log("dragon".includes("on") && "python".includes("on"));

console.log("\n8. Current date and time");
const now = new Date();
console.log("Year:", now.getFullYear());
console.log("Month number:", now.getMonth() + 1);
console.log("Date:", now.getDate());
console.log("Day number:", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds since January 1, 1970:", Math.floor(Date.now() / 1000));

console.log("\n9. Triangle area for base 20 and height 10:", 0.5 * 20 * 10);
console.log("10. Triangle perimeter for 5, 4, and 3:", 5 + 4 + 3);

console.log("\n11. Rectangle with length 10 and width 5");
console.log("Area:", 10 * 5);
console.log("Perimeter:", 2 * (10 + 5));

const pi = 3.14;
const exampleRadius = 5;
console.log("\n12. Circle with radius 5");
console.log("Area:", pi * exampleRadius * exampleRadius);
console.log("Circumference:", 2 * pi * exampleRadius);

console.log("\n13. Equation y = 2x - 2");
const lineSlope = 2;
const lineYIntercept = -2;
const lineXIntercept = -lineYIntercept / lineSlope;
console.log("Slope:", lineSlope);
console.log("x-intercept:", lineXIntercept);
console.log("y-intercept:", lineYIntercept);

const pointSlope = (10 - 2) / (6 - 2);
console.log("\n14. Slope between (2, 2) and (6, 10):", pointSlope);
console.log("15. Are the slopes equal?", lineSlope === pointSlope);

function calculateY(x) {
  return x ** 2 + 6 * x + 9;
}

console.log("\n16. y = x² + 6x + 9");
console.log("For x = 0:", calculateY(0));
console.log("For x = 1:", calculateY(1));
console.log("For x = -3:", calculateY(-3));
console.log("The value of x when y = 0 is -3.");

console.log("\n17. Weekly pay for 40 hours at 28:", 40 * 28);
const exampleName = "Jonathan";
console.log("\n18. Name length");
console.log(exampleName.length > 7 ? "Your name is long" : "Your name is short");

const givenName = "Asabeneh";
const familyName = "Yetayeh";
console.log("\n19. Name comparison");
if (givenName.length > familyName.length) {
  console.log(`Your first name, ${givenName} is longer than your family name, ${familyName}`);
} else if (givenName.length < familyName.length) {
  console.log(`Your family name, ${familyName} is longer than your first name, ${givenName}`);
} else {
  console.log("Your first name and family name have the same length.");
}

const myAge = 250;
const yourAge = 25;
console.log("\n20. Age difference:", myAge - yourAge);
console.log(`I am ${myAge - yourAge} years older than you.`);

const exampleBirthYear = 2005;
const currentYear = new Date().getFullYear();
const exampleAge = currentYear - exampleBirthYear;
console.log("\n21. Driving eligibility for birth year 2005:");
if (exampleAge >= 18) {
  console.log(`You are ${exampleAge}. You are old enough to drive.`);
} else {
  console.log(`You are ${exampleAge}. You will be allowed to drive after ${18 - exampleAge} years.`);
}

const yearsExample = 100;
const secondsLivedExample = yearsExample * 365 * 24 * 60 * 60;
console.log("\n22. Seconds lived in 100 years:", secondsLivedExample);

const formatDate = new Date();
const yyyy = formatDate.getFullYear();
const mm = String(formatDate.getMonth() + 1).padStart(2, "0");
const dd = String(formatDate.getDate()).padStart(2, "0");
const hh = String(formatDate.getHours()).padStart(2, "0");
const min = String(formatDate.getMinutes()).padStart(2, "0");
console.log("\n23. Date formats");
console.log(`${yyyy}-${mm}-${dd} ${hh}:${min}`);
console.log(`${dd}-${mm}-${yyyy} ${hh}:${min}`);
console.log(`${dd}/${mm}/${yyyy} ${hh}:${min}`);