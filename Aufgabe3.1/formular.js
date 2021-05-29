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
        let ergebnis = document.getElementById("erfolgreich");
        ergebnis.innerHTML = "URL:\n" + _url + "\n\n";
        let output = "\n";
        for (let entry of query) {
            output += "Name: " + entry[0] + "\nValue: " + entry[1] + "\n\n";
            console.log(entry);
        }
        console.log(output);
    }
    let submit = document.getElementById("login");
    submit.addEventListener("click", getButton);
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=formular.js.map