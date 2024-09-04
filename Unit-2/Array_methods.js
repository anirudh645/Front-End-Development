let fruits = ["Banana", "Orange"];
fruits.unshift("Lemon");
console.log(fruits);
console.log("Splice method insertion:");
fruits.splice(1,0,"Mango","Kiwi");
console.log(fruits);
let f = fruits.pop();
console.log(f);

console.log("Concat method concatenation:");

let vegetables = ["Carrot", "Cucumber"];
let fruit = ["Banana", "Orange"];

let allFruits = fruit.concat(vegetables);
console.log(allFruits);
console.log(fruits.join("*"));