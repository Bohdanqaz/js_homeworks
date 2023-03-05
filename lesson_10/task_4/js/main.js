// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let objects = [];
for (let i = 0; i < 100; i++) {
    let counter = i;
    objects[i] = {counter : i + 1};
}
console.log(objects);
let pagesItem = [];

function page(counterPage) {
    if (pagesItem.length > 0) {
        for (const item of pagesItem) {
            pagesItem.shift();
        }
    }
    for (let i = 0; i < 10; i++) {
        pagesItem[i] = (objects[counterPage * 10 + i].counter);
    }
}

let headBoxList = document.getElementsByClassName('HeadBox_list')[0];
let livePage = 0;
page(livePage);
for (let i = 0; i < pagesItem.length; i++) {
    let listItem = document.createElement('div');
    listItem.classList.add('ListItem');
    listItem.innerText = pagesItem[i];
    headBoxList.appendChild(listItem);
}
console.log(pagesItem);
let btnNext = document.getElementsByName('btnNext')[0];
let btnPrev = document.getElementsByName('btnPrev')[0];
btnPrev.disabled = true;
btnNext.onclick = function () {
    livePage += 1;
    btnPrev.disabled = false;
    page(livePage);
    for (let i = 0; i < pagesItem.length; i++) {
        let listItems = document.getElementsByClassName('ListItem');
        listItems[i].innerText = pagesItem[i];
    }
    if (livePage === 9){
        btnNext.disabled = true;
    }
}
btnPrev.onclick = function () {
    btnNext.disabled = false;
    livePage -= 1;
    page(livePage);
    for (let i = 0; i < pagesItem.length; i++) {
        let listItems = document.getElementsByClassName('ListItem');
        listItems[i].innerText = pagesItem[i];
    }
    if (livePage === 0){
        btnPrev.disabled = true;
    }
}
