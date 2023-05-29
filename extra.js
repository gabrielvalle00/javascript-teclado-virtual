//Exercicio de looping

let textoDiv = document.getElementById ("textDiv");
let radioDiv = document.getElementById("radioDiv");
let paragrafoDiv = document.getElementById("paragrafoDiv");

for (let i=1;i<=20;i++){
    
    var br = document.createElement("br");
   var caixaDeTexto = document.createElement("input");
   caixaDeTexto.setAttribute("type", "texto");
   textoDiv.appendChild(caixaDeTexto);
   caixaDeTexto.setAttribute("id", i);
   textoDiv.appendChild(br);

}

for (let i=1;i<=20;i++){

    var br = document.createElement("br");
    var cRadio = document.createElement("input");
    cRadio.setAttribute("type", "radio");
    cRadio.setAttribute("disabled", "true");
    cRadio.setAttribute("id", i);
    radioDiv.appendChild(cRadio);
    radioDiv.appendChild(br);
}

for (let i=1;i<=30;i++){

    var l = "Paragrafo"+i;

    var br = document.createElement("br");
    var cParagrafo = document.createElement("p");
    cParagrafo.setAttribute("class", "texto");
    cParagrafo.setAttribute("id", i);
    cParagrafo.textContent= l;
    paragrafoDiv.appendChild(cParagrafo);
    paragrafoDiv.appendChild(br);
}

