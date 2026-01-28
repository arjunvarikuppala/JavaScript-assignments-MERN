
//  ii. task.js - Task operations
//                     // TODO: Import validator functions
//                     // import { ... } from './validator.js';
                    
//                     const tasks = [];
                    
//                     // 1. Add new task
//                     function addTask(title, priority, dueDate) {
//                       // Validate using imported functions
//                       // If valid, add to tasks array
//                       // Return success/error message
//                     }
                    
//                     // 2. Get all tasks
//                     function getAllTasks() {
//                       // Return all tasks
//                     }
                    
//                     // 3. Mark task as complete
//                     function completeTask(taskId) {
//                       // Find task and mark as complete
//                     }

//                   // Export functions


//1.Add new task    
    // 
import { validateTitle,validatePriority,validateDueDate} from "./validator.js";
const tasks = [];
let taskIdCounter = 1;
export function addTask(title, priority, dueDate) {
    if (!validateTitle(title)) {
        return 'Error: Invalid title. It must be at least 3 characters long.';
    }   
    if (!validatePriority(priority)) {  
        return 'Error: Invalid priority. It must be one of: low, medium, high.';
    }
    if (!validateDueDate(dueDate)) {    
            
        return 'Error: Invalid due date. It must be a future date.';
    }       
    const newTask = {   
        id: taskIdCounter++,
        title: title.trim(),
        priority: priority.toLowerCase(),       
        dueDate: new Date(dueDate),
        completed: false
    };  
    tasks.push(newTask);
    return 'Task added successfully.';
}
//2.Get all tasks   
export function getAllTasks() {
    return tasks;
}       
//3.Mark task as complete   
export function completeTask(taskId) {  
    const task = tasks.find(t => t.id === taskId);  
    if (task) { 
        task.completed = true;      
        return 'Task marked as complete.';
    }
    return 'Error: Task not found.';
}           
// export { addTask, getAllTasks, completeTask };   



