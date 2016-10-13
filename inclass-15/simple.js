var http = require('http')

var host = '127.0.0.1'
var port = 3333

http.createServer(preprocess).listen(port, host)
console.log('Server running at http://' + host + ':' + port)

function preprocess(req, res) {
     var body = ''
     req.on('data', function(chunk) {
          body += chunk
     })
     req.on('end', function() {
          req.body = body
          server(req, res)
     })
}

function server(req, res) {
     console.log('Request method        :', req.method)
     console.log('Request URL           :', req.url)
     console.log('Request content-type  :', req.headers['content-type'])
     console.log('Request payload       :', req.body)
  
     switch(req.method) {
     case "GET":
          switch(req.url) {
          case "/":
             var payload = { 'hello': 'world' }
             break;
          case "/articles":
               var payload = { 'articles': [ { id:1, author: 'Scott', body:'A post' }, { id:2, author: 'Suzanne', body:'A post' }, { id:3, author: 'Wen', body:'A post' } ]};
             break;
          default:
             break;
        }
        break;
     case "POST":
             var body = JSON.parse(req.body);
             var payload = { username: body.username, result: 'success' };
             break;
     case "PUT" :
          var payload = "OK";
          break;
     }

     console.log(payload);

     res.setHeader('Content-Type', 'application/json')
     res.statusCode = 200
     res.end(JSON.stringify(payload))
}
