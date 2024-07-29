// print
console.log("hello");
console.log(`hello`);
// thong bao
/*
window.alert(`Error`);
window.alert(`hello`);
*/

document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = "I like girl";

// biến
let x = 2.1;
console.log(typeof x);
console.log(x);
console.log(`Your gpa is ${x}`);

let name = "Hieu";
console.log(typeof name);
console.log(name);
console.log(`Your name is ${name}`);

let online = true;
console.log(typeof online);
console.log(`Bro is online: ${online}`);

document.getElementById("p1").textContent = `Your name is ${name}`;
document.getElementById("p2").textContent = `${x}`;
document.getElementById("p3").textContent = `Online status: ${online}`;

// How to accept user input
// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox
// let username = window.prompt ("What's your username?");
let username;
document.getElementById("a4_summit").onclick = function(){
    username = document.getElementById("a4").value;
    console.log(username);
    document.getElementById("a4_Welcome").textContent=`Hello ${username}`;
}


// type conversion=change the datatype of a value to another (strings, numbers, booleans)
x = "pizza";
let y = "pizza";
let z = "pizza";
x = Number (x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


// const = a variable that can't be changed
let PI = 3.14159;
let radius;
let circumference;
document.getElementById("a6_summit").onclick = function(){
    radius = document.getElementById("a6").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    console.log(circumference);
    document.getElementById("a6_answer").textContent=`${circumference}cm`;
}


// COUNTER PROGRAM
const decrease = document.getElementById("decrease"); 
const reset = document.getElementById("reset"); 
const increase = document.getElementById("increase"); 
const countLabel = document.getElementById("a7"); 
let count = 0;
increase.onclick= function(){
    count++;
    countLabel.textContent = count;
}
decrease.onclick= function(){
    count--;
    countLabel.textContent = count;
}
reset.onclick= function(){
    count = 0;
    countLabel.textContent = count;
}


// Math = built-in object that provides a collection of properties and methods
x = 3;
y= 2;
z = 1;
//z =Math.round(x);
//z=Math.floor(x);
//z = Math.ceil(x);
//z =Math.trunc(x);
//z =Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z= Math.sin(x);
//z=Math.cos(x);
//z=Math.tan(x);
//z=Math.abs(x);
//z=Math.sign(x);
let max = Math.max(x, y, z); 
let min = Math.min(x, y, z);


// RANDOM NUMBER GENERATOR
min = 1;
max = 6;
let randomNum;
const roll = document.getElementById("a9_roll"); 
roll.onclick= function(){
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);
    document.getElementById("a9_label").textContent=randomNum;
}


// IF STATEMENTS =
// if a condition is true, execute some code if not, do something else
let age;
const a10 = document.getElementById("a10"); 
const a10_summit = document.getElementById("a10_summit"); 
const a10_result = document.getElementById("a10_result"); 
a10_summit.onclick = function(){
    age = a10.value;
    age = Number(age);
    if(age >= 100){
        a10_result.textContent="You are TOO OLD to enter this site";
    }
    else if(age == 0){
        a10_result.textContent="You can't enter. You were just born.";
    }
    else if(age >= 18){
        a10_result.textContent="You are old enough to enter this site";
    }
    else if(age< 0){
        a10_result.textContent="Your age can't be below 0";
    }
    else{
        a10_result.textContent="You must be 18+ to enter this site";
    }
}

//a11
const subscribe = document.getElementById("subscribe"); 
const payment = document.getElementById("payment"); 
const a11_summit = document.getElementById("a11_summit"); 
const a11_result1 = document.getElementById("a11_result1"); 
const paymentResult = document.getElementById("a11_result2"); 

a11_summit.onclick = function(){
    a11_result1.textContent = subscribe.checked ? "Subcribed" : "Not subcribed";

    switch(payment.value){
        case "visa":paymentResult.textContent = `You are paying with Visa`; break;
        case "mastercard":paymentResult.textContent = `You are paying with MasterCard`; break;
        case "giftcard":paymentResult.textContent = `You are paying with Giftcard`; break;
        default: ;
    }
}

// string methods
let userName = "Ceck";
console.log(userName.charAt(0)); 
console.log(userName.indexOf("e")); 
console.log(userName.lastIndexOf("e")); 
console.log(userName.length); 
userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLowerCase();
userName = userName.repeat(3);


