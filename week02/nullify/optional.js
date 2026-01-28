let student={

    rollno:1,
    name:"arjun",
}
console.log(student.rollno);
console.log(student.name);
console.log(student.marks?.length?? "no brother no marks in the object what your are created"); //  ? if present then it shows undefined else error  -- nullish

//  ?? if undefined or null then it shows the value after ?? otherwise shows the value before ??
// example 2
let employee={  
    id:101,
    ename:"ajay",
    // salary:50000 
}
console.log(employee.id);   

console.log(employee.ename);    
console.log(employee.salary?? "salary not defined in the object");  
