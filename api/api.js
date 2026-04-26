const loadjson = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const loadpost=() => {

    const url='https://jsonplaceholder.typicode.com/posts';
    fetch(url).then(response=> response.json()).then(data=> displayPost(data));
}

// const displayPost=(post)=>{
//     //get the conatiner
//     const parentContainer=document.getElementById('post-title');
//     parentContainer.innerHTML='';
//     post.forEach((each) => {
//         const li=document.createElement('li');
//         console.log(li);
//         li.innerText=each.title;
//         parentContainer.appendChild(li);
//         console.log(each);
//     })
//     // console.log(post);
// };


const displayPost=post=>{
    //get the parent and empty it
    const parentContainer=document.getElementById('post-container');
    parentContainer.innerHTML='';

    //load each element
    post.forEach(each=>{
        const card=document.createElement('div');
        card.innerHTML=`
         <div class="post">
            <h2>${each.title}</h2>
            <p>${each.body}</p>
        </div>`;
        parentContainer.appendChild(card);
    })
}
loadpost();