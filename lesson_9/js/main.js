// let simpsons = [
//     {
//         name : 'Bart',
//         surname : 'Simpson',
//         age : 10,
//         info : 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo : 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name : 'Homer',
//         surname : 'Simpson',
//         age : 40,
//         info : 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo : 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name : 'Marge',
//         surname : 'Simpson',
//         age : 38,
//         info : 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo : 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name : 'Lisa',
//         surname : 'Simpson',
//         age : 9,
//         info : 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo : 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name : 'Maggie',
//         surname : 'Simpson',
//         age : 1,
//         info : 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo : 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// //     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// //
// for (const simpson of simpsons) {
//     let div = document.createElement('div');
//     div.classList.add('member');
//     document.body.appendChild(div);
//     div.innerHTML = `<h2>${simpson.name} ${simpson.surname}</h2><p>Вік: ${simpson.age}</p><img src="${simpson.photo}"><p>${simpson.info}</p>`;
// }
// Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// //
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png
// //
// let h2;
// let span;
// let divCreater;
// let innerList;
// let divForList;
// //
// for (const itemArr of coursesArray) {
//     divCreater = document.body.appendChild(document.createElement('div'));
//     divCreater.classList.add('course');
//     h2 = divCreater.appendChild(document.createElement('h2'));
//     h2.innerHTML = `Назва: <i>${itemArr.title}</i>`;
//     divCreater.appendChild(document.createElement('div'))
//         .innerHTML = `<span>Тривалість місяців: ${itemArr.monthDuration}</span>, Тривалість годин: ${itemArr.hourDuration};`
//     divForList = divCreater.appendChild(document.createElement('div'));
//     innerList = divForList.appendChild(document.createElement('h3'))
//         .innerText = 'Модулі';
//     innerList = divForList.appendChild(document.createElement('ul'));
//     for (const itemList of itemArr.modules){
//         innerList.appendChild(document.createElement('li')).innerText = `${itemList}`;
//     }
// }
//
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// let headObj = document.body.appendChild(document.createElement('div'));
// headObj.classList.add('wrap', 'collapse', 'alpha', 'beta');
// headObj.innerText = 'TITLE EXAMPLE';
// document.body.appendChild(document.createElement('hr'))
// let cloneHeadObj = headObj.cloneNode(true);
// document.body.appendChild(cloneHeadObj);
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// //Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// for (const ArrayElement of coursesAndDurationArray) {
//     document.body.appendChild(document.createElement('div')).innerHTML = `<h2>${ArrayElement.title}</h2><p>${ArrayElement.monthDuration}</p><hr>`;
// }
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let h1;
// let p;
// let div;
// for (const ArrayElement of coursesAndDurationArray) {
//     document.body.appendChild(document.createElement('div')).innerHTML = `<h1>${ArrayElement.title}</h1><p>${ArrayElement.monthDuration}</p><hr>`;
//     div = document.getElementsByTagName('div')[0];
//     div.classList.add('item');
//     h1 = document.getElementsByTagName('h1')[0];
//     h1.classList.add('heading');
//     p = document.getElementsByTagName('p')[0];
//     p.classList.add('description')
// }
// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//