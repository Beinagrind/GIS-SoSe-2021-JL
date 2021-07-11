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
            let url = "https://beinagrinddrekifurtwangen.herokuapp.com/readCardSet";
            const response = await fetch(url);
            const receivedObj = await response.json();
            /*for (let item of receivedObj) {

                let highscoreP: HTMLParagraphElement = document.createElement("p");
                let highscoreDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("highscoreList");
    
                highscoreP.innerHTML = "User: " + item.playerName + " had the time " + item.playerTime / 1000 + " seconds";
    
                highscoreDiv.append(highscoreP);
    
          }
         */
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
                let query = new URLSearchParams();
                query.append("playerName", spielerName);
                query.append("playerTime", spielerZeit.toString());
                url = "https://beinagrinddrekifurtwangen.herokuapp.com/playerTime" + "?" + query.toString();
                const response = await fetch(url);
                const respString = await response.text();
            }
            allCards.forEach(card => card.addEventListener("click", cardFlip));
        }
        createPlayspace("https://Beinagrind.github.io/GIS-SoSe-2021-JL/Memeory/data/" + cardSet);
    }
    async function ranglisteSeite() {
        let returnMain = document.getElementById("return");
        returnMain.addEventListener("click", returnFunction);
        async function returnFunction() {
            window.location.assign("../html/auswahl.html");
        }
        const serverResponse = document.getElementById("highscoreList");
        let url = "";
        console.log("Server wird angefragt");
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = "https://beinagrinddrekifurtwangen.herokuapp.com/readData" + "?" + query.toString();
        const response = await fetch(url);
        const receivedObj = await response.json();
        for (let item of receivedObj) {
            let highscoreP = document.createElement("p");
            let highscoreDiv = document.getElementById("highscoreList");
            highscoreP.innerHTML = "User: " + item.playerName + " had the time " + item.playerTime / 1000 + " seconds";
            highscoreDiv.append(highscoreP);
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
        async function newCards() {
            for (let i = 0; i < 8; i++) {
                let query = new URLSearchParams();
                let url = "";
                let value1 = document.getElementsByTagName("input")[i].value;
                let cardCounter = i + 1;
                query.append("image", value1);
                query.append("dataWhatCard", "card" + cardCounter);
                url = "https://beinagrinddrekifurtwangen.herokuapp.com/costum" + "?" + query.toString();
                const response = await fetch(url);
                console.log(value1);
                console.log(cardCounter);
            }
        }
        async function deleteNewCards() {
            let url = "https://beinagrinddrekifurtwangen.herokuapp.com/delete";
            const response = await fetch(url);
        }
        let submit = document.getElementById("deleteHighscores");
        submit.addEventListener("click", deleteHighscores);
        let submitNewCards = document.getElementById("addCards");
        submitNewCards.addEventListener("click", newCards);
        let deleteCards = document.getElementById("deleteCards");
        deleteCards.addEventListener("click", deleteNewCards);
    }
})(mememory || (mememory = {}));
//# sourceMappingURL=code.js.map