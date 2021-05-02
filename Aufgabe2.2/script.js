"use strict";
var Aufgabe_1;
(function (Aufgabe_1) {
    /* a) */
    let numberArray = [17, 10, 23, 2, 66];
    console.log(min(numberArray));
    function min(numberArray) {
        let min = Math.min.apply(null, numberArray);
        return (min);
    }
    /* b) */
    if (isEven(0)) {
        console.log("Ungerade");
    }
    else {
        console.log("Gerade");
    }
    function isEven(evenTest) {
        let evenTestBoolean;
        if (evenTest % 2) {
            evenTestBoolean = false;
        }
        if (evenTest % 2) {
            evenTestBoolean = true;
        }
        return (evenTestBoolean);
    }
    let person1 = { name: "Ludwig", alter: 19, matrikelnummer: 266612 };
    let person2 = { name: "Walter", alter: 22, matrikelnummer: 245687 };
    let person3 = { name: "Billhardt", alter: 21, matrikelnummer: 267213 };
    function ausgabePerson(namedPerson) {
        console.log(namedPerson.name);
        console.log(namedPerson.alter);
        console.log(namedPerson.matrikelnummer);
    }
    ausgabePerson(person1);
    ausgabePerson(person2);
    ausgabePerson(person3);
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
        let arrayReversed = umdrehArray;
        const reversed = arrayReversed.reverse();
        return (reversed);
    }
    /* b) */
    console.log(join(["a", "b", "c"], ["d", "e", "f"]));
    function join(addArray, addArray2) {
        const arrayJoined = addArray.concat(addArray2);
        return (arrayJoined);
    }
    /* c) */
    console.log(split([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 4));
    function split(splitArray, index1, index2) {
        let ausschnittArray = splitArray;
        ausschnittArray = ausschnittArray.slice(index1, index2);
        return (ausschnittArray);
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
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
    context.beginPath();
    context.fillStyle = "black";
    context.fillRect(100, 200, 100, 100);
    context.stroke();
    context.beginPath();
    context.strokeStyle = '#ff0000';
    context.moveTo(100, 200);
    context.lineTo(150, 150);
    context.lineTo(200, 200);
    context.fillStyle = '#ff0000';
    context.fill();
    context.closePath();
    context.stroke();
    context.beginPath();
    context.arc(50, 50, 30, 0, 2 * Math.PI, false);
    context.arc(70, 50, 30, 0, 2 * Math.PI, false);
    context.arc(100, 70, 30, 0, 2 * Math.PI, false);
    context.arc(110, 50, 30, 0, 2 * Math.PI, false);
    context.arc(120, 60, 30, 0, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#ffffff';
    context.stroke();
    context.beginPath();
    context.arc(300, 40, 30, 0, 2 * Math.PI, false);
    context.arc(310, 50, 30, 0, 2 * Math.PI, false);
    context.arc(360, 50, 30, 0, 2 * Math.PI, false);
    context.arc(320, 40, 30, 0, 2 * Math.PI, false);
    context.arc(330, 60, 30, 0, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#ffffff';
    context.stroke();
    /* c) */
    createRect();
    function createRect() {
        let randomWidth = Math.floor(Math.random() * (300 - 50)) + 50;
        let randomHeight = Math.floor(Math.random() * (300 - 50)) + 50;
        let randomX = Math.floor(Math.random() * (1000 - 100)) + 100;
        let randomY = Math.floor(Math.random() * (1000 - 50)) + 400;
        return [randomX, randomY, randomWidth, randomHeight];
    }
    /* d) */
    //drawRect(createRect());
    drawRect(createRect());
    function drawRect(rectArray) {
        context.fillStyle = "black";
        context.fillRect(rectArray[0], rectArray[1], rectArray[2], rectArray[3]);
    }
    /* e) */
    let arrayArray = [createRect(), createRect(), createRect(), createRect(), createRect()];
    arrayArray.forEach(element => drawRect(element));
})(Aufgabe_3 || (Aufgabe_3 = {}));
//# sourceMappingURL=script.js.map