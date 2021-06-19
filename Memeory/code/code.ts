
namespace mememory {



    if (window.location.href.includes("/auswahl.html")) {

        auswahlSeite();
    
    }

    if (window.location.href.includes("/spielfeld.html")) {

        spielfeldSeite();
    
    }

    if (window.location.href.includes("/rangliste.html")) {

        ranglisteSeite();
    
    }

    async function auswahlSeite():  Promise<void>  {

        let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        submit.addEventListener("click", sendAuswahl);

        async function sendAuswahl(): Promise<void> {

            window.open("../html/spielfeld.html");
            console.log("Starting Game");

        }

    }

    async function spielfeldSeite():  Promise<void>  {



    }

    async function ranglisteSeite():  Promise<void>  {



    }

}