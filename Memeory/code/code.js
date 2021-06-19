"use strict";
var mememory;
(function (mememory) {
    if (window.location.href.includes("/auswahl.html")) {
        auswahlSeite();
    }
    if (window.location.href.includes("/spielfeld.html")) {
        spielfeldSeite();
    }
    if (window.location.href.includes("/rangliste.html")) {
        ranglisteSeite();
    }
    async function auswahlSeite() {
        let submit = document.getElementById("start");
        submit.addEventListener("click", sendAuswahl);
        async function sendAuswahl() {
            window.open("../html/spielfeld.html");
            console.log("Starting Game");
        }
    }
    async function spielfeldSeite() {
    }
    async function ranglisteSeite() {
    }
})(mememory || (mememory = {}));
//# sourceMappingURL=code.js.map