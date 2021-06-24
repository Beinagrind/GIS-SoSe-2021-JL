"use strict";
var mememory;
(function (mememory) {
    if (window.location.href.includes("/auswahl.html")) {
        auswahlSeite();
    }
    if (window.location.href.includes("/spielfeld.html")) {
        spielfeldSeite(localStorage.getItem("cardSet"));
    }
    if (window.location.href.includes("/rangliste.html")) {
        ranglisteSeite();
    }
    async function auswahlSeite() {
        let submit = document.getElementById("start");
        submit.addEventListener("click", sendAuswahl);
        let highscore = document.getElementById("highscore");
        highscore.addEventListener("click", startHighscore);
        async function sendAuswahl() {
            let url = "https://beinagrinddrekifurtwangen.herokuapp.com/startGame";
            //let formData: FormData = new FormData(document.forms[0]);
            //let query: URLSearchParams = new URLSearchParams(<any>formData);
            //const response: Response = await fetch(url);
            //const responseString: string = await response.text();
            localStorage.clear();
            localStorage.setItem("spielerName", JSON.stringify(document.getElementsByTagName("input")[0].value));
            console.log("Starting Game");
            //window.location.assign("../html/spielfeld.html");
            let radio1 = document.getElementById("memesTemplate");
            let radio2 = document.getElementById("ahegaoTemplate");
            let radio3 = document.getElementById("programmersArtTemplate");
            if (radio1.checked == true) {
                localStorage.setItem("cardSet", "oldschoolMemesCards");
            }
            if (radio2.checked == true) {
                localStorage.setItem("cardSet", "ahegaoCards");
            }
            if (radio3.checked == true) {
                localStorage.setItem("cardSet", "programmersArtCards");
            }
            spielfeldSeite(localStorage.getItem("cardSet"));
        }
        function startHighscore() {
            window.location.assign("../html/rangliste.html");
        }
    }
    async function spielfeldSeite(formular) {
        window.open("../html/spielfeld.html");
        console.log(formular + " :selected");
        //umgedrehte karten zählen counter 1 hoch, spielende wenn counter auf 16
        let spielerName = document.getElementById("playerNameShown");
        spielerName.innerHTML = localStorage.getItem("spielerName");
        console.log("Game Starting");
        let cardSet = "";
        if (formular == "oldschoolMemesCards") {
            cardSet = "set1data.json";
        }
        if (formular == "ahegaoCards") {
            cardSet = "set2data.json";
        }
        if (formular == "programmersArtCards") {
            cardSet = "set3data.json";
        }
        async function createPlayspace(_url) {
            let antwort = await fetch(_url);
            let cards = await antwort.json();
            console.log(cards);
            for (let arrayI in cards.cards1) {
                let imageTest = cards.cards1[arrayI].image;
                console.log(imageTest);
                let playspace = document.getElementById("playspace");
                let cardDiv = document.createElement("div");
                let cardBack = document.createElement("img");
                let cardFront = document.createElement("img");
                let pathString = (cards.cards1[arrayI].image);
                console.log(pathString);
                cardFront.src = "../Bilder/front.png";
                cardBack.src = pathString;
                console.log(cardBack);
                cardDiv.appendChild(cardBack);
                cardDiv.appendChild(cardFront);
                playspace.appendChild(cardDiv);
            }
        }
        createPlayspace("https://Beinagrind.github.io/GIS-SoSe-2021-JL/Memeory/data/" + cardSet);
    }
    async function ranglisteSeite() {
    }
})(mememory || (mememory = {}));
//# sourceMappingURL=code.js.map