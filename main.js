// tady je místo pro náš program

//let nadpis = document.querySelector("h1");
//nadpis.classList.add("zluty");

//nadpis.classList.remove("zluty");

//function secti(a, b) {
//nadpis.innerHTML = a + b;
//}

//let nadpis;
//nadpis = document.querySelector("p");

let nadpis = document.querySelector("#js-paragraph");

function ztucni(udalost) {
    //document.querySelector('#js-paragraph').style.fontWeight = 'bold';
    udalost.target.style.fontWeight = 'bold';
    //udalost.target.classList.add('tucny');
}

function zmenBarvu() {
    nadpis.classList.toggle("cerveny");
}
function zvetsi() {
    nadpis.style.fontSize = "17px";
}

function prehraj(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
}

function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}

function ztis(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0;
}

function zvuk(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0.5;
}

function maximum(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 1;
}

function zacatek(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.load();
    audioElement.removeAttribute('controls');
    audioElement.play();
}