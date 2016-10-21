
const index = (req, res) => {
     res.send({ hello: 'world' })
}

const getHeadline = (req, res) => {
     res.send({ headlines: [{username: Scott, status: Happy }]})
}

const getEmail = (req, res) => {
     res.send({ username: Suzanne, email: suz.wen@yahoo.com })
}

const getZipcode = (req, res) => {
     res.send({ username: Suzanne, zipcode: 76016 })
}

const getAvatar = (req, res) => {
     res.send({ username: Suzanne, avatar: picture })
}

module.exports = app => {
     app.get('/', index)
     app.get('/headlines', getHeadline)
     app.get('/email', getEmail)
     app.get('/zipcode', getZipcode)
     app.get('/avatar', getAvatar)
}
