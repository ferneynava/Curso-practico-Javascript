//const lista =[2,3,4,5];

function array (){
const productos = document.getElementById("Inputmedia");

const lista = productos.value.split(",");
    
    for(var i=0; i< lista.length; i++){
        const li = document.createElement("li");
        const lifactor = document.createTextNode(lista[i]);
        li.appendChild(lifactor);
        const ol = document.getElementById("factores");
        ol.appendChild(li);
    }

return listaArray = lista;
}

function onClickButtonMediaGeo(){
const lista = array();
    var listas = lista.map(function (a){
        return parseInt(a);
    })
mediaGeometrica(listas);
}

function mediaGeometrica (lista) {
const base = lista.reduce((a,b) =>  a * b); 

const mediaGeometrica = Math.pow(base, (1/lista.length));

const mediaGeometricaConRedondeo = Math.round(mediaGeometrica);

const resultP = document.getElementById("ResultMe");
resultP.innerText = "La media Geometrica es: " + mediaGeometricaConRedondeo; 
}