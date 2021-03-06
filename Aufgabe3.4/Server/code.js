"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_4Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var P_3_4Server;
(function (P_3_4Server) {
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
        console.log("\n");
        console.log("\n");
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            const reqeustUrl = _request.url;
            const urlSlash = Url.parse(reqeustUrl, true);
            let mongoURL = "mongodb+srv://userLudwig:userPassword@gis-jl.4mqvc.mongodb.net/Test?retryWrites=true&w=majority";
            let options = { useNewUrlParser: true, useUnifiedTopology: true };
            let mongoClient = new Mongo.MongoClient(mongoURL, options);
            await mongoClient.connect();
            let orders = mongoClient.db("Test").collection("Students");
            if (urlSlash.pathname == "/readData") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                _response.setHeader("Access.Control-Allow-Origin", "*");
                let dataSearch = orders.find();
                let dataFiles = await dataSearch.toArray();
                _response.write(JSON.stringify(dataFiles));
            }
            if (urlSlash.pathname == "/dataAdd") {
                _response.write("<p>" + " Ihre Eingaben, vom Server zurückgesendet: " + "</p>");
                for (let key in urlSlash.query) {
                    _response.write("<p>" + key + ": " + urlSlash.query[key] + "</p>");
                }
                let jsonString = JSON.stringify(urlSlash.query);
                _response.write(jsonString);
                orders.insert(urlSlash.query);
                orders.find();
            }
            if (urlSlash.pathname == "/resetDatabase") {
                orders.drop();
                _response.write("Database Cleared");
            }
            if (urlSlash.pathname == "/del") {
                let url = Url.parse(_request.url, true);
                let jsonString = JSON.stringify(urlSlash.query);
                _response.write(jsonString);
                await orders.deleteOne({ "Name": url.query.Name, "Passwort": url.query.Passwort });
            }
        }
        _response.end();
    }
})(P_3_4Server = exports.P_3_4Server || (exports.P_3_4Server = {}));
//# sourceMappingURL=code.js.map