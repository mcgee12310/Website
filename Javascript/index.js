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
