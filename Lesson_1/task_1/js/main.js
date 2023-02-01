// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let str1 = 'Hello';
let str2 = 'owu';
let str3 = 'com';
let str4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
const PI = 3.14;
let double = 2.7;
let num5 = 16;
let bool1 = true;
let bool2 = false;

//     Вивести кожну змінну за допомогою: console.log
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(PI);
console.log(double);
console.log(num5);
console.log(bool1);
console.log(bool2);
let a = 100;
let b = '100';
let c = true;

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firtsname = prompt('Введіть прізвище:');
let lastsname = prompt('Введіть ваше ім\'я');
let middleName = prompt('Введіть по батькові:');
let person = (`Ваше ПІБ: ${firtsname} ${lastsname} ${middleName}`);
console.log(person);
