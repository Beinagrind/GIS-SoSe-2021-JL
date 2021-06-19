"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mememory = void 0;
const Http = require("http");
var mememory;
(function (mememory) {
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
    async function handleRequest(_request, _response) {
        console.log("This request will be executed");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
    }
})(mememory = exports.mememory || (exports.mememory = {}));
//# sourceMappingURL=server.js.map