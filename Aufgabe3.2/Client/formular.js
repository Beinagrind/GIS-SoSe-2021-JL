"use strict";
var P_3_2Server;
(function (P_3_2Server) {
    let formData;
    function getButton(_event) {
        serverTest("https://beinagrinddrekifurtwangen.herokuapp.com/");
    }
    async function serverTest(_url) {
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url, { method: "get" });
        let responseString = await response.text();
        console.log(responseString);
        let output = "\n";
        for (let entry of query) {
            output += "\n Sent to server: " + entry[1] + "\n";
            console.log(entry);
        }
        console.log(output);
        let auswahl = document.getElementById("ausgewaehlt");
        auswahl.innerHTML = output;
    }
    //let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login");
    //submit.addEventListener("click", getButton);
    async function sendForm(_event) {
        console.log("Sening to Server");
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let response = await fetch("https://beinagrinddrekifurtwangen.herokuapp.com/" + query.toString());
        //let responseText: string = await response.text();
        let output = await response.text();
        //for (let entry of query) {
        //   output +=  "\n Sent to server: " + entry[1] + "\n";
        //    console.log(entry);
        //}
        let auswahl = document.getElementById("abc");
        auswahl.innerHTML = output;
    }
    async function sendDataHTML() {
        let rueckgabe = document.getElementById("abc");
        let formData = new FormData(document.forms[0]); //generiert FormData Ohjekt aus <form> in das Dokument
        let url = "https://beinagrinddrekifurtwangen.herokuapp.com/"; //Verknüpfung mit der herokuapp
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString(); //Url in String umwandeln
        let response = await fetch(url); // auf url warten
        let responseText = await response.text(); //
        rueckgabe.innerText = responseText;
    }
    let submit = document.getElementById("login");
    submit.addEventListener("click", sendDataHTML);
})(P_3_2Server || (P_3_2Server = {}));
//# sourceMappingURL=formular.js.map