userName = "BroCode";
let result = userName.startsWith(" ");
if(result){
    console.log("Your username can't begin with ' '");
}
else{
    console.log(userName);
}
result = userName.endsWith(" ");
if(result){
    console.log("Your username can't end with ' '");
}
else{
    console.log(userName);
}
result = userName.includes(" ");
if(result){
    console.log("Your username can't include ' '");
}
else{
    console.log(userName);
}

let phoneNumber="123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "");
phoneNumber = phoneNumber.padStart(15, "0");
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber);


// string slicing = creating a substring
// from a portion of another string
// string.slice(start, end)
let fullName = "Bro Code";
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ")+1);
let firstChar = fullName.slice(0, 1); 
let lastChar = fullName.slice(-1);
console.log(lastName);


username = "username: ";
//---- NO METHOD CHAINING ---
username = username.trim();
let letter = username.charAt(0); letter = letter.toUpperCase();
let extraChars = username.slice(1); extraChars = extraChars.toLowerCase(); username = letter + extraChars;

//---- METHOD CHAINING ---
username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(username);


// logical operators = used to combine or manipulate boolean values (true or false)
// AND = &&
// OR = ||
// NOT = !


//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator
if(PI === "3.14") console.log("That is Pi");
else console.log("That is NOT Pi");


// while loop = repeat some code WHILE some condition is true
/*userName = "";
while(userName === "" || userName === null){
    userName = window.prompt(`Enter your name: `);    
}
console.log(`Hello ${userName}`);*/
/*
let loggedIn = true;
let password;
while(!loggedIn){
    username = window.prompt (`Enter your username`); 
    password = window.prompt (`Enter your password`);
    if(username === "myUsername" && password === "myPassword"){ 
        loggedIn = true;
        console.log("You are logged in!");
    } else console.log("Invalid credentials! Please try again");
}*/


/* NUMBER GUESSING GAME
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;
let guess;
let running = true;
while(running){
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`); 
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else{
            window.alert(`Correct! The answer is ${answer}. ${attempts} attempts.`); running = false;
        } 
    }
}*/


//  function = A section of reusable code.
//  A section of reusable code.
//  Declare code once, use it whenever you want. Call the function to execute that code.
function happyBirthday (username, age) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!"); 
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!"); 
    console.log(`You are ${age} years old`);
}
happyBirthday("BroCode", 25);

// Temperature conversion
const textbox = document.getElementById("a24_number");
const ctof = document.getElementById("ctof");
const ftoc = document.getElementById("ftoc");
result = document.getElementById("a24_result");
let temp;
function convertTemperature(){
    if(ctof.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } 
    else if(ftoc.checked){
        temp = Number(textbox.value);
        temp = 5/9 * (temp-32);
        result.textContent = temp.toFixed(1) + "°C";
    } 
    else result.textContent = "Select a unit";
}


// array = a variable like structure that can hold // more than 1 value
let fruits = ["apple", "orange", "banana"];

//fruits.push("coconut");
//fruits.pop();
//fruits.unshift("mango");
//fruits.shift();

let numOfFruits = fruits.length;
let index = fruits.indexOf("mango");
fruits.sort().reverse();
for(fruit of fruits) console.log(fruit);


// spread operator = ... allows an iterable such as an array or string to be expanded into seperate elements
// (unpacks the elements)
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); 
let minimum = Math.min(...numbers);
console.log(minimum);

username = "Bro Code";
let letters = [...username].join("-");
console.log(letters);

fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);


// rest parameters = (...rest) allow a function work with a variable number of arguments 
// by bundling them into an array
// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array
function openFridge(...foods){
    console.log(foods);
}
function getFood(...foods) { 
    return foods;
}
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";
openFridge (food1, food2, food3, food4, food5);
foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);


function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    return result;
    }
}
function getAverage (...numbers){
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
return result / numbers.length;
    }
let total = getAverage(75, 100, 85, 90, 50);
console.log(total);

function combineStrings(...strings){
    return strings.join(" ");
}
fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName);

