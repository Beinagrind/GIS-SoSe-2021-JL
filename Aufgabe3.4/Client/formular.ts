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
        const receivedObj: string = await response.text();

        print(receivedObj);

        function print(_url: string): void {
            serverResponse.innerHTML = _url;
        }
        
        serverResponse.innerHTML = "Printed Database";

    }

    let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login");
    submit.addEventListener("click", sendForm);
    
    let submitjson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("loginjson");
    submitjson.addEventListener("click", sendFormJson);

    interface StringJson {

        [key: string]: string;

    }
}

