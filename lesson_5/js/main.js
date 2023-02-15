// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let per = (a) => (a * 6);
// console.log(per(5));

// створити функцію яка обчислює та повертає площу кола з радіусом r
//
// let circle = (radius) => (radius * radius * 3.14);
// console.log(circle(5));

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// const Pi2 = 2 * 3.14;
// let сylinder = (radius, hight) => ((Pi2 * radius * radius) + (Pi2 * radius * hight));
// console.log(сylinder(10, 32));

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let userArray = [1, 18, 'Evgen', true, 'js', 'English'];
// let arrayWriter = (array) => {
//     for (const item of array) {
//         console.log(item);
//     }
// }
// arrayWriter(userArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let createP = (text) => (document.write(`<p>${text}</p>`));
// createP('Hi or Hello?');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let createrList = (text) => {
//     document.write(`<ul>`);
//     for (x = 0; x < 3; x++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// };
// createrList('point');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let createList = (text, number) => {
//     document.write(`<ul>`);
//     for (x = 0; x < number; x++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// };
// createList('Hello', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let createListOfArray = (userArray) => {
//     document.write(`<ul>`);
//     for (const item of userArray) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// };
// let userArray = [1, 18, 'Evgen', true, 'js', 'English'];
// createListOfArray(userArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.
//
// let users = [
//     {id : 1, name : 'Victoriya', age : 23},
//     {id : 2, name : 'George', age : 20},
//     {id : 3, name : 'Pitr', age : 18},
//     {id : 4, name : 'Stiv', age : 31},
// ];
// let usersWriter = (array) => {
//     for (const item of array) {
//         document.write(`<div>Id: ${item.id}, Name: ${item.name}, Age: ${item.age} </div>`);
//     }
// };
// usersWriter(users);

// - створити функцію яка повертає найменьше число з масиву
//
// let arrayMin = (array) => {
//     let min = array[0];
//     for (x = 0; x < array.length; x++) {
//         if (min > array[x]) {
//             min = array[x];
//         }
//     }
//     return min;
// };
// numbers = [5, 10, 4, 2, 4, 1, 8];
// console.log(arrayMin(numbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
//
// let numbers = [4,4,4];
// let sum = (array) => {
//     let result = 0;
//     for (const item of array) {
//         result += item;
//     }
//     return result;
// };
// console.log(sum(numbers));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//
// let array = [10, 42, 14, 26];
// let swap = (arr, index1, index2) => {
//     let ind1 = arr[index1];
//     let ind2 = arr[index2];
//     arr[index1] = ind2;
//     arr[index2] = ind1;
//     return arr;
// };
// console.log(swap(array, 0, 3));

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// let exchange = (sumUAH, values) =>{
//     let result;
//     if (values === 'USD'){
//         result = sumUAH / 40
//     }
//     else if (values === 'EUR'){
//         result = sumUAH / 42
//     }
//     return result;
// };
// console.log(exchange(10000, 'USD'));