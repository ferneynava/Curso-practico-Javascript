const lista1 = [];

function closeresultado(){
    const close = document.getElementById("resultado");
    close.style.display = "none"; // propiedad de visualización establece el tipo de visualización del elemento. None= Este display es utilizado para ocultar elmentos sin eliminarlos por completo
}

function subirNota(){
    const lista = document.getElementById("InputNotas");
    lista1.push(Number(lista.value));

    const li = document.createElement("li");  // crea un elemento html li
    const linota = document.createTextNode(lista.value); // crea un nuevo nodo de texto
    li.appendChild(linota); // Añade un nuevo nodo al final de la lista de un elemento padre especificado el elemento padre es li 
    const ol = document.getElementById("listaDeNotas");
    ol.appendChild(li); // Añade un nuevo nodo al final de la lista de un elemento padre especificado el elemento padre es ol
}

function calcularPromedio(){
    const abrir = document.getElementById("resultado");
    abrir.style.display = "grid";
    calcularMediaAritmetica(lista1);

}

function calcularMediaAritmetica(lista){
   // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(//Ejecuta una funcion reductora sobre cada elemento de un array, 
                                  //devolviendo como resultado un unico valor. Eje: Reduce suma cada uno de los elementos, recibe el primer elemento y lo sumamos con el segundo luego el segundo con el tercero 
        function (valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado + nuevoElemento;
        }
    );   
    const promedioLista = sumaLista / lista.length;
    const promedio = promedioLista.toFixed(2);
    Resultado.innerText = "es " + promedio;
}