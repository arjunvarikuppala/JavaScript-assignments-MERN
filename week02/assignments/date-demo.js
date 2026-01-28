/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks: 
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. 
                    DD-MM-YYYY HH:mm:ssDisplay the date in this format:

*/
//1. Create a Date object for current date & time.
let d=new Date();
//Extract and display:
                  //  * Year
console.log(d);
//*year 
console.log(d.getFullYear());
//month 
console.log(d.getMonth());
//date
console.log(d.getDate());
//day of week
console.log(d.getDay());
// hours ,minutes,seconds 
console.log("hours:",d.getHours(),"minutes",d.getMinutes(),"seconds",d.getSeconds());
console.log(d.getFullYear(),"-",d.getMonth(),"-",d.getDate(),"-",d.getHours(),":",d.getMinutes(),":",d.getSeconds());






/*

Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid
*/

let enrollmentDeadline = new Date("2026-01-20");

let today=new Date(); 


// we use the check funsction to check the enrollment stastus;

/*1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed" */

function check(today,enrollmentDeadline){
if(today<enrollmentDeadline){
    console.log("Enrollment Open");
}else{
    console.log("Enrollment close");
}
}
//function calling;
check(today,enrollmentDeadline);

let Input=new Date("2026-02-30");
function valid(d,Input){
    if(d===Input){
        console.log("valid");
    }
    else{
        console.log("Invalid");
    }
}
valid(d,Input);







/*
Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years */   //d==today
        let dob = "2000-01-21";
    let dodo=new Date(dob);
    let age=d.getFullYear()-dodo.getFullYear();
    let month=d.getMonth()-dodo.getMonth();
    let days=d.getDate()-dodo.getDate();

    if(month<0 ){
        age--;
    }
    console.log(age); //26