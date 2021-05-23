"use strict";
var Aufgabe_2_5;
(function (Aufgabe_2_5) {
    //Rakete mit 3 segmenten
    async function getSpitze() {
        const response = await fetch("http://127.0.0.1:5500/Aufgabe2.5/JSON/spitze.json");
        const data = await response.json();
        console.log(data);
        let spitze1;
        spitze1 = JSON.parse(JSON.stringify(data));
        anzeigeSpitze(spitze1);
    }
    async function getKapsel() {
        const response = await fetch("http://127.0.0.1:5500/Aufgabe2.5/JSON/kapsel.json");
        const data = await response.json();
        console.log(data);
        let kapsel1;
        kapsel1 = JSON.parse(JSON.stringify(data));
        kapselAuswahl(kapsel1);
    }
    async function getAntrieb() {
        const response = await fetch("http://127.0.0.1:5500/Aufgabe2.5/JSON/antrieb.json");
        const data = await response.json();
        console.log(data);
        let antrieb1;
        antrieb1 = JSON.parse(JSON.stringify(data));
        antriebAuswahl(antrieb1);
    }
    if (window.location.href.includes("/auswahl.html")) {
        getSpitze();
    }
    if (window.location.href.includes("/kapsel.html")) {
        getKapsel();
    }
    if (window.location.href.includes("/antrieb.html")) {
        getAntrieb();
    }
    if (window.location.href.includes("/endergebnis.html")) {
        endergebnis();
    }
    function anzeigeSpitze(_spitze) {
        let layout = document.getElementById("wrapper");
        for (let i = 0; i < _spitze.length; i++) {
            let auswahlDiv = document.createElement("div");
            let img = document.createElement("img");
            let hr = document.createElement("hr");
            let button = document.createElement("button");
            button.addEventListener("click", spitzeAuswahl);
            img.src = _spitze[i].image;
            let name = _spitze[i].name;
            let länge = _spitze[i].länge;
            let farbe = _spitze[i].farbe;
            let preis = _spitze[i].preis;
            auswahlDiv.appendChild(img);
            auswahlDiv.appendChild(hr);
            auswahlDiv.appendChild(document.createTextNode(name + " ist " + länge + " meter lang " + ", " + farbe + " und " + preis + " Währung teuer"));
            auswahlDiv.setAttribute("id", "text");
            button.appendChild(document.createTextNode("Auswählen"));
            auswahlDiv.appendChild(button);
            layout.appendChild(auswahlDiv);
            function spitzeAuswahl() {
                localStorage.setItem("spitze", _spitze[i].image);
                let ausgewaehltDiv = document.createElement("div");
                ausgewaehltDiv.appendChild(document.createTextNode("Wurde Ausgewählt"));
                auswahlDiv.appendChild(ausgewaehltDiv);
                window.open("./kapsel.html");
            }
        }
    }
    function kapselAuswahl(_kapsel) {
        let layout = document.getElementById("wrapper");
        let auswahlDiv = document.createElement("div");
        for (let i = 0; i < _kapsel.length; i++) {
            let layout = document.getElementById("wrapper");
            let auswahlDiv = document.createElement("div");
            let img = document.createElement("img");
            let hr = document.createElement("hr");
            let button = document.createElement("button");
            button.addEventListener("click", kapselAuswahl);
            img.src = _kapsel[i].image;
            let name = _kapsel[i].name;
            let kapazitaet = _kapsel[i].kapaziaet;
            let farbe = _kapsel[i].farbe;
            let preis = _kapsel[i].preis;
            auswahlDiv.appendChild(img);
            auswahlDiv.appendChild(hr);
            auswahlDiv.appendChild(document.createTextNode(name + " hat eine kapazität von " + kapazitaet + " ist " + farbe + " und " + preis + " Währung teuer"));
            auswahlDiv.setAttribute("id", "text");
            button.appendChild(document.createTextNode("Auswählen"));
            auswahlDiv.appendChild(button);
            layout.appendChild(auswahlDiv);
            function kapselAuswahl() {
                localStorage.setItem("kapsel", _kapsel[i].image);
                let ausgewaehltDiv = document.createElement("div");
                ausgewaehltDiv.appendChild(document.createTextNode("Wurde Ausgewählt"));
                auswahlDiv.appendChild(ausgewaehltDiv);
                window.open("./antrieb.html");
            }
        }
        //bereits ausgewählt
        let imgSpitze = document.createElement("img");
        let hr = document.createElement("hr");
        imgSpitze.src = localStorage.getItem("spitze");
        auswahlDiv.appendChild(imgSpitze);
        imgSpitze.appendChild(hr);
        auswahlDiv.appendChild(document.createTextNode("Bereits ausgewählte Raketenteile"));
        auswahlDiv.setAttribute("id", "text");
        layout.appendChild(auswahlDiv);
    }
    function antriebAuswahl(_antrieb) {
        let layout = document.getElementById("wrapper");
        let auswahlDiv = document.createElement("div");
        for (let i = 0; i < _antrieb.length; i++) {
            let layout = document.getElementById("wrapper");
            let auswahlDiv = document.createElement("div");
            let img = document.createElement("img");
            let hr = document.createElement("hr");
            let button = document.createElement("button");
            button.addEventListener("click", antriebAuswahl);
            img.src = _antrieb[i].image;
            let name = _antrieb[i].name;
            let treibstoff = _antrieb[i].treibstoff;
            let farbe = _antrieb[i].farbe;
            let preis = _antrieb[i].preis;
            auswahlDiv.appendChild(img);
            auswahlDiv.appendChild(hr);
            auswahlDiv.appendChild(document.createTextNode(name + " hat " + treibstoff + " liter Treibstoff " + " ist " + farbe + " und " + preis + " Währung teuer"));
            auswahlDiv.setAttribute("id", "text");
            button.appendChild(document.createTextNode("Auswählen"));
            auswahlDiv.appendChild(button);
            layout.appendChild(auswahlDiv);
            function antriebAuswahl() {
                localStorage.setItem("antrieb", _antrieb[i].image);
                let ausgewaehltDiv = document.createElement("div");
                ausgewaehltDiv.appendChild(document.createTextNode("Wurde Ausgewählt"));
                auswahlDiv.appendChild(ausgewaehltDiv);
                window.open("./endergebnis.html");
            }
        }
        //bereits ausgewählt
        let imgSpitze = document.createElement("img");
        let imgKapsel = document.createElement("img");
        let hr = document.createElement("hr");
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
    function endergebnis() {
        console.log("Hallo");
        let layout = document.getElementById("anzeigeErgebnis");
        let auswahlDiv = document.createElement("div");
        auswahlDiv.appendChild(document.createTextNode("Deine Rakete:"));
        let imgSpitze = document.createElement("img");
        let imgKapsel = document.createElement("img");
        let imgAntrieb = document.createElement("img");
        imgSpitze.src = localStorage.getItem("spitze");
        imgKapsel.src = localStorage.getItem("kapsel");
        imgAntrieb.src = localStorage.getItem("antrieb");
        auswahlDiv.appendChild(imgSpitze);
        auswahlDiv.appendChild(imgKapsel);
        auswahlDiv.appendChild(imgAntrieb);
        let button = document.createElement("button");
        button.addEventListener("click", refresh);
        button.appendChild(document.createTextNode("Von vorn beginnen"));
        auswahlDiv.appendChild(button);
        layout.appendChild(auswahlDiv);
        function refresh() {
            window.open("./auswahl.html");
        }
    }
    async function serverSend(_url) {
        let query = new URLSearchParams(localStorage);
        _url = _url + "?" + query.toString();
        console.log(query.toString());
        let antwort = await fetch(_url);
        console.log(antwort);
        let ausgabe = await antwort.json();
        let rueckgabe = document.getElementById("anfrage");
        if (ausgabe.error) {
            rueckgabe.className = "Error";
            rueckgabe.innerText = ausgabe.error;
        }
        else {
            rueckgabe.className = "Message";
            rueckgabe.innerText = ausgabe.Message;
        }
    }
    serverSend("https://gis-communication.herokuapp.com");
})(Aufgabe_2_5 || (Aufgabe_2_5 = {}));
//# sourceMappingURL=code.js.map