let a=10;
a=a+1;
a=a*10;
console.log(a);


let emp={
    eno:1,
    name:"ravi"
}
console.log(emp.eno);
   

//dynamic operations  = adding the elemnts during run time;
      

emp.city='hyd';
  

emp.eno=123;
console.log(emp.eno);  //adding --- dynamically
console.log(emp.city); // updating ---- dynamically 
   

delete emp.city;

console.log(emp.city); // done 
 Object.freeze(emp);  // object is class ;
 console.log(emp.eno);
 emp.city='cpl';
  console.log(emp.city);   /// data is freezeed ;;;
console.log(Object.keys(emp))
console.log(Object.values(emp))

///the above data is packing the data ... but now below data is unpacking the data ...




let test={
    x:10,
    b:20,
    c:30
}
let {x,b,c}=test;
console.log(x)
console.log(b)
// complex objects 

let student ={
    sno:63,
    sname:'sanjay',
    marks:[10,20,30,40],
    address:{
        city:'guddimalkapuram',
        pincode:508253
    },
    getData:function(){
        return "hello"; 
    }

}
console.log(student.sno);
console.log(student.marks[0]);
console.log(student.getData());
