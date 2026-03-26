add();
function add(){
    console.log("Hello World");
}


// return multiple numbers or array from a function
function numbers(array){
    let sum=0,avg=0;;
    let newArray=[];
    for(let num of array){
        sum+=num;
        newArray.push(num+2);
    } 
    avg=sum/array.length;
    return [avg,newArray];
}
let newArray =numbers([1,2,3,4]);
console.log(newArray);


function count_zero(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='0'){
            count++;
        }
    }
    return count;
}
let count=count_zero("10010010");
console.log(count);


function even_odd(num){
    if(num%2==0){
        return 'even';
    } else {
        return 'odd';
    }
}
let result=even_odd(5);
console.log(result);


function largest(str){
    let larger='';
    const words=str.split(' ');
    for(let word of words){
        if(word.length>larger.length){
            larger=word;
        }
    }
    return larger;
}
console.log(largest("I love Problem solving in programming"));