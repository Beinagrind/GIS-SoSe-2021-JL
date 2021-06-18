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
        clearForm();
    }
    function clearForm() {
        document.getElementsByTagName("input")[0].value = "";
        document.getElementsByTagName("input")[1].value = "";
        document.getElementsByTagName("textarea")[0].value = "";
    }
    async function read(_event) {
        const serverResponse = document.getElementById("abc");
        let url = "";
        console.log("Server wird angefragt");
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
        serverResponse.innerHTML = receivedObj;
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
    async function deleteFormularData() {
        const serverResponse = document.getElementById("abc");
        let url = "";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = "https://beinagrinddrekifurtwangen.herokuapp.com/del" + "?" + query.toString();
        const response = await fetch(url);
        const receivedObj = await response.text();
        print(receivedObj);
        function print(_url) {
            serverResponse.innerHTML = _url;
        }
        serverResponse.innerHTML = "Deleted: " + receivedObj;
        clearForm();
    }
    let submit = document.getElementById("login");
    submit.addEventListener("click", sendForm);
    let readData = document.getElementById("loginJson");
    readData.addEventListener("click", read);
    let deleteData = document.getElementById("deleteData");
    deleteData.addEventListener("click", resetDatabase);
    let deleteOne = document.getElementById("del");
    deleteOne.addEventListener("click", deleteFormularData);
})(P_3_4Server || (P_3_4Server = {}));
//# sourceMappingURL=formular.js.map