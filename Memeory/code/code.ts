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

    async function auswahlSeite():  Promise<void>  {

        let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        submit.addEventListener("click", sendAuswahl);

        let highscore: HTMLButtonElement = <HTMLButtonElement>document.getElementById("highscore");
        highscore.addEventListener("click", startHighscore);

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
           
            spielfeldSeite(localStorage.getItem("cardSet"));

        }

        function startHighscore(): void {

            window.location.assign("../html/rangliste.html");

        }

    }

    async function spielfeldSeite(formular: string): Promise<void>  {

        window.open("../html/spielfeld.html");

        console.log(formular  + " :selected");
        //umgedrehte karten zählen counter 1 hoch, spielende wenn counter auf 16

        let spielerName: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("playerNameShown");
        spielerName.innerHTML = localStorage.getItem("spielerName");

        console.log("Game Starting");

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

        createPlayspace("https://Beinagrind.github.io/GIS-SoSe-2021-JL/Memeory/data/" + cardSet); 

        async function createPlayspace(_url: RequestInfo): Promise<void> {

            let antwort: Response = await fetch(_url);
            let cards = await antwort.json();

            for (let i: number = 0; i < cards.length; i++) {

                console.log(cards);
                console.log(cards[i]);
                let playspace = document.getElementById("playspace");

                let cardDiv: HTMLDivElement = document.createElement("div");
                let cardBack: HTMLImageElement = document.createElement("img");
                let cardFront: HTMLImageElement = document.createElement("img");
                            
                cardFront.src = "../Bilder/front.png";
                cardBack.src =  cards[i];  
                console.log(cardBack);
                cardDiv.appendChild(cardBack);
                cardDiv.appendChild(cardFront);
                            
                playspace.appendChild(cardDiv);
            }
        }   
    }

    async function ranglisteSeite(): Promise<void> {



    }


}