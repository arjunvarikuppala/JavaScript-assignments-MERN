/****************************************************
 * ASSIGNMENT 1: Shopping Cart Summary
 * ----------------------------------
 * This program demonstrates the usage of:
 * 1. filter()     -> to select only in-stock products
 * 2. map()        -> to transform data into required format
 * 3. reduce()     -> to calculate grand total
 * 4. find()       -> to find a specific product
 * 5. findIndex()  -> to find index of a product
 ****************************************************/

// ---------- Test Data ----------
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// ---------- 1. filter(): Get only in-stock products ----------
const inStockItems = cart.filter(item => item.inStock === true);

console.log("1) In-stock items:");
console.log(inStockItems);

// ---------- 2. map(): Create new array with { name, totalPrice } ----------
const productSummary = inStockItems.map(item => {
  return {
    name: item.name,
    totalPrice: item.price * item.quantity
  };
});

console.log("\n2) Product summary (name & totalPrice):");
console.log(productSummary);

// ---------- 3. reduce(): Calculate grand total cart value ----------
const grandTotal = inStockItems.reduce((sum, item) => {
  return sum + (item.price * item.quantity);
}, 0);

console.log("\n3) Grand total cart value:");
console.log(grandTotal);

// ---------- 4. find(): Get details of "Mouse" ----------
const mouseDetails = cart.find(item => item.name === "Mouse");

console.log("\n4) Details of Mouse:");
console.log(mouseDetails);

// ---------- 5. findIndex(): Find position of "Keyboard" ----------
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");

console.log("\n5) Index of Keyboard:");
console.log(keyboardIndex);
