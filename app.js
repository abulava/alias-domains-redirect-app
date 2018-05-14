var http = require('http')
var port = process.env.PORT || 3000
var location = process.env.REDIRECT_LOCATION || 'http://lvh.me'

http.createServer(function(req, res) {
  var message = '<html>\n<head><title>301 Moved Permanently</title></head>\n' +
    '<body bgcolor="white">\n<center><h1>301 Moved Permanently</h1></center>\n' +
    '<hr><center>nginx</center>\n</body>\n</html>\n'
  res.writeHead(301, {'Location': location + req.url, 'Content-Type': 'text/html', 'Content-Length': message.length})
  res.write(message)
  res.end()
}).listen(port)
