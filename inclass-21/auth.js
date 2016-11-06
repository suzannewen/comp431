const md5 = require('md5');
const cookieParser = require('cookie-parser');
const User = [];
const cookieKey = 'sid';

const register = (req, res) => {
  const salt = Math.random().toString(36).subString(10);
  const hash = md5(req.body.password + salt);
  User.push({ 
      'username': req.body.username,
      'salt': salt,
      'hash': md5(req.body.username + hash)
  });

  res.send("You have registered successfully!");
}

const loginUser = (req, res) => {
  const salt = User.find(salt);
  const hash = md5(req.body.password + salt);
  const cookieCode = Math.random().toString(36).subString(10);

  if (User.hash == hash) {
    res.cookie(cookieKey, cookieCode, {maxAge: 3600*1000, httpOnly: true});
    res.send({username: req.body.username, result: "success"});
  }
  else {
    res.sendStatus(401);
  }
}

module.exports = (app) => {
  app.post('/login', login)
  app.post('/register', register)
}