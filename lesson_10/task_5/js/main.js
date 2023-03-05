// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let column = document.getElementsByName('column')[0];
let cell = document.getElementsByName('cell')[0];
let text = document.getElementsByName('text')[0];
let button = document.getElementsByName('create')[0];
let table = document.createElement('table');
document.body.appendChild(table);
button.onclick = function (){
    for (let i = 0; i < cell.value; i++){
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let i = 0; i < column.value; i++){
            let td = document.createElement('td');
            td.innerText = text.value;
            tr.appendChild(td);
        }
    }
}