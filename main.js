// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

let a = 5;
let b = 5;
document.write(`Sum of ${a} + ${b} is ${a + b}`);

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

let subtraction = (20-10);
let multiplication = (10*2);
let division = (100/2);
let modulus = (82);

document.write("subtraction, multiplication, division, modulus <br>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.


let abc = "";
console.log("abc");

document.write("Value after variable declaration is: Undefine <br>");

let num = 5852;
document.write(`Initialize the variable with some number is; ${num} <br>`);

document.write("Initial value: 5 <br>");

let num2 = 5;
num2++;
console.log("the value after increments is:" + num2);

document.write("Value after increment is: 6 <br>");

let newAdd = 6;
newAdd+=7;
console.log(newAdd);

document.write("Value after addition is: 13 <br>");

let minues = 13;
minues-= 1;
console.log(minues);

document.write("Value after decrement is: 12 <br>");

let myNumber = 11;
remainder = myNumber % 3;
console.log("the remainder value into 3;", +remainder);

let again = 12;
remainder = again % 3;
console.log (`the remainder value is: ${remainder}`);

document.write("The remainder is : 0.<br><br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5
// tickets to a movie. Example output:

let price = 600;
let buyer = 5;

let totalcost = price * buyer;
console.log(price * buyer);

document.write(`Total cost of buy ${buyer} tickets to a movie is ${totalcost} PKR <br><br>`);

// 5. Write a script to display multiplication table of any number in your browser. E.g

let mytable = 12;


document.write(mytable + " x 1 = " + (mytable * 1) + "<br>");
document.write(mytable + " x 2 = " + (mytable * 2) + "<br>");
document.write(mytable + " x 3 = " + (mytable * 3) + "<br>");
document.write(mytable + " x 4 = " + (mytable * 4) + "<br>");
document.write(mytable + " x 5 = " + (mytable * 5) + "<br>");
document.write(mytable + " x 6 = " + (mytable * 6) + "<br>");
document.write(mytable + " x 7 = " + (mytable * 7) + "<br>");
document.write(mytable + " x 8 = " + (mytable * 8) + "<br>");
document.write(mytable + " x 9 = " + (mytable * 9) + "<br>");
document.write(mytable + " x 10 = " + (mytable * 10) +"<br> <br>");

document.write(`This is the Table of ${mytable} <br>`);


// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

let temp = 25;
let fahren = ( temp * 9/5) +32;
document.write(temp + "°C is " + fahren + "°F.<br>");

let fahrentemp = 77;
let temp2 = (fahrentemp - 32)* 9/5;
document.write(fahrentemp + "°F is " + temp2+ "°C.<br>");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

document.write("<h1> Shopping Card</h1><br>")

let itemPrice = 650;
document.write(`Price of item 1 is: ${itemPrice}<br>`);

let quantityofitem = 3;
document.write(`Quantity of item 1 is: ${quantityofitem}<br>`);

let sec_itemPrice = 100;
document.write(`Price of item 2 is: ${sec_itemPrice}<br>`);

let sec_quantityofitem = 7;
document.write(`Quantiity of item 1 is: ${sec_quantityofitem}<br>`);

let shipcharges = 100;
document.write( `Shipcharges is : ${shipcharges} <br><hr/>`);

let totalPrice = (itemPrice * quantityofitem) + (sec_itemPrice * sec_quantityofitem) + shipcharges;
document.write(`The Total Price is : ${totalPrice} <br><br>`);

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

let marks = 900;
document.write(`Total Marks : ${marks} <br>`)

let obtainedMarks = 804;
document.write(`Total Number : ${obtainedMarks} <br>`)

let percentage = (obtainedMarks / marks) * 100;
document.write(`Percentage is : ${percentage}% <br><br>`);


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)


document.write("<h1>Currency Exchange Rates</h1>")
let usdollar = 10;
let sdriyal = 25;

let usdpkr = 104.80;
let sdriyalpkr = 28;

let intopkr = (usdpkr * usdollar) + (sdriyalpkr * sdriyal);
document.write(`Total Currency in PKR : ${intopkr}`)


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

let addnumber = 5;
addnumber= addnumber + 5;
console.log(addnumber);

let multi = 10;
let multiply = (multi * 10);
console.log(multiply);

let two = 2;
let secvalue = 100
let divide =(secvalue/two);
console.log(divide);

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

document.write("<h1>Age Calculator</h1>")

let currentyear = 2024;
document.write("Current Year: 2024 <br>");

let birthyear = 2003;
document.write ("Birthday Year: 2003 <br>");

let currentage = (currentyear - birthyear);
document.write(`Your Age is : ${currentage}`);