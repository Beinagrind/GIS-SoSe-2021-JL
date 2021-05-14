
namespace Aufgabe_1 {

    /* a) */

    console.log(min(17, 10, 23, 2, 66));

    function min (...numberArray: number[]): number {

        return Math.min.apply(null, numberArray);
    }

    /* b) */

    
    console.log(isEven(50));
    console.log(isEven(75));
    //console.log(isEven(-1));

    function isEven(evenTest: number): boolean {

        if (evenTest == 0) {
            return true;
        }   

        if (evenTest == 1) {
            return false;
        }

        return isEven(evenTest - 2);

    }

    /* 
    Ausgabe bei 50: gerade
    Ausgabe bei 75: ungerade
    Ausgabe bei -1: error
    --> unendliche rekursionsschleife


    

    /* c) */

    interface Student {

        name: string;
        alter: number;
        matrikelnummer: number;

    }

    let person1: Student = { name: "Ludwig", alter: 19, matrikelnummer: 266612 } ;
    let person2: Student = { name: "Walter", alter: 22, matrikelnummer: 245687 } ;
    let person3: Student = { name: "Billhardt", alter: 21, matrikelnummer: 267213 } ;

    let studentArray: Student[] = [person1, person2, person3, { name: "André", matrikelnummer: 193021, alter: 21 }];
    console.log(studentArray[3].name, studentArray[0].alter, studentArray[1].matrikelnummer );


    function ausgabePerson (namedPerson: Student): void {
        console.log(namedPerson.name);
        console.log(namedPerson.alter);
        console.log(namedPerson.matrikelnummer);
    }

    for (let info of studentArray) {
        ausgabePerson(info);
    }

}

namespace Aufgabe_1_c_mitKlasse {

    class Student {

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

    let person1: Student = new Student( "Ludwig", 19, 266612 ) ;
    person1.ausgabePerson();

    let person2: Student = new Student( "Walter", 22, 245687 ) ;
    person2.ausgabePerson();

    let person3: Student = new Student( "Billhardt", 21, 267213 ) ;
    person3.ausgabePerson();

}



namespace Aufgabe_2 {

    /* a) */

    console.log(backwards([1, 2, 3, 4, 5]));

    function backwards(umdrehArray: number[]): number[]  {

        let backwardsArray: number[] = [];

        for (let i: number = 0; i < umdrehArray.length; i++) {
            backwardsArray[i] = umdrehArray[umdrehArray.length - i - 1];
        }
        return backwardsArray;
        
    }

    /* b) */
    console.log(join([1, 2, 3], [4, 5, 6]));

    function join(arr: number[], arr2: number[]): number[] {

        while (arr2.length > 0) { arr.push(arr2.shift()); }
        return arr;

    }

    /* c) */

    console.log(split([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 4));

    function split(splitArray: number[], index1: number, index2: number): number[] {

        let ausschnittArray: number[] = [];
        
        if (index1 > 0 && index2 < splitArray.length && index1 < index2) {
            for (let i: number = index1 - 1; i < index2; i++) {
                ausschnittArray.push(splitArray[i]);
            }
            return ausschnittArray;
        }
        return ausschnittArray;
     
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
        
    /* b) */

    interface rechteck {

        color?: string;
        width: number;
        height: number;
        lineColor?: string;
        lineWidth?: number;
        positionX: number;
        positionY: number;

    }

    //Beispiel rechteck:

   /* const recht1: rechteck = {
        width: 200,
        height: 300,
        positionX: 1000,
        positionY: 1000,
        color: "black",
        lineColor: "green"
    }; */


    /* c) */

    createRect();

    function createRect(): rechteck {

        let randomWidth: number = Math.floor(Math.random() * (300 - 50) ) + 50;
        let randomHeight: number = Math.floor(Math.random() * (300 - 50) ) + 50;
        let randomX: number = Math.floor(Math.random() * (1000 - 100) ) + 100;
        let randomY: number = Math.floor(Math.random() * (1000 - 50) ) + 400;

        let rechteck1: rechteck = { width: randomWidth, height: randomHeight, positionX: randomX, positionY: randomY } ;

        return rechteck1;
        
    }


    /* d) */

    drawRect(createRect());

    function drawRect(rectCreate: rechteck): void {

        context.fillStyle = "black";

        context.fillRect(rectCreate.positionX, rectCreate.positionY, rectCreate.width, rectCreate.height );

    }

    /* e) */

    let arrayArray: rechteck[] = [createRect(), createRect(), createRect(), createRect(), createRect()];

    arrayArray.forEach(element => drawRect(element));
        
    } 

