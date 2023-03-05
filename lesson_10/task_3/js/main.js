// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація
// про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
let session = JSON.parse(localStorage.getItem('NewSession')) || [{counter: 1}];
window.onload = function (){
    let time = new Date();
    let getSeconds = time.getSeconds();
    if (time.getSeconds() < 10){
        getSeconds = `0${time.getSeconds()}`;
    }
    let timeFormat = `0${time.getDate()}.0${time.getMonth() + 1}.${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${getSeconds}`;
    let lastObj = session[session.length - 1];
    function setTimeSession(){
        lastObj.timeSession = timeFormat;
    }
    if (lastObj.counter === 1){
        setTimeSession();
        session.push({});
        localStorage.setItem('NewSession', JSON.stringify(session));
    }else {
        lastObj.counter = session[session.length - 2].counter + 1;
        setTimeSession();
        session.push({});
        localStorage.setItem('NewSession', JSON.stringify(session));
    }
}