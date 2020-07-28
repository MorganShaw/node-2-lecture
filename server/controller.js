const todos = require('../todos.json');
let id = 11;

module.exports = {
    getTodos: (req, res) => {
        res.status(200).send(todos)
    },
    postTodo: (req, res) => {
        const {userId, title} = req.body;
        let newTodo = {
            id,
            userId,
            title,
            completed: false
        }
        todos.push(newTodo)
        id++
        res.status(200).send(todos)
    },
    deleteTodo: (req, res) => {
        const indexToDelete = todos.findIndex(elem => elem.id === +req.params.id)
        if(indexToDelete === -1) {
            res.status(404).send("Ruh Roh! Didn't find that item.")
        } else {
            todos.splice(indexToDelete, 1)
            res.status(200).send(todos)
        }
    },
    completeTodo: (req, res) => {
        const index = todos.findIndex(elem => elem.id === +req.params.id)
        if(todos[index].completed === true) {
            res.status(405).send('That todo has already been completed!')
        } else {
        todos[index].completed = true;
        res.status(200).send(todos)
        }
    },
    updateTodoTitle: (req, res) => {
        const index = todos.findIndex(elem => elem.id === +req.params.id)
        if(index === -1) {
            res.sendStatus(404)
            //default message for 404
        } else {
            todos[index].title = req.body.title
            res.status(200).send(todos)
        }
    },
    getTodoByUser: (req, res) => {
        const byUser = todos.filter(elem => elem.userId === +req.query.userId)
        if(!byUser.length) {
            res.sendStatus(404)
        } else {
            res.status(200).send(byUser)
        }
    }
}


//We get info from params, query, or body. req.body - we're expecting to receive on the body of our request something.
//In postman - make sure you're in correct tab (params, body..etc). In body, change to raw format, and change text to json.
