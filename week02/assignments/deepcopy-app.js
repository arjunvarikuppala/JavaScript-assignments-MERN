//Hands-On 2: Deep Copy (Isolation & Safety Use Case)


                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
/*
Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged
*/
 //1. Create a deep copy of order
let copyorder=structuredClone(order);

/* 2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged
*/

copyorder.customer.address.city="nalgonda";
//i. customer.address.city
console.log(copyorder)
  //ii. items[0].price
copyorder.items[0].price=4000;
            
//iii. Verify original object remains unchanged
console.log(order);
console.log(copyorder);