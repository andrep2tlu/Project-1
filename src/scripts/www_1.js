const http   = require("http");
const fs     = require("fs");
const url    = require("url");
const path   = require("path");
const PORT   = 5427;

const extensions = {
  ".html": "text/html",
  ".css":  "text/css",
  ".js":   "application/javascript",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png":  "image/png",
  ".gif":  "image/gif",
  ".webp": "image/webp"
};

// join url prefixes
const baseDirs = {
  "/scripts/": path.join(__dirname, "../scripts"),
  "/forms/":   path.join(__dirname, "../forms"),
  "/img/":     path.join(__dirname, "../img"),

  // to set it as root
  "/html/":    path.join(__dirname, "../html"),
  "/":         path.join(__dirname, "../html")
};

http.createServer((req, res) => {
   const start = process.hrtime.bigint();
  let { pathname } = url.parse(req.url, true);
  console.log("Request for:", pathname);

  // Rewrite index to root, otherwise broken
  if (pathname.startsWith("/index")) {
    pathname = pathname.replace(/^\/index(?:\/|$)/, "/");
    console.log("Rewritten to root index:", pathname);
  }
  res.on("finish", () => {
    const diffNs = process.hrtime.bigint() - start;
    const elapsedMs = Number(diffNs / 1000000n);
    console.log(`Handled ${req.url} in ${elapsedMs}ms`);
  });
  // Select baseDir + relativePath
  let baseDir      = baseDirs["/"];
  let relativePath = pathname;
  const prefixes   = Object.keys(baseDirs).sort((a, b) => b.length - a.length);

  for (const prefix of prefixes) {
    if (prefix !== "/" && pathname.startsWith(prefix)) {
      baseDir      = baseDirs[prefix];
      relativePath = pathname.slice(prefix.length);
      console.log("Matched prefix", prefix, "→", baseDir, relativePath);
      break;
    }
  }

  // remove trailing slash
  if (relativePath === pathname && pathname.startsWith("/")) {
    relativePath = pathname.slice(1);
  }

  // if still slash set it as root
  if (relativePath === "" || relativePath.endsWith("/")) {
    relativePath += "index.html";
  }

  // Sanitize and build final path
  const safePath    = path.normalize(relativePath).replace(/^([\/\\])+/, "");
  const filePath    = path.join(baseDir, safePath);
  const ext         = path.extname(filePath);
  const contentType = extensions[ext] || "application/octet-stream";

  // Security check
  const resolvedBase = path.resolve(baseDir) + path.sep;
  const resolvedFile = path.resolve(filePath);
  if (!resolvedFile.startsWith(resolvedBase)) {
    res.writeHead(403);
    return res.end("403 Forbidden");
  }

  // Read & serve
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log("File error:", err.message);
      res.writeHead(404);
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
})
.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});
console.log("Version 0.1");