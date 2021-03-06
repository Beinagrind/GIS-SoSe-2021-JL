"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    function getButton(_event) {
        serverTest("https://beinagrinddrekifurtwangen.herokuapp.com/");
    }
    async function serverTest(_url) {
        let formData = new FormData(document.forms[0]);
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
    let submit = document.getElementById("login");
    submit.addEventListener("click", getButton);
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=formular.js.map