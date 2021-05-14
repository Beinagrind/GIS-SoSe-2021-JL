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

    spitze: Spitze[];
    kapsel: Kapsel[];
    antrieb: Antrieb[];

}

//Aufgabe3

//ich verstehe nicht wieso das nicht funktioniert, es hat doch bei der ersten aufgabe auch getan...
//als ichs ohne for schleife getestet hab hats funktioniert...
//ich hab mir mal einige andere Abgaben angeschaut, aber soweit ich sehen konnte, hat es auf die selbe art funktoniert


//div soll erstellt werden innerhalb eines bestehnden divvs mit id, und die daten der jeweiligen Spitze im Array anzeigen.
//und dann über ein grid layout je nach menge im aray angepasst werden

let layout = <HTMLDivElement>document.getElementById("wrapper");

function anzeigeSpitze(_spitze: Spitze[]): void {

    for (let i: number = 0; i < _spitze.length; i++) {
        
        let auswahlDiv: HTMLDivElement = document.createElement("div");

        //auswahlDiv.addEventListener("click", onclick);

        let name: string = _spitze[i].name;
        let länge: number = _spitze[i].länge;
        let farbe: string = _spitze[i].farbe;
        let preis: number = _spitze[i].preis;

        auswahlDiv.appendChild(document.createTextNode(name + " ist " + länge + " lang " + ", " + farbe + " und " + preis + " Währung teuer"));
        console.log(layout);
        layout.appendChild(auswahlDiv);

    }

}

anzeigeSpitze(spitze1);

}
