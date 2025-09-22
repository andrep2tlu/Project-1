const http = require("http");
const fs = require("fs");
const PORT = 5128;
const extenstions = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif"
};

http.createServer(function(req, res){
    const filePath = req.url === "/" ? "index.html" : req.url.slice(1);
    const ext = "." + filePath.split(".").pop(); // get the extension
    const contentType = extenstions[ext]; //vaata kas extension on


    fs.readFile(filePath, (err, data) => {
        if (err) {
        console.log(err + " error")
        res.end("Error");
        } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
        }
    });
}).listen(PORT);

console.log("Port:" + PORT);