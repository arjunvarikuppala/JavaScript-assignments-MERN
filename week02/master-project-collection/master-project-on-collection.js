 /*Project story:
-------------
“We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

Data setup:
----------- */
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};


/*

TASKS
------
MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users
  -> Extract names of active users
  -> Check if any admin exists
  -> Find user by id
  -> Deactivate a user immutably



MODULE 2: COURSE CATALOG ENGINE
  -> Get published courses
  -> Sort courses by price (high → low)
  -> Extract { title, price } only
  -> Calculate total value of published courses
  -> Add a new course immutably

MODULE 3: SHOPPING CART ENGINE 
  -> Merge cart with courses to get full course info
  -> Calculate total cart amount
  -> Increase quantity of a course (immutably)
  -> Remove a course from cart
  -> Check if all cart items are paid courses

MODULE 4: ROLE & PERMISSION ENGINE
  -> Get all role names
  -> Check if student can delete
  -> Create a flat list of all unique permissions
  -> Add new role moderator immutably
  */


  // module-1 USER PROCESSING ENGINE

  // Get only active users
  const activeUsers=users.filter(user=>user.active);
  console.log("active users:",activeUsers); 
  // Extract names of active users
  const activeUserNames=activeUsers.map(user=>user.name);
  console.log("active user names:",activeUserNames);

  // Check if any admin exists
  const adminExists=users.some(user=>user.role==="admin");
  console.log("admin exists:",adminExists);

  // Find user by id    
  const userIdToFind=2;
  const foundUser=users.find(user=>user.id===userIdToFind);
  console.log("found user:",foundUser); 
  // Deactivate a user immutably

  const userIdToDeactivate=3;

  const updatedUsers=users.map(user=>{

    if(user.id===userIdToDeactivate){
        return{...user,active:false};
    }         
    return user;
  }
  );
  console.log("updated users:",updatedUsers); 

  // MODULE 2: COURSE CATALOG ENGINE  

  // Get published courses    
  const publishedCourses=courses.filter(course=>course.published);
  console.log("published courses:",publishedCourses); 
  // Sort courses by price (high → low)
  const sortedCourses=[...courses].sort((a,b)=>b.price-a.price);  

  console.log("sorted courses by price (high → low):",sortedCourses);   
  // Extract { title, price } only  
  const courseTitlesAndPrices=courses.map(course=>({title:course.title,price:course.price}));
  console.log("course titles and prices:",courseTitlesAndPrices); 
  // Calculate total value of published courses 

  const totalValueOfPublishedCourses=publishedCourses.reduce((total,course)=>total+course.price,0);
  console.log("total value of published courses:",totalValueOfPublishedCourses); 
  // Add a new course immutably
  const newCourse={id:104,title:"Python",price:1399,published:true};
  const updatedCourseList=[...courses,newCourse];
  console.log("updated course list:",updatedCourseList);



  // MODULE 3: SHOPPING CART ENGINE
  // Merge cart with courses to get full course info
  const cartWithCourseInfo=cart.map(cartItem=>{
    const course=courses.find(c=>c.id===cartItem.courseId);
    return{...cartItem,...course};
  } 
  );  
  console.log("cart with course info:",cartWithCourseInfo); 
  // Calculate total cart amount
  const totalCartAmount=cartWithCourseInfo.reduce((total,item)=>total+(item.price*item.qty),0); 
  console.log("total cart amount:",totalCartAmount);  
  // Increase quantity of a course (immutably)  
  const courseIdToIncrease=103; 
  const updatedCart=cart.map(item=>{
    if(item.courseId===courseIdToIncrease){
        return{...item,qty:item.qty+1};
    }   
    return item;
  }   
  );    
  console.log("updated cart after increasing quantity:",updatedCart);
  // Remove a course from cart
  const courseIdToRemove=101; 
  const cartAfterRemoval=cart.filter(item=>item.courseId!==courseIdToRemove);   
  console.log("cart after removal:",cartAfterRemoval);
  // Check if all cart items are paid courses
  const allCartItemsPaid=courses.every(course=>course.price>0); 
  console.log("all cart items are paid courses:",allCartItemsPaid); 




  // MODULE 4: ROLE & PERMISSION ENGINE
  // Get all role names
  const roleNames=Object.keys(roles);   
  console.log("role names:",roleNames);
  // Check if student can delete  
  const studentCanDelete=roles.student.includes("delete");
  console.log("student can delete:",studentCanDelete);  
  // Create a flat list of all unique permissions



  const allPermissions=new Set();
  Object.values(roles).forEach(perms=>{
    perms.forEach(perm=>allPermissions.add(perm));
  } 
  );        
  console.log("all unique permissions:",Array.from(allPermissions));
  // Add new role moderator immutably 
  const newRole={moderator:["update","view"]};
  const updatedRoles={...roles,moderator:newRole.moderator};

  console.log("updated roles with moderator:",updatedRoles);  
