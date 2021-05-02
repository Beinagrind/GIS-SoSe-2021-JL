
namespace Aufgabe_1 {

/* a) */

let numberArray: number[] = [17, 10, 23, 2, 66];

console.log(min(numberArray));

function min (numberArray: number[]): number {

    let min = Math.min.apply(null, numberArray);

    return(min);
}

/* b) */

if (isEven(0)) {
    console.log("Ungerade");
}

else {
    console.log("Gerade");
}

function isEven(evenTest: number): boolean {

    let evenTestBoolean: boolean;

    if (evenTest % 2) {
        evenTestBoolean = false;
    }   

    if (evenTest ! % 2) {
        evenTestBoolean = true;
    }

    return(evenTestBoolean);

}

/* 
   Ausgabe bei 50: gerade
   Ausgabe bei 75: ungerade
   Ausgabe bei -1: ungerade
   Ausgabe bei -2: gerade

   --> Modulo berechnung funktioniert genau gleich bei negativen wie posotiven zahlen.
       (Hab in nem Video gesehen, dass modulo beio positiven zahlen geteilt durch rechnet, und bei negativen zahlen mal.)
*/

/* c) */

interface Studenten {

    name: string;
    alter: number;
    matrikelnummer: number;

}

let person1: Studenten = { name: "Ludwig", alter: 19, matrikelnummer: 266612 } ;
let person2: Studenten = { name: "Walter", alter: 22, matrikelnummer: 245687 } ;
let person3: Studenten = { name: "Billhardt", alter: 21, matrikelnummer: 267213 } ;

function ausgabePerson (namedPerson: Studenten): void {
    console.log(namedPerson.name);
    console.log(namedPerson.alter);
    console.log(namedPerson.matrikelnummer);
}

ausgabePerson(person1);

ausgabePerson(person2);

ausgabePerson(person3);

}

namespace Aufgabe_1_c_mitKlasse {

class Studenten {

    name: string;
    alter: number;
    matrikelnummer: number;

    constructor(_name: string, _alter: number, _matrikelnummer: number) {

        this.name = _name;
        this.alter = _alter;
        this.matrikelnummer = _matrikelnummer;

    }

    ausgabePerson(): void {
        console.log(this.name, this.alter, this.matrikelnummer) ;
    }

}

let person1: Studenten = new Studenten( "Ludwig", 19, 266612 ) ;
person1.ausgabePerson();

let person2: Studenten = new Studenten( "Walter", 22, 245687 ) ;
person2.ausgabePerson();

let person3: Studenten = new Studenten( "Billhardt", 21, 267213 ) ;
person3.ausgabePerson();

}



namespace Aufgabe_2 {

/* a) */

console.log(backwards([1, 2, 3, 4, 5]));

function backwards(umdrehArray: number[]): number[]  {

    let arrayReversed: number[] = umdrehArray;

    const reversed: number[] = arrayReversed.reverse();
    
    return(reversed);
}

/* b) */

console.log(join(["a", "b", "c"], ["d", "e", "f"]));

function join(addArray: string[], addArray2: string[]): string[] {

    const arrayJoined: string[] = addArray.concat(addArray2);

    return(arrayJoined);
}

/* c) */

console.log(split([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 4));

function split(splitArray: number[], index1: number, index2: number): number[] {

    let ausschnittArray: number[] = splitArray;

    ausschnittArray = ausschnittArray.slice(index1, index2);

    return(ausschnittArray);

}

}

namespace Aufgabe_3 {

/* a) */

let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myCanvas");

let context: CanvasRenderingContext2D = canvas.getContext("2d");

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
    context.fillStyle ="black";
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
    
/* b) */

interface rechteck {

    color: string;
    width: number;
    height: number;
    lineColor: string;
    lineWidth: number;
    positionX: number;
    positionY: number;

}

/* c) */

createRect();

function createRect(): number[] {

    let randomWidth: number = Math.floor(Math.random() * (300 - 50) ) + 50;
    let randomHeight: number = Math.floor(Math.random() * (300 - 50) ) + 50;
    let randomX: number = Math.floor(Math.random() * (1000 - 100) ) + 100;
    let randomY: number = Math.floor(Math.random() * (1000 - 50) ) + 400;

    return [randomX, randomY, randomWidth, randomHeight];
    
}

/* d) */
 
//drawRect(createRect());

drawRect(createRect());

function drawRect(rectArray: number[]): void {

    context.fillStyle = "black";
    context.fillRect(rectArray[0], rectArray[1], rectArray[2], rectArray[3] );

}

/* e) */

let arrayArray: number[][] = [createRect(), createRect(), createRect(), createRect(), createRect()];

arrayArray.forEach(element => drawRect(element));
    
} 

