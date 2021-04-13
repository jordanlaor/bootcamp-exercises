const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function (req, res) {
  console.log(req.method);
  if (req.method === "GET")
    switch (req.url) {
      case "/":
      case "/index.html":
        fs.readFile("./index.html", (error, content) => {
          if (content) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          } else {
            res.writeHead(500);
            res.end("Sorry, check with the site admin for error: " + error.code + " ..\n");
          }
        });

        break;
      case "/index.css":
        fs.readFile("./index.css", (error, content) => {
          if (content) {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(content, "utf-8");
          } else {
            res.writeHead(500);
            res.end("Sorry, check with the site admin for error: " + error.code + " ..\n");
          }
        });

        break;
      case "/raw-html":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Raw HTML Page</h1>", "utf-8");

        break;
      case "/users":
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify([
            { name: "jordy", age: 24 },
            { name: "yaniv", age: 23 },
            { name: "tamer", age: 21 },
          ]),
          "utf-8"
        );

        break;

      default:
        res.writeHead(404);
        res.end("404");
        break;
    }
  else {
    res.writeHead(405);
    res.end("You can only do GET reqs");
  }
  // mimeTypes = {
  //   ".html": "text/html",
  //   ".js": "text/javascript",
  //   ".css": "text/css",
  //   ".json": "application/json",
  //   ".png": "image/png",
  //   ".jpg": "image/jpg",
  //   ".gif": "image/gif",
  //   ".svg": "image/svg+xml",
  //   ".wav": "audio/wav",
  //   ".mp4": "video/mp4",
  //   ".woff": "application/font-woff",
  //   ".ttf": "application/font-ttf",
  //   ".eot": "application/vnd.ms-fontobject",
  //   ".otf": "application/font-otf",
  //   ".wasm": "application/wasm",
  // };
});
server.listen(1337);
