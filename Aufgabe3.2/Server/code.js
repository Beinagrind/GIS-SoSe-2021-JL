"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_2Server;
(function (P_3_2Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("\n");
        console.log("\n");
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            const reqeustUrl = _request.url;
            const urlSlash = Url.parse(reqeustUrl, true);
            if (urlSlash.pathname == "/json") {
                _response.setHeader("content-type", "application/json");
                _response.write(JSON.stringify(urlSlash.query));
            }
            else {
                _response.write("<p>" + " Ihre Eingaben, vom Server zurückgesendet: " + "</p>");
                for (let key in urlSlash.query) {
                    _response.write("<p>" + key + ": " + urlSlash.query[key] + "</p>");
                }
            }
        }
        _response.end();
    }
})(P_3_2Server = exports.P_3_2Server || (exports.P_3_2Server = {}));
//# sourceMappingURL=code.js.map