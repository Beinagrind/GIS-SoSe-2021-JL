"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    let formData;
    let submit = document.getElementById("get");
    submit.addEventListener("click", getButton);
    function getButton(_event) {
        serverTest("https://gis-sose-2021-jl.herokuapp.com/");
    }
    async function serverTest(_url) {
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url, { method: "get" });
        let responseString = await response.text();
        console.log(responseString);
    }
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=formular.js.map