const mixed=[1, 'two', 3, 'four', 5];
console.log(mixed[3]);
console.log(mixed);
console.log(mixed.length);
const name=['s','a','m','a','n','t','h','a'];
console.log(name);
mixed.push('six');
console.log(mixed.length);
mixed.push(8);
console.log(mixed.length);
mixed.pop();
console.log(mixed);
console.log(mixed.length);
mixed.unshift(0);
console.log(mixed);
console.log(mixed.length);
mixed.shift();
console.log(mixed);
console.log(mixed.length);
console.log(mixed.includes('two'));
console.log(mixed.indexOf(3));
console.log(Array.isArray(name));
console.log(mixed.concat(name));
console.log(mixed);

const num=[1, 2, 3, 4, 5];
const rev=[];
for(let i=0;i<num.length;i++){
    rev.unshift(num[i]);
}
console.log(rev);


var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
var toString="";
console.log(numbers.join(''));
for(let i=0;i<numbers.length;i++){
    toString += numbers[i];
}
console.log(toString);
console.log(typeof toString);



const statement = 'I am a hard working person';
console.log(statement.split(" ").sort((a, b) => a.localeCompare(b)));
console.log(statement.split(" ").reverse().join(" "));
const split=statement.split(" ");
let reverse="";
for(let i=split.length-1;i>=0;i--){
    reverse+=split[i]+" ";
}
console.log(reverse);