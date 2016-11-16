var redis = require('redis').createClient('redis://h:p22it5ennqcj5912vjo7tnq9k11@ec2-54-221-238-190.compute-1.amazonaws.com:10729')
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

const redisLogin = (req, res) => {
  const username = req.body.username
  const password = req.body.password

  redis.set(password, username)
  redis.get(password, function(err, username) {
    console.log(password + " mapped to "+ username)
  })

  res.send({username: username, result: "success"})
}

module.exports = (app) => {
  app.post('/register', register)
  app.post('/login', redisLogin)
}