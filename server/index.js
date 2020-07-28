const express = require('express');
const ctrl = require('./controller');
const app = express();

app.use(express.json());

const port = 4040;

app.get('/api/todos', ctrl.getTodos)
app.get('/api/todo-by-user', ctrl.getTodoByUser)
//don't have to be as careful with name below. Notice it's todo b/c it's dealing with one post.
app.post('/api/todo', ctrl.postTodo)
app.delete('/api/todo/:id', ctrl.deleteTodo)
app.put('/api/todo/complete/:id', ctrl.completeTodo)
app.put('/api/todo/title/:id', ctrl.updateTodoTitle)
//You don't have to alter url for query in server (yes in axios front-end)




app.listen(port, () => console.log(`I'll be right by your side, running on port ${port}`))



//npm init -y
//npm install express (will install dependencies and node modules)
//change the file path of index.js in the package.json file
//.gitignore - include node_modules
//require express
//require json file
//const app = express()
//app.use(express.json()); is important. top level middleware - runs each time request is made.
//const port
//app.listen at the bottom
//endpoints in between. order matters.

//app.get(`${url}`, ctrl. getStuff) Could use this instead of the endpoints above if you declare const url = "/api/todos" etc.