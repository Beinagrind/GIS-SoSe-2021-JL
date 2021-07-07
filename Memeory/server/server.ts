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

                //send data to MongoDB
                
                let userData: string = JSON.stringify(_url.query);

                console.log(userData + " in Milliseconds");
                
                orders.insertOne(_url.query);

            }

            if (_url.pathname  == "/deleteHighscores") {

                orders.drop();

                _response.write("Database Cleared");

            }

            if (_url.pathname == "/readData") {

                let dataSearch: Mongo.Cursor = orders.find();
                let dataFiles: HighscoreData[] = await dataSearch.toArray();
            
                _response.write(JSON.stringify(dataFiles));

            }

            if (_url.pathname == "/costum") {

                

            }

            interface HighscoreData {

                spielerName: string;
                spielerZeit: number;
        
            }
            
        }
    }

}
