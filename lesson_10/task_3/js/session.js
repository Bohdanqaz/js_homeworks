let sessions = JSON.parse(localStorage.getItem('NewSession'));
sessions = sessions.reverse()
if(sessions.length !== 0){
    for (let i = 1; i < sessions.length; i++) {
        let div = document.createElement('div');
        let title = document.createElement('h3');
        let info = document.createElement('p');
        title.innerText = `Session - ${sessions[i].counter}`;
        info.innerText = `${sessions[i].timeSession}`
        div.append(title, info);
        div.classList.add('sessionInfo');
        document.body.appendChild(div);
    }
}