"use strict";
var Aufgabe_2;
(function (Aufgabe_2) {
    //Rakete mit 3 segmenten
    let rakete1 = { _spitze: Aufgabe_2.spitze1, _kapsel: Aufgabe_2.kapsel1, _antrieb: Aufgabe_2.antrieb1 };
    //Aufgabe3
    //ich verstehe nicht wieso das nicht funktioniert, es hat doch bei der ersten aufgabe auch getan...
    //als ichs ohne for schleife getestet hab hats funktioniert...
    //ich hab mir mal einige andere Abgaben angeschaut, aber soweit ich sehen konnte, hat es auf die selbe art funktoniert
    //div soll erstellt werden innerhalb eines bestehnden divvs mit id, und die daten der jeweiligen Spitze im Array anzeigen.
    //un dann über ein grid layout je nach menge im aray angepasst werden
    let layout = document.getElementById("wrapper");
    function anzeigeSpitze() {
        for (let i; i < Aufgabe_2.spitze1.length; i++) {
            let auswahlDiv = document.createElement("div");
            //auswahlDiv.addEventListener("click", onclick);
            let name = Aufgabe_2.spitze1[i].name;
            let länge = Aufgabe_2.spitze1[i].länge;
            let farbe = Aufgabe_2.spitze1[i].farbe;
            let preis = Aufgabe_2.spitze1[i].preis;
            auswahlDiv.appendChild(document.createTextNode(name + " ist " + länge + " lang " + ", " + farbe + " und " + preis + " Währung teuer"));
            layout.appendChild(auswahlDiv);
        }
    }
    anzeigeSpitze();
})(Aufgabe_2 || (Aufgabe_2 = {}));
//# sourceMappingURL=aufgabe2u3.js.map