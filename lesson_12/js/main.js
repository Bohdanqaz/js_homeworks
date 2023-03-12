// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
let url = new URL('https://jsonplaceholder.typicode.com/users/');
fetch(url)
.then(value => value.json())
.then(function (users) {
    console.log(users);
    let ul = document.createElement('ul');
    ul.classList.add('Users-list');
    document.body.appendChild(ul);
    for (const user of users) {
        let a = document.createElement('a');
        a.href = 'user-details.html?id=' + user.id;
        let li = document.createElement('li');
        li.classList.add('user');
        li.innerHTML = `<b>Id:</b> ${user.id}; <b>Name:</b> ${user.name}`;
        ul.appendChild(a);
        a.appendChild(li);
    }
});