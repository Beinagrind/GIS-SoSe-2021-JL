namespace P_3_1Server {

    function getButton(_event: Event): void {

        serverTest("https://beinagrinddrekifurtwangen.herokuapp.com/");

    }

    async function serverTest(_url: RequestInfo): Promise <void> {

        let formData: FormData;
        formData = new FormData(document.forms[0]);

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();

        let response: Response = await fetch(_url, {method: "get"});
        let responseString: string = await response.text();
        console.log(responseString);

        let output: string = "\n";
        for (let entry of query) {
            output += "Name: " + entry[0] + "\nValue: " + entry[1] + "\n\n";
            console.log(entry);
        }
        console.log(output);
    }

    let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
    submit.addEventListener("click", getButton);

}