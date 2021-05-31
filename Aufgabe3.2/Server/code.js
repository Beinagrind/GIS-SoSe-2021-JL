"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    // 8100 wird der Port wenn kein anderer vorhanden
    if (!port)
        port = 8100;
    //Server selbst wird erstellt    
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    //funktion wird ausgeführt, wenn der Server auf eine Anweisung reagiert
    function handleListen() {
        console.log("Listening");
    }
    //funktion wird ausgeführt, wenn der Server eine Anfrage erhält
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let urlParse = Url.parse(_request.url, true);
        for (let key in urlParse.query) {
            console.log(key + ":" + urlParse.query[key]);
            _response.write(key + ":" + urlParse.query[key]);
        }
        //_response.write(_request.url);
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=code.js.map