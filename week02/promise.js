// conversions of json to java script promise   

let studentData={
 name:"John Doe",
 age:21,
 courses:["Math","Science","History"]       
    
}

//converting js to json object using promise;
let studentPromise=JSON.stringify(studentData);
console.log("JSON Object:",studentPromise);

//converting json object to js using promise;
let jsonToJsPromise=JSON.parse(studentPromise);
console.log("JavaScript Object:",jsonToJsPromise);  
