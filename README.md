# Asynchronous programming in JS
---
## what is synchronous and asynchronous programming?
### Synchronous Programming
- As the name suggests, the tasks under sync. programming will be executed one by one.
- Execution of a task is dependent on the previous task.
- Any error in a task will break the chain of tasks
- In **javascript** tasks are executed **synchronously** by default.

### Asynchronous Programming
- In async. programming tasks are independent of each other.
- Execution of a task is **NOT** dependent on other tasks.
- Javascript use **callback queue** to perform async. tasks.
- There are many ways to perform async programming in js such as:
    - Callbacks
    - Promises
    - `async` and `await` keywords