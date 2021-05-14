namespace Aufgabe_2_4 {

    //Rakete mit 3 segmenten

    //Einschließlich Verbesserung von Aufgabe 2.3

export interface Spitze {

    name: string;
    farbe?: string;
    preis?: number;
    länge?: number;
    image: string;

}

export interface Kapsel {

    name: string;
    farbe?: string;
    preis?: number;
    kapaziaet?: number;
    image: string;

}

export interface Antrieb {

    name: string;
    farbe?: string;
    preis?: number;
    treibstoff?: number;
    image: string;

}


let spitze1: Spitze[] = JSON.parse(spitzeJSON);
let kapsel1: Kapsel[] = JSON.parse(kapselJSON);
let antrieb1: Antrieb[] = JSON.parse(antriebJSON);

//anzeigeSpitze(spitze1, kapsel1, antrieb1);

if (window.location.href.includes("/auswahl.html")) {

    anzeigeSpitze(spitze1);

}

if (window.location.href.includes("/kapsel.html")) {

    kapselAuswahl(kapsel1);

}

if (window.location.href.includes("/antrieb.html")) {

    antriebAuswahl(antrieb1);

}

if (window.location.href.includes("/endergebnis.html")) {

    endergebnis();

}



function anzeigeSpitze(_spitze: Spitze[]): void {
    
    let layout: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");

    for (let i: number = 0; i < _spitze.length; i++) {
        
        let auswahlDiv: HTMLDivElement = document.createElement("div");
        let img: HTMLImageElement = document.createElement("img");
        let hr: HTMLHRElement = document.createElement("hr");
        let button: HTMLButtonElement = document.createElement("button");
        

        button.addEventListener("click", spitzeAuswahl);

        img.src = _spitze[i].image;

        let name: string = _spitze[i].name;
        let länge: number = _spitze[i].länge;
        let farbe: string = _spitze[i].farbe;
        let preis: number = _spitze[i].preis;
       
        auswahlDiv.appendChild(img);
        auswahlDiv.appendChild(hr);
        auswahlDiv.appendChild(document.createTextNode(name + " ist " + länge + " meter lang " + ", " + farbe + " und " + preis + " Währung teuer"));
        auswahlDiv.setAttribute("id", "text");
        button.appendChild(document.createTextNode("Auswählen"));
        auswahlDiv.appendChild(button);
            
        layout.appendChild(auswahlDiv);

        function spitzeAuswahl(): void {
            
            localStorage.setItem("spitze", spitze1[i].image);
            let ausgewaehltDiv: HTMLDivElement = document.createElement("div");
            ausgewaehltDiv.appendChild(document.createTextNode("Wurde Ausgewählt"));
            auswahlDiv.appendChild(ausgewaehltDiv);

            window.open("./kapsel.html");

            }
        }  
}

function kapselAuswahl(_kapsel: Kapsel[]): void {

    let layout: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");
    let auswahlDiv: HTMLDivElement = document.createElement("div");

    for (let i: number = 0; i < _kapsel.length; i++) {
            
        let layout: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");
        let auswahlDiv: HTMLDivElement = document.createElement("div");
        let img: HTMLImageElement = document.createElement("img");
        let hr: HTMLHRElement = document.createElement("hr");
        let button: HTMLButtonElement = document.createElement("button");


        button.addEventListener("click", kapselAuswahl);

        img.src = _kapsel[i].image;

        let name: string = _kapsel[i].name;
        let kapazitaet: number = _kapsel[i].kapaziaet;
        let farbe: string = _kapsel[i].farbe;
        let preis: number = _kapsel[i].preis;

        auswahlDiv.appendChild(img);
        auswahlDiv.appendChild(hr);
        auswahlDiv.appendChild(document.createTextNode(name + " hat eine kapazität von " + kapazitaet + " ist " + farbe + " und " + preis + " Währung teuer"));
        auswahlDiv.setAttribute("id", "text");
        button.appendChild(document.createTextNode("Auswählen"));
        auswahlDiv.appendChild(button);
    
        layout.appendChild(auswahlDiv);

        function kapselAuswahl(): void {

            localStorage.setItem("kapsel", kapsel1[i].image);
            let ausgewaehltDiv: HTMLDivElement = document.createElement("div");
            ausgewaehltDiv.appendChild(document.createTextNode("Wurde Ausgewählt"));
            auswahlDiv.appendChild(ausgewaehltDiv);

            window.open("./antrieb.html");

        }
    }

    //bereits ausgewählt
    let imgSpitze: HTMLImageElement = document.createElement("img");
    let hr: HTMLHRElement = document.createElement("hr");

    imgSpitze.src = localStorage.getItem("spitze");

    auswahlDiv.appendChild(imgSpitze);

    imgSpitze.appendChild(hr);

    auswahlDiv.appendChild(document.createTextNode("Bereits ausgewählte Raketenteile"));
    auswahlDiv.setAttribute("id", "text");

    layout.appendChild(auswahlDiv);

}

function antriebAuswahl(_antrieb: Antrieb[]): void {

    let layout: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");
    let auswahlDiv: HTMLDivElement = document.createElement("div");

    for (let i: number = 0; i < _antrieb.length; i++) {
            
        let layout: HTMLDivElement = <HTMLDivElement>document.getElementById("wrapper");
        let auswahlDiv: HTMLDivElement = document.createElement("div");
        let img: HTMLImageElement = document.createElement("img");
        let hr: HTMLHRElement = document.createElement("hr");
        let button: HTMLButtonElement = document.createElement("button");


        button.addEventListener("click", antriebAuswahl);

        img.src = _antrieb[i].image;

        let name: string = _antrieb[i].name;
        let treibstoff: number = _antrieb[i].treibstoff;
        let farbe: string = _antrieb[i].farbe;
        let preis: number = _antrieb[i].preis;

        auswahlDiv.appendChild(img);
        auswahlDiv.appendChild(hr);
        auswahlDiv.appendChild(document.createTextNode(name + " hat " + treibstoff + " liter Treibstoff " + " ist " + farbe + " und " + preis + " Währung teuer"));
        auswahlDiv.setAttribute("id", "text");
        button.appendChild(document.createTextNode("Auswählen"));
        auswahlDiv.appendChild(button);
    
        layout.appendChild(auswahlDiv);

        function antriebAuswahl(): void {

            localStorage.setItem("antrieb", antrieb1[i].image);
            let ausgewaehltDiv: HTMLDivElement = document.createElement("div");
            ausgewaehltDiv.appendChild(document.createTextNode("Wurde Ausgewählt"));
            auswahlDiv.appendChild(ausgewaehltDiv);

            window.open("./endergebnis.html");

        }
    }

    //bereits ausgewählt
    let imgSpitze: HTMLImageElement = document.createElement("img");
    let imgKapsel: HTMLImageElement = document.createElement("img");
    let hr: HTMLHRElement = document.createElement("hr");

    imgSpitze.src = localStorage.getItem("spitze");
    imgKapsel.src = localStorage.getItem("kapsel");

    imgSpitze.appendChild(hr);
    imgKapsel.appendChild(hr);

    auswahlDiv.appendChild(imgSpitze);
    auswahlDiv.appendChild(imgKapsel);

    auswahlDiv.appendChild(document.createTextNode("Bereits ausgewählte Raketenteile"));
    auswahlDiv.setAttribute("id", "text");

    layout.appendChild(auswahlDiv);
 
}

function endergebnis(): void  {

    
    console.log("Hallo");
    let layout: HTMLDivElement = <HTMLDivElement>document.getElementById("anzeigeErgebnis");
    let auswahlDiv: HTMLDivElement = document.createElement("div");

    auswahlDiv.appendChild(document.createTextNode("Deine Rakete:"));

    let imgSpitze: HTMLImageElement = document.createElement("img");
    let imgKapsel: HTMLImageElement = document.createElement("img");
    let imgAntrieb: HTMLImageElement = document.createElement("img");
                            
    imgSpitze.src = localStorage.getItem("spitze");
    imgKapsel.src = localStorage.getItem("kapsel");
    imgAntrieb.src = localStorage.getItem("antrieb");
                            
                            
    auswahlDiv.appendChild(imgSpitze);
    auswahlDiv.appendChild(imgKapsel);
    auswahlDiv.appendChild(imgAntrieb);
                        

    let button: HTMLButtonElement = document.createElement("button");

    button.addEventListener("click", refresh);
    button.appendChild(document.createTextNode("Von vorn beginnen"));
    auswahlDiv.appendChild(button);

    layout.appendChild(auswahlDiv);

    function refresh(): void {

        window.open("./auswahl.html");
                                    
        }

    }
}
