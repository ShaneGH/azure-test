
"use strict";

var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, world    XXXX!');
    
}).listen(process.env.PORT || 8080);