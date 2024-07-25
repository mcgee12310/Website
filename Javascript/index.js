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
    randomNum = Math.floor(Math.random() * (max)) + min;
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
    if(subscribe.checked){
        a11_result1.textContent="Subcribed";
    }
    else a11_result1.textContent="Not subcribed";

    if(payment.value == "visa") paymentResult.textContent = `You are paying with Visa`;
    else if (payment.value == "mastercard") paymentResult.textContent = `You are paying with MasterCard`;
    else if (payment.value == "giftcard") paymentResult.textContent = `You are paying with PayPal`;
}