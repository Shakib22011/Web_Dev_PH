const add2=function(n1,n2){  //age call kora jabe na ; jehetu variable er vitore declare kora hoyeche
    console.log(n1+n2);
}
add2(3,3);

//arrow function
const add3=(n1,n2)=>n1+n2;
console.log(add3(40,10));

function add(n1,n2=0){
    const total=n1+n2;
    console.log(n1,n2,total);
    console.log(isNaN(total));
}
add(10, 20);
add(10);
add(10,'rx');

console.log(`<div class="template_string">
    <p>I am shakib.</p>
    </div>`);

// spread opt
const number=[1,43,53,24];
console.log(Math.max(...number));

function sum(x,y,z){
    console.log(x,y,z);
    console.log(x+y+z);
}
sum(...number);


//copy array
const arr1=[2,3,4];
const arr2=[...arr1];
arr2.push(33);
console.log(arr1);
console.log(arr2);

//destructuring
const {name,prize,camera='12mp'}={name:'iphone',prize:1000}
console.log(typeof(prize));