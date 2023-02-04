// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
function number(number) {
    if (number != '0') {
        return 'Вірно'
    } else {
        return 'Не вірно'
    }
}

console.log(number(1));
console.log(number(0));
console.log(number(-3));

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 1;
if (time >= 1 && time <= 59) {
    if (time >= 1 && time < 15) {
        console.log('Перша четверть');
    } else if (time >= 15 && time < 30) {
        console.log('Друга четверть');
    } else if (time >= 30 && time < 45) {
        console.log('Третя четверть');
    } else {
        console.log('Четверта четверть');
    }
} else {
    console.log('Не вірне значення числового формату');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 1;
if (day >= 1 && day <= 31) {
    if (day >= 1 && day <= 10) {
        console.log('Перша частина місяця');
    } else if (day >= 11 && day < 20) {
        console.log('Друга частина місяця');
    } else if (day => 20 && day <= 31) {
        console.log('Третя частина місяця');
    }
} else {
    console.log('Не вірна дата');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
function weekendDay (numberDay){
    switch (numberDay){
        case 1:
            return 'Monday'
            break;
        case 2:
            return 'Tuesday'
            break;
        case 3:
            return  'Wednesday'
            break;
        case 4:
            return 'Thursday'
            break;
        case 5:
            return 'Friday'
            break;
        case 6:
            return 'Saturday'
            break;
        case 7:
            return 'Sunday'
            break;
        default:
            return 'Такого дня в тиждні не існує'
            break;
    }
}
console.log(weekendDay(1))

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let number1 = 5;
let number2 = 5;
if (number1 > number2){
    console.log(`Число ${number1} найбільше із двох введених чисел`)
}else if(number1 < number2){
    console.log(`Число ${number2} найбільше із двох введених чисел`)
}else{
    console.log('Числа рівні')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x = 0;
if (x === '' || x === null || x === undefined|| x === 0 || x === false){
    x = 'default';
}
console.log(x);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let courseName;
for (x = 0; coursesAndDurationArray.length > 0; x++){
    courseName = coursesAndDurationArray[x]['title'];
    if (coursesAndDurationArray[x]['monthDuration'] > 5){
        document.write(`<h3>Тривалість навчання за курсом ${courseName} більша ніж 5 місяців --- СУПЕР</h3>`);
    }
}