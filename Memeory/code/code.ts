namespace mememory {

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

    async function auswahlSeite():  Promise<void>  {

        let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        submit.addEventListener("click", sendAuswahl);

        let highscore: HTMLButtonElement = <HTMLButtonElement>document.getElementById("highscore");
        highscore.addEventListener("click", startHighscore);

        let admin: HTMLButtonElement = <HTMLButtonElement>document.getElementById("adminPage");
        admin.addEventListener("click", adminPage);

        async function sendAuswahl(): Promise<void> {

            let url: string = "https://beinagrinddrekifurtwangen.herokuapp.com/startGame";

            //let formData: FormData = new FormData(document.forms[0]);
            //let query: URLSearchParams = new URLSearchParams(<any>formData);

            //const response: Response = await fetch(url);
            //const responseString: string = await response.text();



            localStorage.clear();
            localStorage.setItem("spielerName", JSON.stringify(document.getElementsByTagName("input")[0].value));

            console.log("Starting Game");
            
            //window.location.assign("../html/spielfeld.html");
            
            let radio1: HTMLInputElement = <HTMLInputElement>document.getElementById("memesTemplate");
            let radio2: HTMLInputElement = <HTMLInputElement>document.getElementById("ahegaoTemplate");
            let radio3: HTMLInputElement = <HTMLInputElement>document.getElementById("programmersArtTemplate");

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

    function startHighscore(): void {

        window.location.assign("../html/rangliste.html");

    }

    function adminPage(): void {

        if (document.getElementsByTagName("input")[4].value == "password") {
        
            document.getElementsByTagName("input")[4].value = "";
            window.location.assign("../html/admin.html");

        }

        else {

            let wrongPW: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("passwordOutput");
            wrongPW.innerHTML = "Wrong Password";

        }


    }

    async function spielfeldSeite(formular: string): Promise<void>  {

        window.open("../html/spielfeld.html");

        console.log(formular  + " :selected");

        let spielerName: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("playerNameShown");
        
        spielerName.innerHTML = localStorage.getItem("spielerName");

        console.log("Game Starting");

        let timerStart: any = new Date();

        let cardSet: string = "";

        if (formular == "oldschoolMemesCards")  {
            cardSet = "set1data.json";
        }

        if (formular == "ahegaoCards")  {
            cardSet = "set2data.json";
        }

        if (formular == "programmersArtCards")  {
            cardSet = "set3data.json";
        }

        async function createPlayspace(_url: RequestInfo): Promise<void> {

            let antwort: Response = await fetch(_url);
            let cards = await antwort.json();

            console.log(cards);

            for (let arrayI in cards.cards1) {

                let playspace = document.getElementById("playspace");

                for (let i: number = 0; i < 3; i++) {
                    
                    let cardDiv: HTMLDivElement = document.createElement("div");
                    let cardBack: HTMLImageElement = document.createElement("img");
                    let cardFront: HTMLImageElement = document.createElement("img");
                
                    cardDiv.classList.add("gameCards");
                    cardBack.classList.add("cardBack");
                    cardFront.classList.add("cardFront");

                    cardDiv.dataset.whatCard = cards.cards1[arrayI].dataWhatCard;
                    let whatCard: string = (cards.cards1[arrayI].dataWhatCard);
                    console.log(whatCard);

                    let pathString: string = (cards.cards1[arrayI].image);

                    console.log(pathString);

                    let value: any = Math.floor(Math.random() * 16);
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

            let hasFlippedCard: boolean = false;
            let firstCard: any;
            let secondCard: any;

            let noMoreFlips: boolean = false;

            localStorage.setItem("turnedCards", "0");

            function cardFlip(this: any) {

                if (noMoreFlips) return;
                if (this === firstCard) return;

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

                            let numberOfTurned: any = localStorage.getItem("turnedCards");
                            numberOfTurned = parseInt(numberOfTurned) + 2;
                            localStorage.setItem("turnedCards", numberOfTurned);

                    }

                    else {
                        
                        noMoreFlips = true;

                        setTimeout(() => {

                            firstCard.classList.toggle("flipped");
                            secondCard.classList.toggle("flipped");

                            noMoreFlips = false;

                        },         800);

                    }

                }
                
                let turnedCards: any = localStorage.getItem("turnedCards");

                console.log(turnedCards);

                if (turnedCards == 16) {

                    gameFinished();

                    console.log("finished");

                }
            }

            function gameFinished() {

                //timer Beenden und Messen
                let timerEnd: any = new Date();
                let timePassed = timerEnd - timerStart;
                let secondsPassed: any = timePassed / 1000;

                localStorage.setItem("lastPlayTime", secondsPassed.toString());
                sendDataToServer(timePassed);

                setTimeout(() => {

                    startHighscore();

                },         1000);

            }

            async function sendDataToServer(spielerZeit: number) {

                let url: string = "";
        
                let spielerName: string = localStorage.getItem("spielerName");
                let userData = {spielerName, spielerZeit};
                let userDataJson = JSON.stringify(userData);

                let query: URLSearchParams = new URLSearchParams();

                query.append("playerName", spielerName);
                query.append("playerTime", spielerZeit.toString());

                url = "https://beinagrinddrekifurtwangen.herokuapp.com/playerTime" + "?" + query.toString();
        
                const response: Response = await fetch(url);
                const respString: string = await response.text();

            }

            allCards.forEach(card => card.addEventListener("click", cardFlip));

        }   
        
        createPlayspace("https://Beinagrind.github.io/GIS-SoSe-2021-JL/Memeory/data/" + cardSet);
    }

    async function ranglisteSeite(): Promise<void> {
        
        const serverResponse: HTMLElement = document.getElementById("highscoreList");

        let url: string = "";

        console.log("Server wird angefragt");

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url = "https://beinagrinddrekifurtwangen.herokuapp.com/readData" + "?" + query.toString();

        const response: Response = await fetch(url);
        const receivedObj = await response.json();

        for (let item of receivedObj) {

            let highscoreP: HTMLParagraphElement = document.createElement("p");
            let highscoreDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("highscoreList");

            highscoreP.innerHTML = "User: " + item.playerName + " had the time " + item.playerTime / 1000 + " seconds";

            highscoreDiv.append(highscoreP);

        }

    }

    interface HighscoreData {

        spielerID: string;
        spielerName: string;
        spielerZeit: number;

    }

    async function adminSeite(): Promise<void> {

        async function deleteHighscores(): Promise<void> {

            console.log("deleted");
            let deleted: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("deleted");
            deleted.innerHTML = "Deleted HighscoreList";
        
            let url: string = "";
    
            url = "https://beinagrinddrekifurtwangen.herokuapp.com/deleteHighscores";
    
            const response: Response = await fetch(url);
            const receivedObj: string = await response.text();       

        }

        async function newCards(): Promise<void> {

            let query: URLSearchParams = new URLSearchParams();
            let url: string = "";

            for (let i: number; i > 8; i++) {

                let value1 = document.getElementsByTagName("input")[i].value;
                query.append("playerName", value1);
                query.append("dataWhatCard", "card" + i);

                url = "https://beinagrinddrekifurtwangen.herokuapp.com/costum" + "?" + query.toString();

                const response: Response = await fetch(url); 
                const respString: string = await response.text();

                console.log(value1);
            }
            
            /*
            let value2 = document.getElementsByTagName("input")[1].value;
            query.append("playerName", value2);

            let value3 = document.getElementsByTagName("input")[2].value;
            query.append("playerName", value3);

            let value4 = document.getElementsByTagName("input")[3].value;
            query.append("playerName", value4);

            let value5 = document.getElementsByTagName("input")[4].value;
            query.append("playerName", value5);

            let value6 = document.getElementsByTagName("input")[5].value;
            query.append("playerName", value6);

            let value7 = document.getElementsByTagName("input")[6].value;
            query.append("playerName", value7);

            let value8 = document.getElementsByTagName("input")[7].value;
            query.append("playerName", value8);
            */

        }

        let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("deleteHighscores");
        submit.addEventListener("click", deleteHighscores);

        let submitNewCards: HTMLButtonElement = <HTMLButtonElement>document.getElementById("addCards");
        submitNewCards.addEventListener("click", newCards);

    }
 
}       