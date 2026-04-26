let a=[];
console.log(Array.isArray(a));


//compare equal
console.log(2==2);
console.log(2=='2');
console.log(1==true);
console.log(0==false);
console.log(true=='1');
console.log(false=='0');
console.log(null==undefined);
console.log(NaN==NaN);
console.log([5]=='5');
console.log([]==[]); //both are non premitive

//clouser
function outer(){
    function inner(){
        console.log('This is inner function');
    }
    return inner;
}
const result=outer();
result();
