//There are 3 types of for loops
//1--for each
let a = [7, 8, 9];
let max = a[0];
let min = a[0];
a.forEach(function (v) {
    if ( min > v ){
        min = v;
    }
    if ( max < v ){
        max = v;
    }
});
console.log("For each: "+min+" "+max);
//2--for in
let b = ["Apple", "Banana", "Orange"];
let text = "" ;
for (let i in b ){
    text += b[i];
}
console.log("For in: "+text);