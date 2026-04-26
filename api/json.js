const person={
    name : 'shakib',
    age:24,
    isRich: false,
    salary:34000,
};
console.log(person);

const toJson=JSON.stringify(person);
console.log(toJson);

const parse=JSON.parse(toJson);
console.log(parse);