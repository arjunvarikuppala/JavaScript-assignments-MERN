// iii. app.js - Main application
//                   // TODO: Import task functions
//                   // import { ... } from './task.js';
//                   // Test your module system
//                   // 1. Add some tasks
//                   // 2. Display all tasks
//                   // 3. Complete a task
//                   // 4. Display all tasks again



import { addTask, getAllTasks, completeTask } from './task.js';

// 1. Add some tasks            
console.log(addTask('Buy groceries', 'medium', '2024-12-01'));
console.log(addTask('Do', 'high', '2023-01-01')); // Invalid title
console.log(addTask('Finish project', 'urgent', '2024-11-01')); // Invalid priority 
console.log(addTask('Finish project', 'high', '2020-11-01')); // Invalid due date
console.log(addTask('Finish project', 'high', '2024-11-01'));


// 2. Display all tasks
console.log('All Tasks:', getAllTasks());   
// 3. Complete a task
console.log(completeTask(1));
// 4. Display all tasks again   
console.log('All Tasks after completion:', getAllTasks());  
