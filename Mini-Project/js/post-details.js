let postInfo = JSON.parse(new URL(location.href).searchParams.get('data'));
let back = document.createElement('a');
let prevPage = new URL(location.href).searchParams.get('prevPage');
let linksDiv = document.getElementsByClassName('links')[0];
back.classList.add('backLink', 'prevPage');
back.innerText = `Back`;
back.href = `user-details.html?data=${prevPage}`;
linksDiv.appendChild(back);
let commentsURL = new URL(`https://jsonplaceholder.typicode.com/posts/${postInfo.userId}/comments`);
let title = document.getElementsByClassName('title')[0];
title.innerText = postInfo.title.toUpperCase();
let postInner = document.getElementsByClassName('post-inner')[0];
postInner.innerText = postInfo.body;
let userInfo = document.getElementsByClassName('User-info')[0].getElementsByTagName('p');
userInfo[0].innerText = `Post Id: ${postInfo.id}`;
userInfo[1].innerText = `User Id: ${postInfo.userId}`
fetch(commentsURL)
.then(value => value.json())
.then(comments => {
    console.log(comments);
    let commentDiv = document.getElementsByClassName('comment');
    for (let i = 0; i < comments.length; i++){
        let commentTitle = commentDiv[i].getElementsByClassName('title')[0];
        commentTitle.innerText = comments[i].name;
        let commentInner = commentDiv[i].getElementsByClassName('comment-inner')[0];
        commentInner.innerText = comments[i].body;
        let authorInfo = commentDiv[i].getElementsByClassName('authot-info')[0];
        authorInfo.innerText = `Id user: ${comments[i].id} Email: ${comments[i].email}`;
    }
})