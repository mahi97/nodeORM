var http = require('http');
var url  = require('url');
var fs   = require('fs');
const db = require('./connect');

db.creatTable();
http.createServer(function (req, res) {
  var u = url.parse(req.url, true);
  console.log();
  if (u.pathname == '/save') {
    var q = u.query;

    var result = false;
    console.log(q);
    db.addUser(
      q.firstname,
      q.lastname,
      q.username,
      q.password,
      q.email,
      q.tel,
      q.homepage,
      q.age,
      q.job,
      function(e) {
        console.log("USER FAILD");
      });
      fs.readFile("./save.html", function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });

  } else {

    fs.readFile("./index.html", function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
}).listen(8080);
