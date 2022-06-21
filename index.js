const http = require("http");
const dt = require("./myFirstModule");

console.clear();
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(`<p>the date and time are currently: ${dt.myDateTime()}`)
    res.end("<p>hello world</p>");
  })
  .listen(8080);


console.log("listening on http://localhost:8080");
