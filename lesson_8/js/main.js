// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// //
// let users = [
//     new User(1, 'Bohdan', 'Zamkovyi', 'sarun@gmail.com', '0666466236'),
//     new User(2, 'Vasil', 'Cambur', 'sarun1@gmail.com', '0966456231'),
//     new User(3, 'Igor', 'Gavrilov', 'sarun123@gmail.com', '0936426238'),
//     new User(4, 'Sergiy', 'Carkoun', 'sarun32@gmail.com', '0936226251'),
//     new User(5, 'Mike', 'Urnak', 'sarun342@gmail.com', '0996425214'),
//     new User(6, 'Zhenya', 'Murnuk', 'sarun532@gmail.com', '0994465212'),
//     new User(7, 'Vlad', 'Ferminak', 'sarun152@gmail.com', '0634485215'),
//     new User(8, 'Bohdan', 'Tunyak', 'sarun4363@gmail.com', '0954495215'),
//     new User(9, 'Mike', 'Lovikun', 'sarun3256@gmail.com', '0994495419'),
//     new User(10, 'Sergiy', 'Sumenuk', 'sarun141@gmail.com', '0934445241')
// ];
// console.log(users);
// //- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let few = users.filter((user) => (user.id % 2 === 0));
// console.log(few);
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortId = users.sort((a, b) => a.id - b.id);
// console.log(sortId);
//
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clients = [
//     new Client(1, 'Bohdan', 'Zamkovyi', 'sarun@gmail.com', '0666466236', ['phone', 'mouse', 'StarLink', 'Sports pants']),
//     new Client(2, 'Vasil', 'Cambur', 'sarun1@gmail.com', '0966456231', ['phone', 'PlayStation 5', 'StarLink']),
//     new Client(3, 'Igor', 'Gavrilov', 'sarun532@gmail.com', '0936426238', ['Virtual reality glasses', 'mouse', 'StarLink']),
//     new Client(4, 'Sergiy', 'Carkoun', 'sarun32@gmail.com', '0936226251', ['phone', 'mouse', 'StarLink']),
//     new Client(5, 'Mike', 'Urnak', 'sarun342@gmail.com', '0996425214', ['phone', 'Electric toothbrush']),
//     new Client(6, 'Zhenya', 'Murnuk', 'sarun532@gmail.com', '0994465212', ['phone', 'Acer Aspire 7 laptop', 'StarLink']),
//     new Client(7, 'Vlad', 'Ferminak', 'sarun152@gmail.com', '0634485215', ['Sports pants', 'mouse', 'StarLink']),
//     new Client(8, 'Bohdan', 'Tunyak', 'sarun4363@gmail.com', '0954495215', ['Квадрокоптер Autel EVO Lite+ Orange', 'mouse', 'StarLink']),
//     new Client(9, 'Mike', 'Lovikun', 'sarun3256@gmail.com', '0994495419', ['phone', 'mouse', 'StarLink', 'PlayStation 5', 'Sports pants']),
//     new Client(10, 'Sergiy', 'Sumenuk', 'sarun141@gmail.com', '0934445241', ['phone', 'mouse', 'StarLink']),
// ]
// console.log(clients);
// let sortOrerclients = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sortOrerclients);
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car (model, creator, year, maxSpeed, volumeEngine){
//     this.model = model;
//     this.creator = creator;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volumeEnqine = volumeEngine;
//     this.driver = function(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function(){
//         console.log(`Модель - ${model}`);
//         console.log(`Виробник - ${creator}`);
//         console.log(`Рік виготовлення - ${year}`);
//         console.log(`Максимальна швидкість - ${maxSpeed}`);
//         console.log(`Об'єм двигуна - ${volumeEngine}`);
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         maxSpeed = newSpeed;
//     }
//     this.changeYear = function (newValue){
//         year = newValue;
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }
// let car1 = new Car ('00041', 'mazda', 2003, 130, 1.7);
// console.log(car1);
// car1.driver();
// car1.info();
// car1.increaseMaxSpeed(140);
// car1.changeYear(1994);
// car1.driver = {name: 'Bohdan', age: 32, exp: 4};
// car1.info()
// console.log(car1.driver);
//
//- (Те саме, тільки через клас)
// class Car{
//     constructor(model, creator, year, maxSpeed, volumeEngine){
//     this.model = model;
//     this.creator = creator;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volumeEnqine = volumeEngine;
//     this.driver = function(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function(){
//         console.log(`Модель - ${model}`);
//         console.log(`Виробник - ${creator}`);
//         console.log(`Рік виготовлення - ${year}`);
//         console.log(`Максимальна швидкість - ${maxSpeed}`);
//         console.log(`Об'єм двигуна - ${volumeEngine}`);
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         maxSpeed = newSpeed;
//     }
//     this.changeYear = function (newValue){
//         year = newValue;
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }}
// let car1 = new Car ('00041', 'mazda', 2003, 130, 1.7);
// car1.info();
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Cinderella(name, age, sizeFoot){
    this.name = name;
    this.age = age;
    this.sizeFoot = sizeFoot;
}
let cinderells = [
    new Cinderella('Katya', 19, 34),
    new Cinderella('Veronika', 35, 36),
    new Cinderella('Vasilisa', 29, 37),
    new Cinderella('Olena', 19, 37),
    new Cinderella('Julia', 32, 38),
    new Cinderella('Veronika', 45, 39),
    new Cinderella('Katya', 19, 37),
    new Cinderella('Vasilisa', 17, 37),
    new Cinderella('Katya', 19, 35),
    new Cinderella('Veronika', 36, 37)
]
console.log(cinderells);
let prince = {name: 'Rudolf', age: 23, sizeFind: 34};
for (const item of cinderells){
    if (item.sizeFoot === prince.sizeFind){
        console.log(item);
    }
}
//
let searchCinderell = cinderells.find(value => value.sizeFoot === prince.sizeFind);
console.log(searchCinderell);