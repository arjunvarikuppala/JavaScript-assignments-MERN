// Task Management System (ToDo App Modules):
//      Building a task manager like Todoist

// Requirements:
//      Create a modular todo app with 3 separate files:

       
          
//         i. validator.js - Input validation
//                       // TODO: Export these validation functions
                      
//                       // 1. Validate task title (not empty, min 3 chars)
//                       function validateTitle(title) {
//                         // Your code here
//                       }
                      
//                       // 2. Validate priority (must be: low, medium, high)
//                       function validatePriority(priority) {
//                         // Your code here
//                       }
                      
//                       // 3. Validate due date (must be future date)
//                       function validateDueDate(date) {
//                         // Your code here
//                       }

export function validateTitle(title) {
    if (typeof title !== 'string' || title.trim().length < 3) {
        return false;
    }       
    return true;
}   
export function validatePriority(priority) {
    const validPriorities = ['low', 'medium', 'high'];
    return validPriorities.includes(priority.toLowerCase());
}       
export function validateDueDate(date) {
    const dueDate = new Date(date);
    const now = new Date();
    return dueDate > now;
}       

    //erport { validateTitle, validatePriority, validateDueDate };