# JavaScript Sync, Async, and Async/Await Demo

This repository contains a simple JavaScript code example demonstrating the differences between **synchronous**, **asynchronous**, and **async/await** behavior. It helps to illustrate how JavaScript handles different types of code execution flows.

## Concepts Covered:

### 1. **Synchronous Execution**:
- Synchronous code is executed **line by line**, meaning that each operation must complete before the next one can begin.
- The program waits for each line to finish before moving on, making it predictable but potentially blocking if a task takes a long time to complete.
  
Example: 
```javascript
function syncFunction() {
  console.log("This is a synchronous function");
}
```

### 2. **Asynchronous Execution**:
- Asynchronous code allows tasks to be performed **in the background**, letting the rest of the program continue executing without waiting for the task to finish.
- It's useful for tasks like network requests or timers, where blocking the main thread would be inefficient.

Example: 
```javascript
function asyncFunction() {
  setTimeout(() => {
    console.log("This is an asynchronous function");
  }, 1000);  // 1 second delay
}
```

### 3. **Async/Await**:
- `async` and `await` provide a cleaner, more readable way to handle asynchronous operations.
- An `async` function always returns a promise, and `await` pauses the execution inside the `async` function until the promise resolves.
- This allows for a sequential flow of code, even when handling asynchronous tasks, making it easier to manage complex asynchronous logic.

Example:
```javascript
async function asyncAwaitFunction() {
  console.log("Before async/await");
  await new Promise(resolve => setTimeout(resolve, 2000));  // 2 second delay
  console.log("After async/await");
}
```

## How to Use:
1. Clone this repository.
2. Run the code in a JavaScript environment (such as Node.js or a browser console) to see the execution order of each function.

## Output Explanation:
- The code will print a sequence that shows how synchronous and asynchronous tasks are executed, highlighting when `async` tasks are deferred and when `await` pauses the execution of a function.

This project provides a practical example for anyone learning how JavaScript manages different execution flows, and how to control asynchronous tasks using the `async` and `await` keywords.
