const md5 = require('md5')
const cookieParser = require('cookie-parser')
const cookieKey = 'sid'
const UserArray = []

const register = (req, res) => {
  const salt = Math.random().toString(16).substring(10)
  const hash = md5(req.body.password + salt)
  UserArray.push({ 
      'username': req.body.username,
      'salt': salt,
      'hash': hash
  });

  res.send("You have registered successfully!")
}

const login = (req, res) => {
  const findHash = UserArray.find(function(user) {
    if (user.username === req.body.username) {
        const hash = md5(req.body.password + user.salt)
        return user.hash === hash
    }
    else {
        return -1
    }
  })

  if (typeof findHash === 'object') {
    const cookieCode = Math.random().toString(16).substring(10)
    res.cookie(cookieKey, cookieCode, {maxAge: 3600*1000, httpOnly: true})
    res.send({username: req.body.username, result: "success"})
  }
  else {
    res.sendStatus(401)
  }
}

module.exports = (app) => {
  app.post('/register', register)
  app.post('/login', login)
}