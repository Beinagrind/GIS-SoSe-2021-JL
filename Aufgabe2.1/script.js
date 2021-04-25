"use strict";
function a1() {
    let x = "Alles";
    console.log(x + " Gute!");
    func1();
    console.log(x + " Logo!");
}
a1();
function func1() {
    let x = "Alles";
    console.log(x + " Klar?");
}
/* 1. a) Ausgabe ist  Alles --- Klar? --- Logo! , nicht zulässig sind namen von schlüsselwörtern wie "function"
    b) zuerst konsolenausgabe von x, dann funktion ausführen dann consolenausgabe
    */
function func2() {
    console.log("Beispielwort1");
}
function func3() {
    console.log("Programmieren");
}
/* ---------------------------------- */
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
/* 2. Konsole gibt immer i aus, starttet bei 9 und wird immer  eins kleiner solange es über 0 ist.
*/
/* 3. zusätzliche abfrage von nicht existenter funktion func5(); --> is not defined, muss also erst hinzugefügt werden
    funktion  einbinden in .log z.b. x+ func3() +"text" führt zu "undefined"
    schreibfehler führt zu "this is not a function"
    variable falsch geschrieben führt zu "x si not defined"*/
let x = "Hallo";
console.log(x);
func11(x);
console.log(x);
func22();
func33();
console.log(x);
function func11(y) {
    y = "Bla";
    console.log(y);
}
function func22() {
    let x = "Blubb";
    console.log(x);
}
function func33() {
    x = "Test";
}
/* 4. Ausgabe von "Hallo", dann Ausgabe von "Bla"nachdem x in der funktion zu "Bla" wird, dann nochmal x, also "Hallo", dann ausgabe von "Blubb", dann Ausgabe von "Test"
    globale variablen sind für den gesamten code gültig und wurden nicht mit "var", "const" oder "let" gekennzeichnet, sie können auch außerhalb aller funktionen erstellt werden.
    Variablen die aber so gekennzeichnet wurden, gelten nur innerhalb des Blocks in dem sie erstellt wurden und sind lokale Variablen.
    
    Funktionen führen eine reihe von schritten aus un dkönnen variablen beinhalten, variablen jedoch sind nur "Wertträger" denen ein bestimmtes Value wie eine zahl zugeteilt wurde.
    
    Übergabeparameter sind variablen die  einer funktion  zu beginn "übergeben werden mit denen diese dann arbeiten kann. funktionen können auch variablen "zurückgeben"*/
console.log(multiply(5, 17));
function multiply(a, b) {
    return a * b;
}
console.log(max(5, 17));
function max(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
let i = 0;
let t = 0;
while (i <= 100) {
    t = t + i;
    i++;
}
console.log(t);
for (i = 0; i < 10; i++) {
    console.log(Math.random() * (100 - 0) + 0);
}
let n = 0;
let v = 1;
console.log(factorial(0));
function factorial(n) {
    var nr = 1;
    if (n === 0) {
        return 1;
    }
    else {
        for (var i = 2; i <= n; i++)
            nr = nr * i;
        return nr;
    }
}
leapyears();
function leapyears() {
    for (i = 1900; i <= 2021; i++) {
        var ly = i % 4;
        var lb = i % 100;
        var ln = i % 400;
        if (ly == 0) {
            if (lb != 0) {
                console.log(i);
            }
            else {
                if (ln == 0) {
                    console.log(i);
                }
            }
        }
    }
}
var raute = ["#", "##", "###", "####", "#####"];
var count;
for (count = 0; count < raute.length; count++) {
    console.log(raute[count]);
}
var u = 0;
for (i = 0; i < 100; i++) {
    u = u + 1;
    if (u % 3 == 0) {
        if (u % 5 == 0) {
            console.log("FizzBuzz");
        }
        else {
            console.log("Fizz");
        }
    }
    else {
        if (u % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(u);
        }
    }
}
console.log(schach(16));
/* War mir nicht sicher was mit höhe und breite einstellbar gemeint war, also ist  es jetzt immer quadratisch */
function schach(k) {
    var schachfeld = "";
    for (var z = 0; z < k; z++) {
        if (z % 2) {
            for (i = 0; i < k; i++) {
                if (i % 2) {
                    schachfeld += "#";
                }
                if (i % 2) {
                    schachfeld += " ";
                }
            }
        }
        else {
            schachfeld += " ";
            for (i = 0; i < k; i++) {
                if (i % 2) {
                    schachfeld += "#";
                }
                if (i % 2) {
                    schachfeld += " ";
                }
            }
        }
        schachfeld += "\n";
    }
    return (schachfeld);
}
//# sourceMappingURL=script.js.map