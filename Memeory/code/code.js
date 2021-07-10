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
    if (window.location.href.includes("/admin.html")) {
        adminSeite();
    }
    async function auswahlSeite() {
        let submit = document.getElementById("start");
        submit.addEventListener("click", sendAuswahl);
        let highscore = document.getElementById("highscore");
        highscore.addEventListener("click", startHighscore);
        let admin = document.getElementById("adminPage");
        admin.addEventListener("click", adminPage);
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
            //option 4 zieht json von der datenbank, die links dort werden auf der admin seite festgelegt
            spielfeldSeite(localStorage.getItem("cardSet"));
        }
    }
    function startHighscore() {
        window.location.assign("../html/rangliste.html");
    }
    function adminPage() {
        if (document.getElementsByTagName("input")[4].value == "password") {
            document.getElementsByTagName("input")[4].value = "";
            window.location.assign("../html/admin.html");
        }
        else {
            let wrongPW = document.getElementById("passwordOutput");
            wrongPW.innerHTML = "Wrong Password";
        }
    }
    async function spielfeldSeite(formular) {
        window.open("../html/spielfeld.html");
        console.log(formular + " :selected");
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
                //timer Beenden und Messen
                let timerEnd = new Date();
                let timePassed = timerEnd - timerStart;
                let secondsPassed = timePassed / 1000;
                localStorage.setItem("lastPlayTime", secondsPassed.toString());
                sendDataToServer(timePassed);
                setTimeout(() => {
                    startHighscore();
                }, 1000);
            }
            async function sendDataToServer(spielerZeit) {
                let url = "";
                let spielerName = localStorage.getItem("spielerName");
                let userData = { spielerName, spielerZeit };
                let userDataJson = JSON.stringify(userData);
                let query = new URLSearchParams(userDataJson);
                query.append("playerName", spielerName);
                //query.append("playerTime", (spielerZeit));
                url = "https://beinagrinddrekifurtwangen.herokuapp.com/playerTime" + "?" + query.toString();
                const response = await fetch(url);
                const respString = await response.text();
            }
            allCards.forEach(card => card.addEventListener("click", cardFlip));
        }
        createPlayspace("https://Beinagrind.github.io/GIS-SoSe-2021-JL/Memeory/data/" + cardSet);
    }
    async function ranglisteSeite() {
        const serverResponse = document.getElementById("highscoreList");
        let url = "";
        console.log("Server wird angefragt");
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = "https://beinagrinddrekifurtwangen.herokuapp.com/readData" + "?" + query.toString();
        const response = await fetch(url);
        const receivedObj = await response.json();
        console.log(receivedObj);
        for (let key in receivedObj) {
            for (let i = 0; i < 11; i++) {
                let spielerName = receivedObj[key];
                let spielerZeit = receivedObj[key];
                console.log(spielerName);
                console.log(spielerZeit);
                serverResponse.innerHTML = JSON.stringify(spielerName + " " + spielerZeit);
            }
        }
    }
    async function adminSeite() {
        async function deleteHighscores() {
            console.log("deleted");
            let deleted = document.getElementById("deleted");
            deleted.innerHTML = "Deleted HighscoreList";
            let url = "";
            url = "https://beinagrinddrekifurtwangen.herokuapp.com/deleteHighscores";
            const response = await fetch(url);
            const receivedObj = await response.text();
        }
        let submit = document.getElementById("deleteHighscores");
        submit.addEventListener("click", deleteHighscores);
    }
})(mememory || (mememory = {}));
//# sourceMappingURL=code.js.map