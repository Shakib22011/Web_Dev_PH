const number=[2,3,4,5,6,7,8];
const even=number.filter(num=>num%2===0)
console.log(even);


//find
//only returns the first match of the condition like filter
const even1=number.find(num=>num%2===0)
console.log(even1);
console.log(typeof(even1));