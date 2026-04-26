const number=[1,2,3,4];
// const doubled=[];

const doubleIt=num => num*2;
const doubled= number.map(doubleIt);
console.log(doubled);
console.log(typeof(doubled));


const products=[
    {name:'a',price:'100'},
    {name:'a',price:'100'},
    {name:'a',price:'100'},

]
const price=products.map(product=>product.price);
console.log(price);