"use strict";
var Aufgabe_2;
(function (Aufgabe_2) {
    //Rakete mit 3 segmenten
    //Aufgabe3
    //ich verstehe nicht wieso das nicht funktioniert, es hat doch bei der ersten aufgabe auch getan...
    //als ichs ohne for schleife getestet hab hats funktioniert...
    //ich hab mir mal einige andere Abgaben angeschaut, aber soweit ich sehen konnte, hat es auf die selbe art funktoniert
    //div soll erstellt werden innerhalb eines bestehnden divvs mit id, und die daten der jeweiligen Spitze im Array anzeigen.
    //und dann über ein grid layout je nach menge im aray angepasst werden
    let layout = document.getElementById("wrapper");
    function anzeigeSpitze(_spitze) {
        for (let i = 0; i < _spitze.length; i++) {
            let auswahlDiv = document.createElement("div");
            //auswahlDiv.addEventListener("click", onclick);
            let name = _spitze[i].name;
            let länge = _spitze[i].länge;
            let farbe = _spitze[i].farbe;
            let preis = _spitze[i].preis;
            auswahlDiv.appendChild(document.createTextNode(name + " ist " + länge + " lang " + ", " + farbe + " und " + preis + " Währung teuer"));
            console.log(layout);
            layout.appendChild(auswahlDiv);
        }
    }
    anzeigeSpitze(Aufgabe_2.spitze1);
})(Aufgabe_2 || (Aufgabe_2 = {}));
//# sourceMappingURL=aufgabe2u3.js.map