"use strict";
var P_3_2Server;
(function (P_3_2Server) {
    let formData;
    async function sendForm(_event) {
        const serverResponse = document.getElementById("abc");
        let url = "";
        console.log("Sending HTML to Server");
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = "https://beinagrinddrekifurtwangen.herokuapp.com/html" + "?" + query.toString();
        const response = await fetch(url);
        const respString = await response.text();
        print(respString);
        function print(_url) {
            serverResponse.className = "response";
            serverResponse.innerHTML = _url;
        }
    }
    async function sendFormJson(_event) {
        const serverResponse = document.getElementById("abc");
        let url = "";
        console.log("Sending JSON to Server");
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = "https://beinagrinddrekifurtwangen.herokuapp.com/json" + "?" + query.toString();
        const response = await fetch(url);
        const receivedObj = await response.json();
        console.log(receivedObj);
    }
    let submit = document.getElementById("login");
    submit.addEventListener("click", sendForm);
    let submitjson = document.getElementById("loginjson");
    submitjson.addEventListener("click", sendFormJson);
})(P_3_2Server || (P_3_2Server = {}));
// ONLY UNUSED TESTCODE //
/*function getButton(_event: Event): void {

        serverTest("https://beinagrinddrekifurtwangen.herokuapp.com/");

    }

    async function serverTest(_url: RequestInfo): Promise <void> {
       
        formData = new FormData(document.forms[0]);

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();

        let response: Response = await fetch(_url, {method: "get"});
        let responseString: string = await response.text();
        console.log(responseString);

        let output: string = "\n";
        for (let entry of query) {
            output +=  "\n Sent to server: " + entry[1] + "\n";
            console.log(entry);
        }
        console.log(output);

        let auswahl: HTMLElement = document.getElementById("ausgewaehlt");
        auswahl.innerHTML = output;
    }

    //let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login");
    //submit.addEventListener("click", getButton);

        //let response: Response = await fetch("https://beinagrinddrekifurtwangen.herokuapp.com/" + query.toString());

        //let responseText: string = await response.text();

        //let output: string = await response.text();

        //for (let entry of query) {
        //   output +=  "\n Sent to server: " + entry[1] + "\n";
        //    console.log(entry);
        //}

        //let auswahl: HTMLElement = document.getElementById("abc");
        //auswahl.innerHTML = output;

    /*async function sendDataHTML(): Promise<void> { //async Funktion für html
        let rueckgabe: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("abc");
        let formData: FormData = new FormData (document.forms[0]); //generiert FormData Ohjekt aus <form> in das Dokument
        let url: RequestInfo = "https://beinagrinddrekifurtwangen.herokuapp.com/"; //Verknüpfung mit der herokuapp
        url += "/html";
        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let response: Response = await fetch (url); // auf url warten
        let responseText: string = await response.text(); //
        rueckgabe.innerText = responseText;
    }
    */
//# sourceMappingURL=formular.js.map