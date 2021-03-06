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

        clearForm();

    }

    function clearForm(): void {

        document.getElementsByTagName("input")[0].value = "";
        document.getElementsByTagName("input")[1].value = "";
        document.getElementsByTagName("textarea")[0].value = "";


    }

    async function read(_event: Event): Promise<void> {

        const serverResponse: HTMLElement = document.getElementById("abc");

        let url: string = "";

        console.log("Server wird angefragt");

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
        serverResponse.innerHTML = receivedObj;

    }

    async function resetDatabase(_event: Event): Promise<void> {

        const serverResponse: HTMLElement = document.getElementById("abc");

        let url: string = "";

        url = "https://beinagrinddrekifurtwangen.herokuapp.com/resetDatabase";

        const response: Response = await fetch(url);
        const receivedObj: string = await response.text();

        print(receivedObj);

        function print(_url: string): void {
            serverResponse.innerHTML = _url;
        }
        
        serverResponse.innerHTML = "Deleted Database";

    }


    async function deleteFormularData(): Promise<void> {
        const serverResponse: HTMLElement = document.getElementById("abc");

        let url: string = "";

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url = "https://beinagrinddrekifurtwangen.herokuapp.com/del"  + "?" + query.toString();

        const response: Response = await fetch(url);
        const receivedObj: string = await response.text();

        print(receivedObj);

        function print(_url: string): void {
            serverResponse.innerHTML = _url;
        }
        
        serverResponse.innerHTML = "Deleted: " + receivedObj;

        clearForm();

    }

    let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login");
    submit.addEventListener("click", sendForm);
    
    let readData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("loginJson");
    readData.addEventListener("click", read);

    let deleteData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("deleteData");
    deleteData.addEventListener("click", resetDatabase);

    let deleteOne: HTMLButtonElement = <HTMLButtonElement>document.getElementById("del");
    deleteOne.addEventListener("click", deleteFormularData);


}

