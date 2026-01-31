/// Import express framework
import exp from "express";

// Create a router object to handle product routes
export const productApp = exp.Router();

// Temporary array to store products (in memory, not database)
const products = [];


// =======================
// GET ALL PRODUCTS
// =======================
productApp.get("/products", (req, res) => {

    // Send all products as JSON response
    res.status(200).json({
        message: "Products:",
        payload: products
    });
});


// =======================
// ADD NEW PRODUCT
// =======================
productApp.post("/products", (req, res) => {

    // Get product data from request body
    let product = req.body;

    // Add product to array
    products.push(product);

    // Send success response
    res.status(200).json({
        message: "Product Created !"
    });
});


// =======================
// UPDATE PRODUCT
// =======================
productApp.put("/products", (req, res) => {

    // Get updated product data
    let productUp = req.body;

    // Convert id to number
    let productId = Number(productUp.id);

    /*
      splice(index, deleteCount, newItem)
      - Removes 1 item at productId index
      - Inserts productUp at same index
    */
    let product = products.splice(productId, 1, productUp);

    // If no product found
    if (product.length === 0) {
        return res.status(404).json({
            message: "Product not found !"
        });
    }

    // Send updated product
    res.status(200).json({
        message: "Product updated:",
        payload: product
    });
});


// =======================
// GET PRODUCT BY ID
// =======================
productApp.get("/products/:id", (req, res) => {

    // Get id from URL parameter
    let id = Number(req.params.id);

    // Find product with matching id
    let obj = products.find(p => p.id === id);

    // If product not found
    if (!obj) {
        return res.status(404).json({
            message: "User Not Found !",
            payload: obj
        });
    }

    // If product found
    res.status(200).json({
        message: "User found !",
        payload: obj
    });
});
