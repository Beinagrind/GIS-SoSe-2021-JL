namespace P_3_1Server {

    let formData: FormData;

    function getButton(_event: Event): void {

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

    async function sendForm(_event: Event): Promise<void>  {

        console.log("Sening to Server");

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let response: Response = await fetch("https://beinagrinddrekifurtwangen.herokuapp.com/" + query.toString());
        let responseText: string = await response.text();

        alert(responseText);

    }

    let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login");
    submit.addEventListener("click", sendForm);

}