// Dice roller
function rollDice(){
    const numofDice = document.getElementById("dice_input").value;
    const dice_result = document.getElementById("dice_result");
    const dice_image = document.getElementById("dice_image");
    const values = [];
    const images = [];

    for(i = 1; i<=numofDice; i++){
        const value = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        console.log(value);
        values.push(value);
        images.push(`<img src="images/${value}.png">`)
    }

    dice_result.textContent = `dice: ${values.join(', ')}`;
    dice_image.innerHTML = images.join("");
}


// RANDOM PASSWORD GENERATOR
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <=0) return `(password must be atleast 1)`
    if(allowedChars.length===0) return `(atleast select 1 set)`;

    for(i=0; i<length; i++){
        const random = Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[random];
    }

    return password;
}
const passwordLength = 16;
const includeLowercase = true;
const includeUppercase = true; 
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated password: ${password}`);


// callback = a function that is passed as an argument to another function.
// used to handle asynchronous operations: 
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases
// "Hey, when you're done, call this next."

hello (goodbye);

function hello(callback) {
    console.log("Hello!");
    callback();
}
function goodbye(){
    console.log("Goodbye!");
}


// forEach() = method used to iterate over the elements
// of an array and apply a specified function (callback) to each element, index, array are provided
// array.forEach(callback)
numbers = [1, 2, 3, 4, 5];
numbers.forEach(double);
numbers.forEach(display);
function display(element){console.log(element);}
function double (element, index, array) { array[index] = element * 2;}

fruits = ["apple", "orange", "banana", "coconut"];
fruits.forEach(capitalize); 
fruits.forEach(display);
function uppercase (element, index, array){ array[index] = element.toUpperCase();
}
function lowercase (element, index, array){ array[index] = element.toLowerCase();
}
function capitalize (element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}


// .map() = accepts a callback and applies that function
// to each element of an array, then return a new array
numbers = [1, 2, 3, 4, 5];
numbers = numbers.map(square);
console.log(numbers);
function square (element){
    return Math.pow(element, 2)
}


const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);
function formatDates (element){
    const parts = element.split("-");
    return `${parts [2]}/${parts[1]}/${parts[0]}`;
}


// .filter() = creates a new array by filtering out elements
numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven); 
let oddNums = numbers.filter(isOdd);
console.log(evenNums);
function isEven (element){
    return element % 2 === 0;
}
function isOdd(element) {
    return element % 2 !== 0;
}

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
console.log(shortWords);
function getShortWords (element){
    return element.length <= 6;
}

// .reduce() = reduce the elements of an array to a single value
//
const prices = [5, 30, 10, 25, 15, 20];
total = prices.reduce(sum);
console.log(` $${total.toFixed(2)}`);
function sum(previous, next){ 
    return previous + next;
}

const grades = [75, 50, 90, 80, 65, 95];
maximum = grades.reduce(getMax); 
minimum = grades.reduce(getMin);
console.log(maximum); 
console.log(minimum);
function getMax (accumulator, element){ return Math.max(accumulator, element);}
function getMin(accumulator, element){ return Math.min(accumulator, element);}

// function expressions = a way to define functions as // values or variables
numbers = [1, 2, 3, 4, 5, 6];
let squares = numbers.map(function(element){ 
                                return Math.pow(element, 2);
                            });
console.log(squares);


// arrow functions = a concise way to write function expressions good for simple functions 
// that you use only once 
// (parameters) => some code
hello = (name, age) => { console.log(`Hello ${name}`); console.log(`You are ${age} years old`)};
hello("Bro", 25);

numbers = [1, 2, 3, 4, 5, 6];
squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);


// objec t= A collection of related properties and/or methods
// Can represent real world objects (people, products, places) object = {key:value,function()};
// this = reference to the object where THIS is used  
// (the object depends on the immediate context)
// person.name = this.name
//
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    food: "pizza",
    sayHello: function(){console.log(`Hi I am ${this.firstName}.`);},
    eat: function(){console.log(`${this.firstName} is eating ${this.food}.`)},
}
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    food: "pizza",
    sayHello: function(){console.log(`Hi I am Patrick.`);},
    eat: function(){console.log(`${this.firstName} is eating ${this.food}.`)},
}
console.log(person1.firstName);
console.log(person2.lastName);
person1.eat();
person2.sayHello();
