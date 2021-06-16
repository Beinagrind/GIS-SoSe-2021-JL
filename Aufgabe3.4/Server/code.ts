import * as Http from "http";
import * as Url from "url";
import * as  Mongo from "mongodb";
import { url } from "inspector";

export namespace P_3_4Server {

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

        console.log("\n");
        console.log("\n");
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {

            const reqeustUrl: string = _request.url;
            const urlSlash: Url.UrlWithParsedQuery = Url.parse(reqeustUrl, true);

            let mongoURL = "mongodb+srv://userLudwig:userPassword@gis-jl.4mqvc.mongodb.net/Test?retryWrites=true&w=majority";

            let options: Mongo.MongoClientOptions = {useNewUrlParser:  true, useUnifiedTopology: true};
            let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(mongoURL, options);
            await mongoClient.connect();

            let orders: Mongo.Collection = mongoClient.db("Test").collection("Students");

            if (urlSlash.pathname == "/readData") {

                let dataSearch: Mongo.Cursor = orders.find();
                let dataFiles: Formular[] = await  dataSearch.toArray();
                console.log(dataFiles[2].Name);

                _response.write("Database Antwort");
                _response.write(dataFiles);



            }
            
            else {

                _response.write("<p>" + " Ihre Eingaben, vom Server zurückgesendet: " + "</p>");

                for (let key in urlSlash.query) {

                    _response.write("<p>" + key + ": " + urlSlash.query[key] + "</p>");

                }

                let jsonString: string = JSON.stringify(urlSlash.query);
                _response.write(jsonString);

                orders.insert(urlSlash.query);
                orders.find();
                
            }

        }

        _response.end();

        interface Formular {
            Name: string;
            Passwort: string;
            Nachricht:  string;
        }   
    }

}  
