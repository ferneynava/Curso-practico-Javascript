//  const lista1 = [     1,   
//     2,
//     3,    
//      1,    
//       2,     
//       3,    
//        4,
//      2,
//      2,
//      2,
//      1,
//  ];
const listaAgregada = [

];

const lista1Count = {

};

 function closeresultado(){
     const cerrar = document.getElementById("resultado");
     cerrar.style.display= "none";
 }

function subirNumerosLista(){
    const lista1 = document.getElementById("InputLista");
    listaAgregada.push(Number(lista1.value));

    const li = document.createElement("li"); // crea un elemento html li
    const linumero = document.createTextNode(lista1.value); // crea un nuevo nodo de texto
    li.appendChild(linumero); // Añade un nuevo nodo al final de la lista de un elemento padre especificado el elemento padre es li
    const ol = document.querySelector(".listaDeNumero"); 
    ol.appendChild(li); // Añade un nuevo nodo al final de la lista de un elemento padre especificado el elemento padre es ol
}

function onClickCalcularModa(){
    const abrir = document.getElementById("resultado");
    abrir.style.display = "grid";
    calcularModa(listaAgregada);
}

function calcularModa (lista){
lista.map(
    function (elemento){
        
        if(lista1Count[elemento]) {// Si este elemento que esta recibiendo por cada iteracion de nuestro array ya existe 
                                   // como un elemento dentro de nuestro objeto
           lista1Count[elemento] += 1;  //   Sumar uno a cada una de las posiciones dentro de nuestro objetos cuando se repite 
        } else { //Cuando no existe el elemento toda via vamos a crear el elemento
            lista1Count[elemento] = 1; // solo aparece una sola vez 
        }  
        //lista1Count
        //{1: 3, 2: 5, 3: 2, 4: 1}
        //1: 3
        //2: 5
        //3: 2
        //4: 1

        //0: 1
    }
);

const lista1Array = Object.entries(lista1Count).sort(// Object.entries le podemos enviar como argumento el objeto que queremos convertir en un array. Se convirtio el objeto lista1Count en array
    //  Object.entries(lista1Count)
    // 0: Array(2)
    // 0: "1"
    // 1: 3
    // length: 2
    // 1: Array(2)
    // 0: "2"
    // 1: 5
    // length: 2
    // 2: Array(2)
    // 0: "3"
    // 1: 2
    // length: 2
    // 3: Array(2)
    // 0: "4"
    // 1: 1
    // length: 2
    function(valorAcumulado, nuevoValor){
       return valorAcumulado[1] - nuevoValor[1]; // si el valoracumulado es mas grande que nuevovalor va hacer un 1, pero si nuevoValor va hacer mas grande que valorAcumulado va hacer un -1   
                                                 //ordenar nuestro array dependiendo de la cantidad de veces en que se repitio por eso se coloco la posicion [1]
        // if(valorAcumulado < nuevoValor){
        //     return -1;
        // }
        // if(valorAcumulado > nuevoValor){
        //     return 1;
        // }
        // return 0;    
    }
);

const moda = lista1Array[lista1Array.length - 1];
Resultado.innerText = "La moda de los números agregados es: " + moda[0];
}