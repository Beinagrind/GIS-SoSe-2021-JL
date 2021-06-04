import * as Http from "http";
import * as Url from "url";

export namespace P_3_2Server {

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

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

        console.log("\n");
        console.log("\n");
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {

            const reqeustUrl: string = _request.url;
            const urlSlash: Url.UrlWithParsedQuery = Url.parse(reqeustUrl, true);

            if (urlSlash.pathname == "/json") {

                _response.setHeader("content-type", "text/json; charset=utf-8");
                _response.write(JSON.stringify(urlSlash.query));

            }

            else {

                _response.write("<p>" + " Ihre Eingaben, vom Server zurückgesendet: " + "</p>");

                for (let key in urlSlash.query) {

                    _response.write("<p>" + key + ": " + urlSlash.query[key] + "</p>");
                    
                }

            }

        }

        _response.end();
        
    }

}  
