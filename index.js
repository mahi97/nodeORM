var http = require('http');
var url  = require('url');
var fs   = require('fs');
// http://127.0.0.1:8080/save?username=imah&password=adsfasdf&firstname=madsfuh&lastname=sdajkfh&email=mohammad%40mahdi.com&BD=asdjfkh&tel=dsajkfh&homepage=&age=12&job=adsfjk
http.createServer(function (req, res) {
  var u = url.parse(req.url, true);
  console.log();
  if (u.pathname == '/save') {
    var q = u.query;
    console.log(q);
    res.end();
  } else {

    fs.readFile("./index.html", function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
}).listen(8080);
