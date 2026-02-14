const subject='Chemistry';
const book=` CheMisTry`;
console.log(subject===book);
console.log(subject.toUpperCase().trim()===book.toUpperCase().trim());

// reverse
let reverse='';
for(const char of subject){
    reverse=char+reverse;
}
console.log(reverse);

//or
console.log(subject.split('').toReversed().join(''));

const bottle={
    color:'blue',
    volume:500,
    material:'plastic',
    color: 'red',
    'fav places':['beach', 'mountains']
}
console.log(bottle.color);
console.log(bottle['volume']);
console.log(bottle['fav places']);
console.log(Object.keys(bottle));

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors['golden rod']);

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car['passenger capacity']=5;
console.log(car);

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student['physics']['marks']);
console.log(Object.keys(student).length);



let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

// const keys=Object.keys(myObject);
// for(let key of keys){
//     console.log("key: ", key , " | type: ", typeof myObject[key]);
// }

for(let keys in myObject){
    console.log('key: ',keys,' |type: ',typeof myObject[keys]);
}


const myString='ducation';
const vowel=['a', 'e', 'i', 'o', 'u'];
let include;
for(let i=0;i<vowel.length;i++){
    if(!myString.includes(vowel[i])){
        include=false;
        break;
    }
    else{
        include=true;
    }
}
console.log(include);