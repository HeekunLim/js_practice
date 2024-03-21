// let str = '';

// for (let i = 0; i < 9; i++) {
//   str = str + i;
// }

// console.log(str);

// ==========================================================
// ==========================================================

// const a = 5;
// const b = 2;
// let myName = "nico";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello" + myName);

// myName = "nicolas";

// console.log("your new name is " + myName);

// ==========================================================

// const amIFat = null;
// let something;

// console.log(amIFat, something);

// ==========================================================

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(daysOfWeek);

// daysOfWeek.push("sun");

// console.log(daysOfWeek);

// ==========================================================

// const player = {
//     name: "nico",
//     points: 10,
//     fat: true,
// };

// console.log(player);

// player.fat = false;
// player.lastName = "potato";
// player.points = player.points + 15;

// console.log(player);
// console.log(player.name);

// ==========================================================

// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("Nico", 10);
// sayHello("Dal", 23);
// sayHello("Lynn", 21);

// ==========================================================

// function plus(firstNumber, secondNumber) {
//     console.log(firstNumber + secondNumber);
// }

// function divide(firstNumber, secondNumber) {
//     console.log(firstNumber / secondNumber);
// }

// plus(60, 8);
// divide(98, 20);

// ==========================================================

// const player = {
//     name: "nico",
//     sayHello: function (nameOfPerson) {
//         console.log("Hello my name is " + nameOfPerson);
//     },
// };

// console.log(player.name);
// player.sayHello("lynn");

// ==========================================================

// const calcultor = {
//     addtion: function (a, b) {
//         console.log(a + b);
//     },
//     subtraction: function (a, b) {
//         console.log(a - b);
//     },
//     multiplication: function (a, b) {
//         console.log(a * b);
//     },
//     division: function (a, b) {
//         console.log(a / b);
//     },
//     squared: function (a, b) {
//         console.log(a ** b);
//     },
// // };
    
// calcultor.addtion(5, 1);
// calcultor.subtraction(3, 2);
// calcultor.multiplication(5, 2);
// calcultor.division(4, 7);
// calcultor.squared(2, 8);

// ==========================================================

// const age = 96

// function calcKorAge(korAge) {
//     return korAge + 2;
// }

// const age2 = calcKorAge(age);

// console.log(age2);
// console.log(calcKorAge(age));

// ==========================================================

// const age = parseInt(prompt("How old are you?"));

// console.log(isNaN(age));

// if (isNaN(age) || age < 0) {
//     console.log("Please write a real positive number");
// }
// else if (age < 18) {
//     console.log("Your too young");
// }
// else if (age >= 18 && age <= 50) {
//     console.log("You can drink");
// }
// else if (age > 50 && age <= 80) {
//     console.log("You should excercise");
// }
// else if (age > 80) {
//     console.log("You can what ever you want");
// }
// else {
//     console.log("You can't drink");
// }

// ==========================================================

// console.dir(document);
// console.dir(document.title);

// document.title = "Hi";

// console.dir(document.title);
// console.dir(document.body);
// console.dir(document.location);

// ==========================================================

// console.dir(document.getElementById("title"));

// const title = document.getElementById("title")

// console.log(title);

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

// ==========================================================

// const hellos = document.getElementsByClassName("hello")

// console.log(hellos);

// ==========================================================

// const title = document.getElementsByTagName("h1");

// console.log(title);

// ==========================================================

// const title = document.querySelector(".hello h1");

// console.log(title);

// ==========================================================

// const title = document.querySelector(".hello h1:first-child");

// console.log(title);

// ==========================================================

// const title = document.querySelector("#hello");
// const title2 = document.getElementById("hello");

// console.log(title);
// console.log(title2);

// ==========================================================

// const title = document.querySelector(".hello h1");

// title.innerText = "Hello";

// ==========================================================

const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

console.log(title);

title.innerText = "Hello";