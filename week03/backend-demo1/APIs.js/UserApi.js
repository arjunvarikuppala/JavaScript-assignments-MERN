// Import express framework
import exp from 'express'

// Create a Router object for handling user routes
export const userApp = exp.Router();

// Array to store users temporarily (data is lost when server restarts)
let users = []
       
        
// ==========================
// GET ALL USERS
// ==========================
userApp.get("/users",(req,res)=>{

    // Send all users as JSON response
    res.status(200).json({
        message: "all users",
        payload: users
    });
})


// ==========================
// CREATE NEW USER
// ==========================
userApp.post("/users",(req,res)=>{

    // Get new user data from request body
    let newUser = req.body;

    // Add new user to users array
    users.push(newUser);

    // Send success response with status 201 (Created)
    res.status(201).json({
        message: "User Created ! "
    });
})


// ==========================
// UPDATE USER
// ==========================
userApp.put("/users",(req,res)=>{

    // Get modified user data from request body
    let modifiedUser = req.body;

    // Find index of user whose id matches modifiedUser.id
    let userIndex = users.findIndex(
        (user)=>user.id === modifiedUser.id
    );

    // If user is not found in array
    if(userIndex === -1){

        // Send 404 response
        return res.status(404).json({
            message: "user not found"
        });
    }

    // Remove old user at userIndex and insert modifiedUser
    let previousUser = users.splice(userIndex,1,modifiedUser);

    // Send success response with updated user
    res.status(200).json({
        message: "user Modified !",
        payload: modifiedUser
    });
})


// ==========================
// GET USER BY ID
// ==========================
userApp.get("/users/:id",(req, res)=>{

    // Get id from URL parameter and convert to number
    let userId = Number(req.params.id);

    // Find user whose id matches userId
    let user = users.find(
        user1=> user1.id === Number(userId)
    );

    // If user is not found
    if(!user){

        // Send 404 response
        return res.status(404).json({
            message: "User Not Found"
        });
    
    }

    // Send found user as response
    res.status(200).json({
        message: "User",
        payload: user
    });
})


// ==========================
// DELETE USER
// ==========================
userApp.delete("/users/:id",( req, res )=>{

    // Get id from URL parameter and convert to number
    let userId = Number(req.params.id)

    // Find user whose id matches userId
    let user = users.find(
        userobj=> userobj.id === userId
    )

    // Print userId in console (for debugging)
    console.log(userId)

    // If user is not found
    if(!user){

        // Send 404 response
        return res.status(404).json({
            message: "User Not Found!"
        })
    }

    // Remove one element from users array at position userId
    let deletedUser = users.splice(userId,1)

    // Send deleted user as response
    res.status(200).json({
        message: "User Deleted!",
        payload: deletedUser
    })
})
