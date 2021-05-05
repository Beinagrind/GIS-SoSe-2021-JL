"use strict";
var Aufgabe_1;
(function (Aufgabe_1) {
    /* a) */
    console.log(min(17, 10, 23, 2, 66));
    function min(...numberArray) {
        return Math.min.apply(null, numberArray);
    }
    /* b) */
    console.log(isEven(50));
    console.log(isEven(75));
    //console.log(isEven(-1));
    function isEven(evenTest) {
        if (evenTest == 0) {
            return true;
        }
        if (evenTest == 1) {
            return false;
        }
        return isEven(evenTest - 2);
    }
    let person1 = { name: "Ludwig", alter: 19, matrikelnummer: 266612 };
    let person2 = { name: "Walter", alter: 22, matrikelnummer: 245687 };
    let person3 = { name: "Billhardt", alter: 21, matrikelnummer: 267213 };
    let studentArray = [person1, person2, person3, { name: "André", matrikelnummer: 193021, alter: 21 }];
    console.log(studentArray[3].name, studentArray[0].alter, studentArray[1].matrikelnummer);
    function ausgabePerson(namedPerson) {
        console.log(namedPerson.name);
        console.log(namedPerson.alter);
        console.log(namedPerson.matrikelnummer);
    }
    for (let info of studentArray) {
        ausgabePerson(info);
    }
})(Aufgabe_1 || (Aufgabe_1 = {}));
var Aufgabe_1_c_mitKlasse;
(function (Aufgabe_1_c_mitKlasse) {
    class Studenten {
        constructor(_name, _alter, _matrikelnummer) {
            this.name = _name;
            this.alter = _alter;
            this.matrikelnummer = _matrikelnummer;
        }
        ausgabePerson() {
            console.log(this.name, this.alter, this.matrikelnummer);
        }
    }
    let person1 = new Studenten("Ludwig", 19, 266612);
    person1.ausgabePerson();
    let person2 = new Studenten("Walter", 22, 245687);
    person2.ausgabePerson();
    let person3 = new Studenten("Billhardt", 21, 267213);
    person3.ausgabePerson();
})(Aufgabe_1_c_mitKlasse || (Aufgabe_1_c_mitKlasse = {}));
var Aufgabe_2;
(function (Aufgabe_2) {
    /* a) */
    console.log(backwards([1, 2, 3, 4, 5]));
    function backwards(umdrehArray) {
        let backwardsArray = [];
        for (let i = 0; i < umdrehArray.length; i++) {
            backwardsArray[i] = umdrehArray[umdrehArray.length - i - 1];
        }
        return backwardsArray;
    }
    /* b) */
    console.log(join([1, 2, 3], [4, 5, 6]));
    function join(arr, arr2) {
        while (arr2.length > 0) {
            arr.push(arr2.shift());
        }
        return arr;
    }
    /* c) */
    console.log(split([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 4));
    function split(splitArray, index1, index2) {
        let ausschnittArray = [];
        if (index1 > 0 && index2 < splitArray.length && index1 < index2) {
            for (let i = index1 - 1; i < index2; i++) {
                ausschnittArray.push(splitArray[i]);
            }
            return ausschnittArray;
        }
        return ausschnittArray;
    }
})(Aufgabe_2 || (Aufgabe_2 = {}));
var Aufgabe_3;
(function (Aufgabe_3) {
    /* a) */
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    context.lineWidth = 10;
    context.fillStyle = "blue";
    context.fillRect(0, 0, 400, 400);
    context.fillStyle = "green";
    context.fillRect(0, 300, 400, 100);
    //Line
    context.beginPath();
    context.moveTo(300, 300);
    context.lineTo(300, 230);
    context.strokeStyle = "brown";
    context.stroke();
    context.beginPath();
    context.arc(300, 230, 30, 0, 2 * Math.PI, false);
    context.fillStyle = "green";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#003300";
    context.stroke();
    context.beginPath();
    context.fillStyle = "black";
    context.fillRect(100, 200, 100, 100);
    context.stroke();
    context.beginPath();
    context.strokeStyle = "#ff0000";
    context.moveTo(100, 200);
    context.lineTo(150, 150);
    context.lineTo(200, 200);
    context.fillStyle = "#ff0000";
    context.fill();
    context.closePath();
    context.stroke();
    context.beginPath();
    context.arc(50, 50, 30, 0, 2 * Math.PI, false);
    context.arc(70, 50, 30, 0, 2 * Math.PI, false);
    context.arc(100, 70, 30, 0, 2 * Math.PI, false);
    context.arc(110, 50, 30, 0, 2 * Math.PI, false);
    context.arc(120, 60, 30, 0, 2 * Math.PI, false);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#fffff";
    context.stroke();
    context.beginPath();
    context.arc(300, 40, 30, 0, 2 * Math.PI, false);
    context.arc(310, 50, 30, 0, 2 * Math.PI, false);
    context.arc(360, 50, 30, 0, 2 * Math.PI, false);
    context.arc(320, 40, 30, 0, 2 * Math.PI, false);
    context.arc(330, 60, 30, 0, 2 * Math.PI, false);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#ffffff";
    context.stroke();
    //Beispiel rechteck:
    const recht1 = {
        width: 200,
        height: 300,
        positionX: 1000,
        positionY: 1000,
        color: "black",
        lineColor: "green"
    };
    /* c) */
    createRect();
    function createRect() {
        let randomWidth = Math.floor(Math.random() * (300 - 50)) + 50;
        let randomHeight = Math.floor(Math.random() * (300 - 50)) + 50;
        let randomX = Math.floor(Math.random() * (1000 - 100)) + 100;
        let randomY = Math.floor(Math.random() * (1000 - 50)) + 400;
        let rechteck1 = { width: randomWidth, height: randomHeight, positionX: randomX, positionY: randomY };
        return rechteck1;
    }
    /* d) */
    drawRect(createRect());
    function drawRect(rectCreate) {
        context.fillStyle = "black";
        context.fillRect(rectCreate.positionX, rectCreate.positionY, rectCreate.width, rectCreate.height);
    }
    /* e) */
    let arrayArray = [createRect(), createRect(), createRect(), createRect(), createRect()];
    arrayArray.forEach(element => drawRect(element));
})(Aufgabe_3 || (Aufgabe_3 = {}));
//# sourceMappingURL=script.js.map