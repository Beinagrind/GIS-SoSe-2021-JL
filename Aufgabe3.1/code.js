"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT); //Server Port wird erstellt
    // 8100 wird der Port wenn kein anderer vorhanden
    if (!port)
        port = 8100;
    //Server selbst wird erstellt    
    let server = Http.createServer();
    server.addListener("request", handleRequest); //neuer Listener, funktion handle request wird ausgeführt wenn der server einen request erhält
    server.addListener("listening", handleListen); //neuer Listener,  funktion handleListen wird gestartet
    server.listen(port); //Server wird auf den Port gestartet
    //funktion wird ausgeführt, wenn der Server auf eine Anweisung reagiert, und "Listening" in der Konsole ausgegeben
    function handleListen() {
        console.log("Listening");
    }
    //funktion wird ausgeführt, wenn der Server eine Anfrage erhält
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolenausgabe sobald request an den Server gesendet wird
        _response.setHeader("content-type", "text/html; charset=utf-8"); //HTML Eigenschaften werden festgelegt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //legt fest wer auf den Server zugreifen darf
        _response.write(_request.url); //Die URL wird in die Antwort geschrieben
        _response.end(); //Response wird beendet und zurückgeschickt
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=code.js.map