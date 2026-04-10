//Option 1
function bgYellow(){
    document.body.style.backgroundColor='yellow';
}

// addd event to the id

//Option2
// document.getElementById('reset_bg').onclick=function reset_background(){
//         document.body.style.backgroundColor='white';

// }

//Option3;
// const color=document.getElementById('reset_bg');
// color.onclick=reset_background;

//Option 4;
document.getElementById('reset_bg').onclick=function(){
    reset_background();
}

function reset_background(){
    document.body.style.backgroundColor='white';
}

//eventListener

// document.getElementById('green_bg')
//    .addEventListener('click',function(){
//     document.body.style.backgroundColor='green';
//    })

document.getElementById('green_bg')
    .addEventListener('click',greenBg);

    function greenBg(){
        document.body.style.backgroundColor='green';
    }


    // change element text using evenlistener
    const textElement=document.getElementById('element_change');
    textElement.addEventListener('click',function(){
        console.log('button clicked');
        document.getElementById('text_element').innerText='The text has been changed!';
    })


    // handle input text
    document.getElementById('username').addEventListener('click',function(){
        console.log('button clicked');
        const name=document.getElementById('name').value;
        console.log(name);
        document.getElementById('input-text').innerText=name;
    })

    //comment post
    document.getElementById('post').addEventListener('click',function(){
        const comment=document.getElementById('text').value;
        //commnet container
        const container=document.getElementById('container-box');
        //creating new element
        const new_comment=document.createElement('p');
        new_comment.innerText=comment;
        new_comment.classList.add('comment');
        container.appendChild(new_comment);
        document.getElementById('text').value='';
    })

    //delete enable condition
    document.getElementById('input').addEventListener('keyup',function(event){
        const text=event.target.value;
        const dlt=document.getElementById('delete');
        if(text==='delete'){
            dlt.removeAttribute('disabled');
        }
        else{
            dlt.setAttribute('disabled',true);
        }
    })