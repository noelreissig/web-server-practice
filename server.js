// 1 - Import Node.js core module and File System module
const http = require("http");
const fs = require("fs");

// 2 - creating server
const server = http.createServer((req, res) => {
  const url = req.url;
  //render the html file

  fs.readFile("different-form-methods.html", (err, html) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("404 Not Found");
    }
    //3 - listen for any incoming requests
    if (url === "/") {
      res.writeHead(200), res.write(html);
    }
    if (url === "/resource-name/new") {
      //do the stuff for GET the form
    }
    if (url === "/resource-name/") {
      //do the stuff for POST the form
    }
    res.end();
  });
});

server.listen(8080);
console.log("Node.js web server at port 8080 is running..");
