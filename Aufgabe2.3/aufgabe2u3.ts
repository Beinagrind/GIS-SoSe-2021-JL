namespace Aufgabe_2 {

    //Rakete mit 3 segmenten

export interface Spitze {

    name: string;
    farbe: string;
    preis: number;
    länge: number;

}

export interface Kapsel {

    name: string;
    farbe: string;
    preis: number;
    kapaziät: number;

}

export interface Antrieb {

    name: string;
    farbe: string;
    preis: number;
    treibstoff: number;

}

export interface Rakete {

    _spitze: Spitze[];
    _kapsel: Kapsel[];
    _antrieb: Antrieb[];

}

let rakete1: Rakete = {_spitze: spitze1, _kapsel: kapsel1, _antrieb: antrieb1} ;


//Aufgabe3

//ich verstehe nicht wieso das nicht funktioniert, es hat doch bei der ersten aufgabe auch getan...
//als ichs ohne for schleife getestet hab hats funktioniert...
//ich hab mir mal einige andere Abgaben angeschaut, aber soweit ich sehen konnte, hat es auf die selbe art funktoniert


//div soll erstellt werden innerhalb eines bestehnden divvs mit id, und die daten der jeweiligen Spitze im Array anzeigen.
//un dann über ein grid layout je nach menge im aray angepasst werden

let layout = <HTMLDivElement>document.getElementById("wrapper");

function anzeigeSpitze(): void {

    for (let i: number; i < spitze1.length; i++) {
        
        let auswahlDiv: HTMLDivElement = document.createElement("div");

        //auswahlDiv.addEventListener("click", onclick);

        let name: string = spitze1[i].name;
        let länge: number = spitze1[i].länge;
        let farbe: string = spitze1[i].farbe;
        let preis: number = spitze1[i].preis;

        auswahlDiv.appendChild(document.createTextNode(name + " ist " + länge + " lang " + ", " + farbe + " und " + preis + " Währung teuer"));

        layout.appendChild(auswahlDiv);

    }

}

anzeigeSpitze();

}
