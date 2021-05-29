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
            output += "Name: " + entry[0] + "\nValue: " + entry[1] + "\n\n";
            console.log(entry);
        }
        console.log(output);
    }

    async function nameUPWSend(): Promise <void> {

        let formData: FormData = new FormData (document.forms[0]);
        //console.log(":" + formData.get ("nameInput")); //Konsolenausgabe

        for (let entry of formData) {
            console.log(entry);
            console.log("Name: " + entry[0]); ///Konsolenausgabe Eingang Stelle 0
            console.log("Passwort: " + entry[1]); //Konsolenausgabe
        }

        let  query: URLSearchParams = new URLSearchParams(<any> formData);
        let _url: RequestInfo = "https://beinagrinddrekifurtwangen.herokuapp.com/"; //Verknüpfung mit der herokuapp
        _url = _url + "?" + query.toString(); //Url in String umwandeln

        let response: Response = await fetch (_url); // auf url warten
        let antwort: string = await response.text(); //Auf die antwort warten
        console.log (antwort); 

        let rueckgabe: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("erfolgreich"); //Paragraph und id um die Eingaben auf der HTML Site anzeigen zu lassen
        rueckgabe.innerText = antwort; 

    }

    let button: HTMLButtonElement = <HTMLButtonElement> document.getElementById("login"); 
    button.addEventListener("click", nameUPWSend);

    let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
    submit.addEventListener("click", getButton);

}