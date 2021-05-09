
namespace Aufgabe_1 {


    let body: HTMLElement = document.body;


    let d1: HTMLDivElement = document.createElement("div");
    body.appendChild(d1);

    function randomRechteck (): void {

        let divElement: HTMLDivElement = document.createElement("div");
        d1.appendChild(divElement);
        divElement.innerHTML = "";
        divElement.setAttribute("style", createRechteck());

    }

    function createRechteck(): string {

        let output: string = "";
        let rgbFill: string = "";
        let rgbStroke: string = "";
        let percentage: number = 50;
        let margin1: string = Math.floor(Math.random() * percentage) + "% ";
        let margin2: string = Math.floor(Math.random() * percentage) + "% ";
        let margin3: string = Math.floor(Math.random() * percentage) + "% ";
        let margin4: string = Math.floor(Math.random() * percentage) + "%;";
        let width: string = Math.floor(Math.random() * (300)) + "px; ";
        let height: string = "height: " + Math.floor(Math.random() * (300));
        let border: string = "; border: " + Math.floor(Math.random() * (20)) + "px solid ";

        rgbFill = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
        rgbStroke = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
        width = Math.floor(Math.random() * (1600 / 2)) + "px; ";
        height = "height: " + Math.floor(Math.random() * (800 / 2));

        output = "position: absolute; overflow: hidden; width: " 
            + width + height + "px; background-color: " + rgbFill + border
            + rgbStroke + "; margin: " + margin1 + margin2 + margin3 + margin4;


        return output;
    }

    document.getElementById("randomRectangle").addEventListener("click", randomRechteck);
    document.getElementById("refresh").addEventListener("click", refreshPage);

    function refreshPage(): void {

       location.reload(); 

    }
}

