let userArray = JSON.parse(new URL(location.href).searchParams.get('data'));
let infoStrings = document.getElementsByClassName('info-string');
infoStrings[0].innerText = `Id: ${userArray.id}`;
infoStrings[1].innerText = `Name: ${userArray.name}`;
infoStrings[2].innerText = `Username: ${userArray.username}`;
infoStrings[3].innerText = `Website: ${userArray.website}`;
infoStrings[4].innerText = `Email: ${userArray.email}`;
infoStrings[5].innerText = `Phone: ${userArray.phone}`;
let infoItem = document.getElementsByClassName('info-item');
infoItem[0].innerText = `City: ${userArray.address.city}`;
infoItem[1].innerText = `Street: ${userArray.address.street}`;
infoItem[2].innerText = `Suite: ${userArray.address.suite}`;
infoItem[3].innerText = `Zipcode: ${userArray.address.zipcode}`;
infoItem[4].innerText = `Lat-${userArray.address.geo.lat}`;
infoItem[5].innerText = `Ing-${userArray.address.geo.lng}`;
infoItem[6].innerText = `Name: ${userArray.company.name}`;
infoItem[7].innerText = `Catch Phrase: ${userArray.company.catchPhrase}`;
infoItem[8].innerText = `BS: ${userArray.company.bs}`;
let btn = document.getElementsByTagName('button')[0];
let idUser = userArray.id;
fetch(`https://jsonplaceholder.typicode.com/users/${idUser}/posts`)
    .then(value => value.json())
    .then(posts => {
        let postUsers = document.getElementsByClassName('post-user');
        for(let i = 0; i < posts.length; i++){
            let sub = `${posts[i].title.substring(0, 20)}...`;
            postUsers[i].innerText = sub;
            let linkPost = document.getElementsByClassName('posts_link');
            linkPost[i].href = `post-details.html?data=${JSON.stringify(posts[i])}&prevPage=${JSON.stringify(userArray)}`;
        }
    });
let postsUsers = document.getElementsByClassName('posts_users')[0];
btn.onclick = (() => {
    if (btn.innerText === 'posts of current user'.toUpperCase()) {
        btn.innerText = 'hide posts of current user'.toUpperCase();
        postsUsers.style.display = 'flex';
    } else if (btn.innerText === 'hide posts of current user'.toUpperCase()) {
        btn.innerText = 'posts of current user'.toUpperCase();
        postsUsers.style.display = 'none';
    }
});