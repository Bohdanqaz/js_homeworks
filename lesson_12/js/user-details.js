let urlLoc = new URL(location.href);
let idUser = urlLoc.searchParams.get('id');
let url = new URL('https://jsonplaceholder.typicode.com/users/' + idUser);
let div = document.createElement('div');
div.classList.add('User-info');
document.body.appendChild(div);
fetch(url)
.then(value => value.json())
.then(function (userInfo){
    console.log(userInfo);
    function writer (obj){
        for (const item in obj) {
            console.log(item);
            if(typeof obj[`${item}`] === 'object'){
                console.log(obj[`${item}`]);
                let divInner = document.createElement('div');
                divInner.innerHTML = `<b>${item}</b>`;
                div.appendChild(divInner);
                writer(obj[`${item}`]);
            }else if (typeof obj[`${item}`] !== 'object'){
                console.log()
                let divInner = document.createElement('div');
                divInner.innerHTML = `<b>${item}</b>`;
                div.appendChild(divInner);
                let p = document.createElement('p');
                p.classList.add(`p-User`);
                p.innerText = `${obj[`${item}`]}`
                div.appendChild(p);
            }
        }
    }
    console.log(typeof userInfo.address);
    writer(userInfo);
})