// For-in Loop
function sub() {
  let sum = 0;
  for (let i in arguments) {
    sum += arguments[i];
  }
  document.write(`For in Loop Sum: ${sum}`);
}
sub(23, 52, 24);

document.write("<br>");

// Rest Operator

function sum(title, ...args) {
  let sum = 0;
  document.write(title);
  for (let i in args) {
    sum += args[i];
  }
  document.write(` ${sum}`);
}

sum("Rest Operator:", 23, 445, 23, 34);

// Spread Operator

function spr(title, ...args) {
  let sum = 0;

  document.write("<br>" + title);
  for (let i in args) {
    sum += args[i];
  }
  document.write(sum);
}
let sprArray = [12, 12, 24, 45];
spr("Spread Opertor: ", ...sprArray);

document.write("<br>");

let arrow = (name) => {
  document.write(name);
};

arrow("Mudassar");

// Merging all concepts

let merge = (title, ...args) => {
  let sum = 0;
  document.write(`Title is ${title}`);
  for (let i in args) {
    sum += args[i];
  }
  document.write(sum);
};
let arr = [12, 34, 56, 67];
merge("Merging all Concepts: ", ...arr);

document.write("<br>")

// Object Literals

let n= "name";
let id = 12;

let obj ={
    [n]: 'Mudassar',
    id : 123
}

document.write(obj.name)
document.write(` ${obj.id}`)

document.write("<br>")

// Destructuring an Array

let arr1 = [' Destructuring an Array',23,52,53];

let [first,sec,thr,forth]= arr1;

document.write(first);
document.write("<br>")


function user(){
    return ['Mudassar',23,'male']
}

let [name,age,gender]= user();

document.write(name);
document.write("<br>")

// Destructuring an Object

let obj1 = {
    name1: 'Destructuring an Object',
    age1 : 23,
    gender1 : 'male'
}

let {name1,age1,gender1}=obj1;
document.write(name1);

document.write("<br>")
document.write("<br>")



