"use strict";
var P_3_1Server;
(function (P_3_1Server) {
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
            output += "Name: " + entry[0] + "\nValue: " + entry[1] + "\n\n";
            console.log(entry);
        }
        console.log(output);
    }
    async function nameUPWSend() {
        let formData = new FormData(document.forms[0]);
        //console.log(":" + formData.get ("nameInput")); //Konsolenausgabe
        for (let entry of formData) {
            console.log(entry);
            console.log("Name: " + entry[0]); ///Konsolenausgabe Eingang Stelle 0
            console.log("Passwort: " + entry[1]); //Konsolenausgabe
        }
        let query = new URLSearchParams(formData);
        let _url = "https://beinagrinddrekifurtwangen.herokuapp.com/"; //Verknüpfung mit der herokuapp
        _url = _url + "?" + query.toString(); //Url in String umwandeln
        let response = await fetch(_url); // auf url warten
        let antwort = await response.text(); //Auf die antwort warten
        console.log(antwort);
        let rueckgabe = document.getElementById("erfolgreich"); //Paragraph und id um die Eingaben auf der HTML Site anzeigen zu lassen
        rueckgabe.innerText = antwort;
    }
    let button = document.getElementById("login");
    button.addEventListener("click", nameUPWSend);
    let submit = document.getElementById("get");
    submit.addEventListener("click", getButton);
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=formular.js.map