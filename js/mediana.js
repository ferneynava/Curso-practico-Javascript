 const lista1 = [

 ];

 function closeresultado(){
    const cerrar = document.getElementById("resultado");
    cerrar.style.display = "none";
 }

function subirNumerosLista(){
    const numeros = document.getElementById("InputLista");
    lista1.push(Number(numeros.value));

    const li = document.createElement("li");
    const lisueldo = document.createTextNode(numeros.value);
    li.appendChild(lisueldo);
    const ol = document.getElementById("listaDeSueldos");
    ol.appendChild(li);
}

function onClickCalcularMediana(){
    const abrir = document.getElementById("resultado");
    abrir.style.display= "grid";
    calcularMediana(lista1);
}


function comparar (a,b){
     return a - b;
 }

function calcularMediana(lista){
     lista.sort(comparar);

    const mitadLista1 = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista1 - 1];
        const elemento2 = lista[mitadLista1];
        
        const promedioElmento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        // return promedioElmento1y2;

        Resultado.innerText = "La mediana de los sueldos es de: " + promedioElmento1y2;
        
   } else {
    //    return lista[mitadLista1];
       Resultado.innerText = "La mediana de los sueldos es de: " +  lista[mitadLista1];
   }
}

function calcularMediaAritmetica(lista){
    lista.sort(comparar);

    const sumaLista = lista.reduce(//Ejecuta una funcion reductora sobre cada elemento de un array, 
                                  //devolviendo como resultado un unico valor. Eje: Reduce suma cada uno de los elementos, recibe el primer elemento y lo sumamos con el segundo luego el segundo con el tercero 
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );   
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}
