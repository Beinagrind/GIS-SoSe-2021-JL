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

    /* function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        let urlParse: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

        for (let key in urlParse.query) {

            console.log(key +  ": TEST SERVER"  +  urlParse.query[key]);
            _response.write(key +  ":"  +  urlParse.query[key]);

        }
        
        //let jsonString: string = JSON.stringify(urlParse.query);
        //_response.write(jsonString);

        //_response.write(_request.url);

        _response.end();
    } */

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Funktion 
        console.log("I hear voices!"); //Konsolenausgabe
        console.log(_request.url); //Serverausgabe Terminal mit eigener Adresse

        _response.setHeader("content-type", "text/html; charset=utf-8"); //Eigenschaften von HTML
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugriffserlaubnis: * alle dürfen darauf zugreifen
       
        //Aufgabe 3.2
        if (_request.url) {
          let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //umwandlung query in assoziatives Array
          let pathname: string = <string>url.pathname; //pathname in string speichern
          if (pathname == "/json") { //wenn ein json empfangen wird
                let jsonString: string = JSON.stringify(url.query); //wird query in string umgewandelt
                console.log(jsonString); //und in der Konsole ausgegeben
                _response.write(jsonString); // Antwort was zurückgegeben wird -->jsonString
            }
            else if (pathname == "/html") { //wenn /html in der url empfangen wird 
                for (let key in url.query) { //dann Ausgabe der Schlüssel-Wert-Paare
                    _response.write (key + ":" + url.query [key] + "<br/>"); // !!! br noch durch eine Liste ersetzen
                }
            } 
       }
        _response.end(); //Antwort fertig und zurückgeschickt -->beendet
        
    }

}
