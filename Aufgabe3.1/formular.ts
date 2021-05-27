namespace P_3_1Server {

let formData: FormData;

let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
submit.addEventListener("click", getButton);

function getButton(_event: Event): void {

    serverTest("https://gis-sose-2021-jl.herokuapp.com/");

}

async function serverTest(_url: RequestInfo): Promise <void> {

    formData = new FormData(document.forms[0]);

    let query: URLSearchParams = new URLSearchParams(<any>formData);
    _url = _url + "?" + query.toString();

    let response: Response = await fetch(_url, {method: "get"});
    let responseString: string = await response.text();
    console.log(responseString);


}

}