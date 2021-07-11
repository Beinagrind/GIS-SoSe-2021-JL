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
                console.log("Data inserted");
                orders.insertOne(_url.query);
                console.log(_url.query.body);
            }
            if (_url.pathname == "/deleteHighscores") {
                orders.drop();
                _response.write("Database Cleared");
            }
            if (_url.pathname == "/readData") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                _response.setHeader("Access-Control-Allow-Origin", "*");
                let dataSearch = orders.find({}).sort({ "playerTime": 1 });
                let dataFiles = await dataSearch.toArray();
                _response.write(JSON.stringify(dataFiles));
                console.log("data recieved");
            }
            if (_url.pathname == "/costum") {
                console.log("Cards inserted");
                ordersCostum.insertOne(_url.query);
                console.log(_url.query.body);
            }
            if (_url.pathname == "/delete") {
                ordersCostum.drop();
                console.log("Cards deleted");
            }
            if (_url.pathname == "/readCardSet") {
                _response.setHeader("content-type", "text/html; charset=utf-8");
                _response.setHeader("Access-Control-Allow-Origin", "*");
                let dataSearch = ordersCostum.find();
                let dataFiles = await dataSearch.toArray();
                _response.write(JSON.stringify(dataFiles));
                console.log("data recieved");
            }
            _response.end();
        }
    }
})(mememory = exports.mememory || (exports.mememory = {}));
//# sourceMappingURL=server.js.map