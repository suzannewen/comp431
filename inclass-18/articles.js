// const helloUser = (req, res) => {
//   const user = req.params.user || 'Somebody'
//   res.send('Hello ' + user + '!')
// }

// module.exports = (app) => {
//   app.get('/:user*?', helloUser)
// }

const postArticle = (req, res) => {
  res.send({ hello: 'world' })
  console.log("hello")
}

const getArticle = (req, res) => {
  res.send( { articles: [ {id: 0, text: 'test1' }, {id: 1, text: 'test2' }, {id: 2, text: 'test3' } ] })
  console.log("hello")
}

module.exports = (app) => {
  app.post('/article', postArticle)
  app.get('/articles', getArticle)
}