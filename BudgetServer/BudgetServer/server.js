'use strict';
var http = require('http');
var User = require("./User.js");
var port = 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var sResponse;
    switch (req.url) {
        case "/Profile":
            var dummy = new User(1, "jason", "test");
            sResponse = "Id = " + dummy.id + "\nName = " + dummy.name + "\nPassword = " + dummy.password;
            break;
        case "/Budget":
            sResponse = "This is your budget plan";
            break;
        default:
            sResponse = "Nothing here";
            break;
    }
    res.write(sResponse);
    res.end();
}).listen(port);
