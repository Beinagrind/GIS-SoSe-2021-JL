namespace P_3_4Server {
 
    async function sendForm(_event: Event): Promise<void>  {

        const serverResponse: HTMLElement = document.getElementById("abc");

        let url: string = "";

        console.log("Sending HTML to Server");

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url = "https://beinagrinddrekifurtwangen.herokuapp.com/dataAdd" + "?" + query.toString();

        const response: Response = await fetch(url);
        const respString: string = await response.text();

        print(respString);

        function print(_url: string): void {
            serverResponse.innerHTML = _url;
        }

        console.log("Text Printet On Website");

    }

    async function sendFormJson(_event: Event): Promise<void> {

        const serverResponse: HTMLElement = document.getElementById("abc");

        let url: string = "";

        console.log("Sending JSON to Server");

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url = "https://beinagrinddrekifurtwangen.herokuapp.com/readData" + "?" + query.toString();

        const response: Response = await fetch(url);
        const receivedObj: StringJson = await response.json();

        console.log(receivedObj);
        
        serverResponse.innerHTML = "JSON CONSOLE OUTPUT";

    }

    let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login");
    submit.addEventListener("click", sendForm);
    
    let submitjson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("loginjson");
    submitjson.addEventListener("click", sendFormJson);

    interface StringJson {

        [key: string]: string;

    }
}

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
