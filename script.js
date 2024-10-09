function syncFunction() {
  console.log("1. This is a synchronous function");
}

function asyncFunction() {
  setTimeout(() => {
    console.log("3. This is an asynchronous function");
  }, 1000); // 1 second delay
}

async function asyncAwaitFunction() {
  console.log("4. Before async/await");
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 second delay
  console.log("5. After async/await");
}

console.log("2. Start");

syncFunction(); // Synchronous function, runs immediately
asyncFunction(); // Asynchronous function, scheduled to run after 1 second
asyncAwaitFunction(); // Async/Await function, pauses at 'await'

console.log("6. End");

/* Expected Output */

// 2. Start
// 1. This is a synchronous function
// 6. End
// 3. This is an asynchronous function  (after 1 second)
// 4. Before async/await
// 5. After async/await  (after 2 seconds)
