### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  
  Use async and await to manage code in Javascript. JS is synchronous but if we are dealing with AJAX requests, then the request will be waiting and it can take a long time. Asynchronous  callbacks are special because they run after the rest of the code and then execute.

- What is a Promise?

  A promise is a javascript objects that give a onetime guarantee for a future promise or value. You use .then and .catch to access the resolve or rejected value.

- What are the differences between an async function and a regular function?

  Regular functions follow synchronous functions. Asynchronous functions are called last as they run after the rest of the code and then execute. Also regular functions follow the callback pattern which can be tedious. Asynchronous functions is alot cleaner than regular functions, which has a nice form and easier to work with.

- What is the difference between Node.js and Express.js?

  Node is the python or the backend of Javascript with the use of the JavaScript language. Express is the flask for NodeJS. There is a difference between Express and Flask but does connect to the server.

- What is the error-first callback pattern?

  The callback function's first parameter should be listed as error. Node will supply an error object.

- What is middleware?

  Middleware is a function that get access to req and res. It opens the door for seperating the code into more logical grouping and provides better error handeling.

- What does the `next` function do?

  Next() takes you to the next route. If we pass an argument, it means we are trying to handle an error.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

We should use a try and catch method, in case the user is does not exist. We could
use Promise.all to await multiple resolved promises as to not have the second and third variables await for the first to be resolved.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
  