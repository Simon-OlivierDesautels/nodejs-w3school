var http = require("http");
const url = require("url");

//create a server object:
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    let q = url.parse(req.url,true).query;
    let txt = q.year + " " + q.month;
    res.end(txt); //end the response
  })
  .listen(8080); //the server object listens on port 8080
