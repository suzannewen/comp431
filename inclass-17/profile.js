
const index = (req, res) => {
     res.send({ hello: 'world' })
}

const getHeadline = (req, res) => {
     res.send({ headlines: [{username: 'Scott', status: 'Happy' }]})
}

const getEmail = (req, res) => {
     res.send({ username: 'Suzanne', email: 'email' })
}

const getEmailUser = (req, res) => {
     res.send({ username: 'user', email: 'emailAddress' })
}

const getZipcode = (req, res) => {
     res.send({ username: 'Suzanne', zipcode: '76016' })
}

const getZipcodeUser = (req, res) => {
     res.send({ username: 'user', zipcode: 'emailAddress' })
}

const getAvatar = (req, res) => {
     res.send({ username: 'Suzanne', avatar: 'picture' })
}

module.exports = app => {
     app.get('/', index)
     app.get('/headlines', getHeadline)
     app.get('/email', getEmail)
     app.get('/zipcode', getZipcode)
     app.get('/avatar', getAvatar)

     app.get('/headlines/:user?', getHeadline)
     app.get('/email/:user?', getEmailUser)
     app.get('/zipcode/:user?', getZipcodeUser)
     app.get('/avatar/:user?', getAvatar)
}
