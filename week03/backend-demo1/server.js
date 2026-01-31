// Import express framework
import exp from "express";

// Import user API router from UserApi.js file
import { userApp } from "./APIs.js/UserApi.js";

// Import product API router from products-Apis.js file
import { productApp } from "./APIs.js/products-Apis.js";

// Create express application object
const app = exp();

// Middleware to parse incoming JSON requests
// Without this, req.body will be undefined
app.use(exp.json());

// Connect user routes with base path "/user-api"
app.use("/user-api", userApp);

// Connect product routes with base path "/products-api"
app.use("/products-api", productApp);

// Start server on port 3000
app.listen(3000, () => {

  // Print message when server starts successfully
  console.log("Server running on port 3000");
});

// Simple GET API for "/user" route
app.get("/user", (req, res) => {

  // Send plain text response to client
  res.send("hello user");
});
