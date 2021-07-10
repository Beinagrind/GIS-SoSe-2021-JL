"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mememory = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
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
        if (_request.url) {
            const reqeustUrl = _request.url;
            const _url = Url.parse(reqeustUrl, true);
            let mongoURL = "mongodb+srv://userLudwig:userPassword@gis-jl.4mqvc.mongodb.net/Memeory?retryWrites=true&w=majority";
            let options = { useNewUrlParser: true, useUnifiedTopology: true };
            let mongoClient = new Mongo.MongoClient(mongoURL, options);
            await mongoClient.connect();
            let orders = mongoClient.db("Memeory").collection("memeoryCollection");
            let ordersCostum = mongoClient.db("Memeory").collection("costum");
            if (_url.pathname == "/playerTime") {
                let url = Url.parse(_request.url, true);
                console.log("Data inserted");
                //send data to MongoDB
                let userData = JSON.stringify(_url.query);
                orders.insertOne(_url.query);
            }
            if (_url.pathname == "/deleteHighscores") {
                orders.drop();
                _response.write("Database Cleared");
            }
            if (_url.pathname == "/readData") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                _response.setHeader("Access-Control-Allow-Origin", "*");
                let dataSearch = orders.find();
                let dataFiles = await dataSearch.toArray();
                _response.write(JSON.stringify(dataFiles));
                console.log("data recieved");
            }
            if (_url.pathname == "/costum") {
            }
            _response.end();
        }
    }
})(mememory = exports.mememory || (exports.mememory = {}));
//# sourceMappingURL=server.js.map