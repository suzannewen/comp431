
const express = require('express')
const bodyParser = require('body-parser')

const addArticle = (req, res) => {
     console.log('Payload received', req.body)    
     res.send(req.body)
}

const getArticles = (req, res) => {
     const payload = { 'articles': [ { id:1, author: 'Scott', body:'A post' }, { id:2, author: 'Suzanne', body:'A post' }, { id:3, author: 'Wen', body:'A post' } ]};
     res.send(JSON.stringify(payload))
}

const hello = (req, res) => res.send({ hello: 'world' })

const app = express()
app.use(bodyParser.json())
app.post('/article', addArticle)
app.get('/', hello)
app.get('/articles', getArticles)

// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
     const addr = server.address()
     console.log(`Server listening at http://${addr.address}:${addr.port}`)
})
