"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    /*function getButton(_event: Event): void {

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
    }*/
    async function nameUPWSend() {
        let formData = new FormData(document.forms[0]);
        console.log(":" + formData.get("name")); //Konsolenausgabe
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]); ///Konsolenausgabe Eingang Stelle 0
            console.log("name: " + entry[1]); //Konsolenausgabe
        }
        let query = new URLSearchParams(formData);
        let _url = "https://beinagrinddrekifurtwangen.herokuapp.com/"; //Verknüpfung mit der herokuapp
        _url = _url + "?" + query.toString(); //Url in String umwandeln
        console.log(_url); //Konsolenausgabe
        let response = await fetch(_url); // auf url warten
        let antwort = await response.text(); //Auf die antwort warten
        console.log(antwort);
        let rueckgabe = document.getElementById("serverausgabe"); //Paragraph und id um die Eingaben auf der HTML Site anzeigen zu lassen
        rueckgabe.innerText = antwort;
    }
    /*async function nameUPWSend(): Promise <void> {

        let formData: FormData = new FormData (document.forms[0]);

        formData.append("api-key", "myApiKey");

        for (let key  of  formData.keys()) {

            console.log(key, formData.get(key));

        }

        let _url: RequestInfo = "https://beinagrinddrekifurtwangen.herokuapp.com/";
        let request = new Request(_url, {
            body: formData,
            method: "POST",

        });

        fetch(request)
            .then((res) => res.json())
            .then((data) => {
                console.log("Server Response:");
                console.log(data);
            })
            .catch(console.warn)
        

        function  convert(formData) {

            let obj = {};
            for (let key of  formData.keys()) {
                obj[key] = formData.get
            }

        }

        //console.log(":" + formData.get ("nameInput")); //Konsolenausgabe

        /*for (let entry of formData) {
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
        */
    let button = document.getElementById("login");
    button.addEventListener("click", nameUPWSend);
    //let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
    //submit.addEventListener("click", getButton);
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=formular.js.map