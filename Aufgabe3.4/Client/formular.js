"use strict";
var P_3_4Server;
(function (P_3_4Server) {
    async function sendForm(_event) {
        const serverResponse = document.getElementById("abc");
        let url = "";
        console.log("Sending HTML to Server");
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = "https://beinagrinddrekifurtwangen.herokuapp.com/dataAdd" + "?" + query.toString();
        const response = await fetch(url);
        const respString = await response.text();
        print(respString);
        function print(_url) {
            serverResponse.innerHTML = _url;
        }
        console.log("Text Printet On Website");
    }
    async function read(_event) {
        const serverResponse = document.getElementById("abc");
        let url = "";
        console.log("Sending JSON to Server");
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = "https://beinagrinddrekifurtwangen.herokuapp.com/readData" + "?" + query.toString();
        const response = await fetch(url);
        const receivedObj = await response.text();
        print(receivedObj);
        function print(_url) {
            serverResponse.innerHTML = _url;
        }
        serverResponse.innerHTML = "Printed Database";
    }
    async function resetDatabase(_event) {
        const serverResponse = document.getElementById("abc");
        let url = "";
        url = "https://beinagrinddrekifurtwangen.herokuapp.com/resetDatabase";
        const response = await fetch(url);
        const receivedObj = await response.text();
        print(receivedObj);
        function print(_url) {
            serverResponse.innerHTML = _url;
        }
        serverResponse.innerHTML = "Deleted Database";
    }
    let submit = document.getElementById("login");
    submit.addEventListener("click", sendForm);
    let readData = document.getElementById("loginjson");
    readData.addEventListener("click", read);
    let deleteData = document.getElementById("deleteData");
    deleteData.addEventListener("click", resetDatabase);
})(P_3_4Server || (P_3_4Server = {}));
//# sourceMappingURL=formular.js.map