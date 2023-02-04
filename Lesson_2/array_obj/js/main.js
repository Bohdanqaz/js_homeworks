// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['Element 1', 2, 'El', 'number', true, 'text', 64, '2', 12.233, 'js'];
for (x = 0; arr.length > x; x++) {
    console.log(arr[x]);
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books = [
    {
        title : 'Madame Bovary',
        pageCount : 190,
        genre : 'Novel',
        authors : [{name : 'Gustave Flaubert', age : 62}]
    },
    {
        title : 'War and Peace',
        pageCount : 1225,
        genre : 'Historical prose',
        authors : [{name : 'Leo Tolstoy', age : 67}]
    },
    {
        title : 'The Great Gatsby',
        pageCount : 208,
        genre : 'A tragedy',
        authors : [{name : 'F. Scott Fitzgerald', age : 54}]
    }
];
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
let users = [
    {name: 'Bohdan', username: 'bohdan_z', pasword: 'hdfas49io8Uae'},
    {name: 'Stiv', username: 'stivi', pasword: 'cZyDoorWc4EF0'},
    {name: 'Jonh', username: 'jonni', pasword: 'KyAWgky6FMTDL'},
    {name: 'Veronika', username: 'nika_131', pasword: '7K9qGNE1vPE5j'},
    {name: 'George', username: 'gorge2_1', pasword: 'sgjf7XUQNLW09'},
    {name: 'Igor', username: 'igor_13', pasword: 'YvQ9dVanBGpTy'},
    {name: 'Mike', username: 'mike231', pasword: 'FNhAsZCMK5zEC'},
    {name: 'Mina', username: 'mina', pasword: 'xqPFR6M44fP9E'},
    {name: 'Albert', username: 'albert_21', pasword: 'VGD2A7Xr91s7A'},
    {name: 'Ivan', username: 'vanyi_111', pasword: 'U8KyFbR0Vqmd0'}
];
// Вивести в консоль пароль кожного користувача
for (x = 0; users.length > x; x++){
    console.log(users[x].pasword);
}
