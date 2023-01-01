// synchronous
// javascript runs from top to bottom
console.log(" I ");
console.log(" eat ");
// asynchronous
// set timeout allows you to run after specific amount of time
// set timeout is an asynchronous function
// asynchronous functions are handled by **callback queue**
setTimeout(()=>{
    console.log(" icecream ");
}, 4000)
console.log(" with ");
console.log(" a ");
console.log(" spoon ");
