import * as Http from "http";
import * as Url from "url";

export namespace P_3_1Server {

    console.log("Starting server");
    let port: number = Number(process.env.PORT);

    // 8100 wird der Port wenn kein anderer vorhanden
    if (!port)
        port = 8100;

    //Server selbst wird erstellt    
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    //funktion wird ausgeführt, wenn der Server auf eine Anweisung reagiert
    function handleListen(): void {
        console.log("Listening");
    }

    //funktion wird ausgeführt, wenn der Server eine Anfrage erhält
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        let urlParse: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

        for (let key in urlParse.query) {

            console.log(key +  ":"  +  urlParse.query[key]);
            _response.write(key +  ":"  +  urlParse.query[key]);

        }

        //_response.write(_request.url);

        _response.end();
    }
}