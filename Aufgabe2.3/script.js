"use strict";
var Aufgabe_1;
(function (Aufgabe_1) {
    let body = document.body;
    let d1 = document.createElement("div");
    body.appendChild(d1);
    function randomRechteck() {
        let divElement = document.createElement("div");
        d1.appendChild(divElement);
        divElement.innerHTML = "";
        divElement.setAttribute("style", createRechteck());
    }
    function createRechteck() {
        let output = "";
        let rgbFill = "";
        let rgbStroke = "";
        let percentage = 50;
        let margin1 = Math.floor(Math.random() * percentage) + "% ";
        let margin2 = Math.floor(Math.random() * percentage) + "% ";
        let margin3 = Math.floor(Math.random() * percentage) + "% ";
        let margin4 = Math.floor(Math.random() * percentage) + "%;";
        let width = Math.floor(Math.random() * (300)) + "px; ";
        let height = "height: " + Math.floor(Math.random() * (300));
        let border = "; border: " + Math.floor(Math.random() * (20)) + "px solid ";
        rgbFill = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
        rgbStroke = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
        width = Math.floor(Math.random() * (1600 / 2)) + "px; ";
        height = "height: " + Math.floor(Math.random() * (800 / 2));
        output = "position: absolute; overflow: hidden; width: "
            + width + height + "px; background-color: " + rgbFill + border
            + rgbStroke + "; margin: " + margin1 + margin2 + margin3 + margin4;
        return output;
    }
    document.getElementById("randomRectangle").addEventListener("click", randomRechteck);
    document.getElementById("refresh").addEventListener("click", refreshPage);
    function refreshPage() {
        location.reload();
    }
})(Aufgabe_1 || (Aufgabe_1 = {}));
//# sourceMappingURL=script.js.map