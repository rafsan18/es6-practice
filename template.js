const firstName = "Justin";
const lastName = "TimberLake";
const fullName = firstName + " " + lastName + " is a good boy";
const fullName2 = `${firstName} ${lastName} is a good boy`;
const multiLine = "I love you.\n" + "I miss you.\n" + "I need you.\n"; // old way to create multiline.
console.log(fullName);
console.log(fullName2);
console.log(multiLine);
// new creating multiline
const multiLine2 = `I love you.
I miss you.
I need you.`;
console.log(multiLine2);
