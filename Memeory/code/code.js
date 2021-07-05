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
        let timerStart = new Date();
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
                let playspace = document.getElementById("playspace");
                for (let i = 0; i < 3; i++) {
                    let cardDiv = document.createElement("div");
                    let cardBack = document.createElement("img");
                    let cardFront = document.createElement("img");
                    cardDiv.classList.add("gameCards");
                    cardBack.classList.add("cardBack");
                    cardFront.classList.add("cardFront");
                    cardDiv.dataset.whatCard = cards.cards1[arrayI].dataWhatCard;
                    let whatCard = (cards.cards1[arrayI].dataWhatCard);
                    console.log(whatCard);
                    let pathString = (cards.cards1[arrayI].image);
                    console.log(pathString);
                    let value = Math.floor(Math.random() * 16);
                    //cardDiv.style.order = value;
                    cardFront.src = "../Bilder/front.png";
                    cardBack.src = pathString;
                    console.log(cardBack);
                    cardDiv.appendChild(cardBack);
                    cardDiv.appendChild(cardFront);
                    playspace.appendChild(cardDiv);
                    i++;
                }
            }
            const allCards = document.querySelectorAll(".gameCards");
            let hasFlippedCard = false;
            let firstCard;
            let secondCard;
            let noMoreFlips = false;
            localStorage.setItem("turnedCards", "0");
            function cardFlip() {
                if (noMoreFlips)
                    return;
                if (this === firstCard)
                    return;
                console.log("card flipped");
                this.classList.toggle("flipped");
                if (!hasFlippedCard) {
                    hasFlippedCard = true;
                    firstCard = this;
                }
                else {
                    hasFlippedCard = false;
                    secondCard = this;
                    if (firstCard.dataset.whatCard === secondCard.dataset.whatCard) {
                        firstCard.removeEventListener("click", cardFlip);
                        secondCard.removeEventListener("click", cardFlip);
                        let numberOfTurned = localStorage.getItem("turnedCards");
                        numberOfTurned = parseInt(numberOfTurned) + 2;
                        localStorage.setItem("turnedCards", numberOfTurned);
                    }
                    else {
                        noMoreFlips = true;
                        setTimeout(() => {
                            firstCard.classList.toggle("flipped");
                            secondCard.classList.toggle("flipped");
                            noMoreFlips = false;
                        }, 800);
                    }
                }
                let turnedCards = localStorage.getItem("turnedCards");
                console.log(turnedCards);
                if (turnedCards == 16) {
                    gameFinished();
                    console.log("finished");
                }
            }
            function gameFinished() {
                let timerEnd = new Date();
                let timePassed = timerEnd - timerStart;
                let secondsPassed = timePassed / 1000;
                let playspace = document.getElementById("playspace");
                let finishText = document.getElementById("finishText");
                finishText.innerHTML = "Game finished in: " + secondsPassed + " seconds";
                playspace.appendChild(finishText);
                setTimeout(() => {
                    console.log("test");
                }, 200);
                sendDataToServer();
            }
            function sendDataToServer() {
            }
            allCards.forEach(card => card.addEventListener("click", cardFlip));
        }
        createPlayspace("https://Beinagrind.github.io/GIS-SoSe-2021-JL/Memeory/data/" + cardSet);
    }
    async function ranglisteSeite() {
    }
})(mememory || (mememory = {}));
//# sourceMappingURL=code.js.map