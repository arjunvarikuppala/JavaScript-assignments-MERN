let marks = [45, 78, 88, 90, 67];
let skills = ['html', 'css', 'js', 'react', 'nodejs'];
console.log(marks);
console.log(skills);

//accessing 
for(let i=0;i<marks.length;i++){
    console.log(skills[i],':',marks[i]);  
    
}
console.log(marks[10]);
//iterations
//for-of loop
console.log("----------------------------------------------------------");  
for(let m of marks){
    console.log(m);
}
let mark = [45, 78, 88, 90, 67]; 
let a=0;
for(let v of mark){
  a+=v;

}
console.log('sum:',a)  ;
// write a fun that receives as marsks as a argments and return small element 
//let cmarks=[45, 78, 8, 90, 67]; 
function smallestElement(arr){
    let small=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<small){
            small=arr[i];
        }
    }
    return small;
}
let arr=[45, 78, 8, 90, 67];
let small=smallestElement(arr);
console.log("smallest element is:",small);

let skills2 = ['html', 'css', 'js', 'react', 'nodejs'];
function findskill(skills2,skillname){
    for(let i=0;i<skills2.length;i++){
        if(skills2[i]==skillname){
            console.log("yes");
        }
        else{
            console.log("no");
        }
    }

}

console.log(findskill(skills2,"react"));




