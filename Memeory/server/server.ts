import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace mememory {

    console.log("Starting server");
    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;
   
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {

        console.log("Listening");

    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        console.log("This request will be executed");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {

            const reqeustUrl: string = _request.url;
            const _url: Url.UrlWithParsedQuery = Url.parse(reqeustUrl, true);

            let mongoURL: string = "mongodb+srv://userLudwig:userPassword@gis-jl.4mqvc.mongodb.net/Memeory?retryWrites=true&w=majority";

            let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
            let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(mongoURL, options);
            await mongoClient.connect();

            let orders: Mongo.Collection = mongoClient.db("Memeory").collection("memeoryCollection");
            let ordersCostum: Mongo.Collection = mongoClient.db("Memeory").collection("costum");
         
            if (_url.pathname == "/playerTime") {

                console.log("Data inserted");

                orders.insertOne(_url.query);

                console.log(_url.query.body);

            }

            if (_url.pathname  == "/deleteHighscores") {

                orders.drop();

                _response.write("Database Cleared");

            }

            if (_url.pathname == "/readData") {
                
                _response.setHeader("content-type", "text/html; charset=utf-8");
                _response.setHeader("Access-Control-Allow-Origin", "*");

                let dataSearch: Mongo.Cursor = orders.find().sort( {"palyerTime": 1} );
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

                let dataSearch: Mongo.Cursor = orders.find();
                let dataFiles = await dataSearch.toArray();
            
                _response.write(JSON.stringify(dataFiles));

                console.log("data recieved");

            }


            _response.end();
            
        }
    }

}
