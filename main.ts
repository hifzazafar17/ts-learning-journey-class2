// Display a greeting in the console
console.log("Assalam Walikum");

// Declare variables of different data types
let fullName: string = "hifza zafar";  // string
let age: number = 23;                   // number
let bulb: boolean = true;                 // boolean

// Update the value of the 'fullName' variable
fullName = "hifza";
console.log(fullName);

// Declare another variable
let lastName: string = " zafar";

// Concatenate and display strings in different ways
console.log(fullName + lastName);
console.log(fullName + " " + lastName);
console.log(`My name is ${fullName} ${lastName}.`);

// Use a template string to create a message
let message: string = `My name is ${fullName} ${lastName}`;
console.log(message);

// Perform arithmetic operations
let qty: number = 2;
console.log(qty + 10);
console.log(qty - 1);
console.log(qty * 1200);
console.log(qty / 5);

// Concatenate strings using the '+' operator
let str1: string = "1";
let str2: string = "2";
console.log(str1 + str2);

// Use the exponentiation operator
let n1: number = 40;
let n2: number = 10;
console.log(n1 ** n2);

// Use the modulo operator and division
console.log(qty / 3);
console.log(qty % 7);

// Use the assignment operator to update a variable
let myAge: number = 23;
myAge += 10; 
console.log(myAge);

// Use comparison operators to compare values
let herAge: number = 23;
console.log(herAge == 23); 
console.log(Number("23") === 23); // Corrected the type conversion
console.log('23' === String(23)); // Corrected the type conversion
console.log(herAge != 23);
console.log("23" === "23");
console.log(herAge > 10);
console.log(herAge < 100);
console.log(herAge < 23);
console.log(herAge >= 23);

// Use comparison operators with boolean values
console.log(n1 == 5);
console.log(n1 === 5);
console.log(n1 != 5);
console.log(n1 > 24);
console.log(n1 > 40);
console.log(n1 >= 40);
console.log(n1 <= 40);
