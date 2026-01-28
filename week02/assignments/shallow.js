/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
------------------------------------------------------- */
//Given Data: /*
              
              
 
// 
 /*Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
          */



let user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};

// 1. Create a shallow copy
let shallow = { ...user };

// 2. Change values IN THE COPIED OBJECT
shallow.name = "Arjun";                 // top-level change
shallow.preferences.theme = "bright";   // nested change

// 3. Log both
console.log("Original:", user);
console.log("Shallow Copy:", shallow);

