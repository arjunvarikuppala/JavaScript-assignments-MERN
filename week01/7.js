/*write a fun that can extract marks greater than 70  ,packed them in an array return the array ; */

function greater(arr){
    return arr.filter(v=>v<70);
}
    arr=[10,200,599,45,678];
let result=greater(arr);
console.log(result);
  

/* find all marks blw 30 and 90 */

function bw(arr){
    return arr.filter(v=>v>30 & v<90)
}
let s=bw(arr);
console.log(s);
function add(arr){
    return arr.map(v=>v+=50)
}
let a=add(arr)
console.log(a);
