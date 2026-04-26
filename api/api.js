const loadjson = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const loadpost=() => {

    const url='https://jsonplaceholder.typicode.com/posts';
    fetch(url).then(response=> response.json()).then(data=> displayPost(data));
}

const displayPost=(post)=>{
    //get the conatiner
    const parentContainer=document.getElementById('post-title');
    post.forEach((each) => {
        const li=document.createElement('li');
        console.log(li);
        li.innerText=each.title;
        parentContainer.appendChild(li);
        console.log(each);
    })
    // console.log(post);
};