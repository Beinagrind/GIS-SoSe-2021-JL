import * as Http from "http";
import * as Url from "url";
import * as  Mongo from "mongodb";

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

        const reqeustUrl: string = _request.url;
        const _url: Url.UrlWithParsedQuery = Url.parse(reqeustUrl, true);

        //Mongo connect
        
        let mongoURL: string = "mongodb+srv://userLudwig:userPassword@gis-jl.4mqvc.mongodb.net/Memeory?retryWrites=true&w=majority";
        let options: Mongo.MongoClientOptions = {useNewUrlParser:  true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(mongoURL, options);
        await mongoClient.connect();

        let orders: Mongo.Collection = mongoClient.db("Memeory").collection("memeoryCollection");

        
        let jsonString: string = JSON.stringify(_url.query);
        _response.write(jsonString);
        
        orders.insert(_url.query);

    }
    
    interface HighscoreData {

        spielerName: string;
        spielerZeit: number;

    }
}
