// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rect(a){
//     return 6 * a;
// }
// console.log(rect(3))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(radius){
//     return (radius * radius) * 3.14
// }
// console.log(circle(5))

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder (radius, hight){
//     const P2 = 3.14 * 2;
//     let action1 = (P2 * (radius * radius));
//     let action2 = P2 * radius * hight;
//     return action1 + action2;
// }
// console.log(cylinder(5, 15))

// - створити функцію яка приймає масив та виводить кожен його елемент
// function arrayWriter (arr){
//     for (let items of arr){
//         console.log(items)
//     }
// }
// let desc = ['Igor', true, 18]
// arrayWriter(desc);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function textWriter(text){
//     document.write(`<p>${text}</p>`)
// }
// textWriter('Today it`s very cold weather');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function listItems (items){
//     document.write(`<ul>`);
//     document.write(`<li>${items}</li>`);
//     document.write(`<li>${items}</li>`);
//     document.write(`<li>${items}</li>`);
//     document.write(`</ul>`);
// }
// listItems('test');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
// function listWriter(textItems, numList){
//     document.write(`<ul>`);
//     for (let a = 0; a < numList; a++){
//         document.write(`<li>${textItems}</li>`);
//     }
//     document.write(`</ul>`);
// }
// listWriter('Hi', 15)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function createList (arr){
//     document.write(`<ul>`)
//     for (const items of arr) {
//         document.write(`<li>${items}</li>`)
//     }
//     document.write(`</ul>`)
// }
// let user = ['Igor', 29, true, 'policeman', true]
// createList(user);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.
// let  users = [
//     {id: 1, name:'Ivan', age: 19},
//     {id: 2, name:'Sergiy', age: 32},
//     {id: 3, name:'Gearge', age: 24},
//     {id: 4, name:'Stepan', age: 27},
//     {id: 5, name:'Nazar', age: 20},
// ];
// function usersWriter (arr){
//     for(user of arr){
//         document.write(`<div>`);
//         document.write(` ID: ${user.id}, Ім'я : ${user.name}, Вік : ${user.age}`);
//         document.write(`</div>`);
//     }
// }
// usersWriter(users)

//- створити функцію яка повертає найменьше число з масиву
// let number = [9,5,6,2,5,2,12,5,6,8]
// function minNumber (arr){
//     let min = arr[0];
//     for (let a = 0; a < arr.length; a++){
//         if (arr[a] < min ){
//             min = arr[a];
//         }
//     }
//     return min
// }
// console.log (minNumber(number));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
// let numberArray= [1, 2, 10]
// function sumArray(arr){
//     let sum = 0;
//     for (let x = 0; x < arr.length; x++){
//         sum += arr[x];
//     }
//     return sum
// }
// console.log(sumArray(numberArray));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// let arrNum = [1, 2, 3, 4, 5, 6]
// function swap(arr, index1, index2){
//         let time;
//         time = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = time;
//         return arr;
// }
// console.log(swap(arrNum, 0, 2));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// function exchange(sumUAH, currencyValues){
//     if (currencyValues === 'EUR'){
//         return sumUAH / 42
//     }
//     if (currencyValues === 'USD'){
//         return sumUAH / 40
//     }
// }
// console.log(exchange(10000, 'EUR'));
