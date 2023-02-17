// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let example1 = 'hello world';
// let example2 = 'lorem ipsum';
// let example3 = 'javascript is cool';
// console.log(example1.length);
// console.log(example2.length);
// console.log(example3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let example1 = 'hello world';
// let example2 = 'lorem ipsum';
// let example3 = 'javascript is cool';
// console.log(example1.toUpperCase());
// console.log(example2.toUpperCase());
// console.log(example3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let example1 = 'HELLO WORLD';
// let example2 = 'LOREM IPSUM';
// let example3 = 'JAVASCRIPT IS COOL';
// console.log(example1.toLocaleLowerCase());
// console.log(example2.toLocaleLowerCase());
// console.log(example3.toLocaleLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// let strReplace = str
//     .replaceAll(' ', '')
//     .replace('dirty', 'dirty ');
// console.log(strReplace);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
// let arrForString;
// function stringToarray(string){
//     arrForString = string.split(' ');
//     return arrForString;
// }
// console.log(stringToarray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let numToString = numbers.map((value) => {
//     return String(value);
// });
// console.log(numToString);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11,21,3];
// function sortNums(arr, value){
//     if (value === 'ascending'){
//         arr.sort((a, b) => a - b);
//     }
//     if (value === 'descending'){
//         arr.sort((a, b) => b - a);
//     }
//     return arr;
// }
//
// console.log(sortNums(nums, 'descending'));

// - є масив
//
// let coursesAndDurationArray = [
//     {title : 'JavaScript Complex', monthDuration : 5},
//     {title : 'Java Complex', monthDuration : 6},
//     {title : 'Python Complex', monthDuration : 6},
//     {title : 'QA Complex', monthDuration : 4},
//     {title : 'FullStack', monthDuration : 7},
//     {title : 'Frontend', monthDuration : 4}
// ];
//
// -- відсортувати його за спаданням за monthDuration
//
// coursesAndDurationArray.sort((a, b) => {
//     return b.monthDuration - a.monthDuration
// })
// console.log(coursesAndDurationArray);
//
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let filterTime = coursesAndDurationArray.filter((predicate ) => ( predicate.monthDuration > 5));
// console.log(filterTime);
//
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
// newCourses = coursesAndDurationArray.map((u, index) => {
//     return {id : index + 1, title : u.title, monthDuration : u.monthDuration};
// })
// console.log(newCourses);

// описати колоду карт (від 6 до туза без джокерів)
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
let cards = [];
let colorsCards = ['spade', 'diamond', 'heart', 'clubs'];
let valueCards = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

function createCardsDeck(emptyArray, color, value) {
    let num = 0;
    for (x = 0; x < color.length; x++) {
        for (a = 0; a < value.length; a++) {
            emptyArray[num++] = color[x]
                .replace(color[x], color[x] + ' ')
                .concat(value[a]);
        }
    }
    return emptyArray;
}

let cardsDeck = (createCardsDeck(cards, colorsCards, valueCards));
console.log(cardsDeck);
// - знайти піковий туз
let spaceAce = cardsDeck.find(search => search === 'spade ace');
console.log(spaceAce);
// - всі шістки
let allCardsIn6 = cardsDeck.filter(search => search.includes('6'));
console.log(allCardsIn6);
// - всі червоні карти
allRedCards = cardsDeck.filter(search => search.includes('diamond') || search.includes('heart'));
console.log(allRedCards);
//- всі буби
diamondCards = cardsDeck.filter(search => search.includes('diamond'));
console.log(diamondCards);
// - всі трефи від 9 та більше
let clubs9More = cardsDeck.filter (search => search.includes('clubs'));
        // || search.lastIndex(!'6')





