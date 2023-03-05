// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================
let formForUser = document.forms.formForUser;
formForUser.addEventListener('submit', function (eo){
    eo.preventDefault();
    let div = document.createElement('div');
    div.classList.add('userInfo');
    let addDiv = document.body.appendChild(div);
    let userInfoReturn = document.getElementsByClassName('userInfo')[0];
    let title = document.createElement('h3');
    title.innerText = `Full name: ${formForUser.username.value} ${formForUser.surname.value}`;
    let ageForUser = document.createElement('p');
    ageForUser.innerHTML = `<b>Age ${formForUser.age.value}</b>`;
    addDiv.append(title, ageForUser);
})
