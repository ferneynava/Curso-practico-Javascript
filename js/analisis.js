function closeresultado(){
    const close = document.getElementById("resultado");
    close.style.display = "none";
}

function esPar(numerito){
    return (numerito % 2 === 0); // Retorna un true o false, no hay necesidad de utilizar el if
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(//Ejecuta una funcion reductora sobre cada elemento de un array, 
                                  //devolviendo como resultado un unico valor. Eje: Reduce suma cada uno de los elementos, recibe el primer elemento y lo sumamos con el segundo luego el segundo con el tercero 
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );   
    const promedioLista = sumaLista / lista.length;
return promedioLista;
}

//  Calculadora de mediana 
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
      const personitaMitad = lista[mitad];
      return personitaMitad;
    }
}

/// Mediana General 
function calcularMediaSalarial(){
    const abrir = document.getElementById("resultado");
    abrir.style.display = "grid";
    
    const salariosCol = colombia.map(function(personita){
        return personita.salary;
    });
    
    const salariosColSorted = salariosCol.sort(function(salaryA, salaryB){
        return salaryA-salaryB;
    });
    
const medianaGeneralCol = medianaSalarios(salariosColSorted);
Resultado.innerText = "La mediana salarial es de " + medianaGeneralCol;
}


/// Mediana del top 10%

// const arrayEjemplo =[0,1,2,3,4,5,6,7,8,9,10];
// const ejemplo = arrayEjemplo.splice(5, 2);
// console.log(ejemplo); //[5,6];
function calcularMediaSalarialTop(){
    const abrir = document.getElementById("resultado");
    abrir.style.display ="grid";

    const salariosCol = colombia.map(function(personita){
        return personita.salary;
    });
    
    const salariosColSorted = salariosCol.sort(function(salaryA, salaryB){
        return salaryA-salaryB;
    });

    const spliceStart = (salariosColSorted.length * (100 - 10)/100);
    const spliceCount = salariosColSorted.length - spliceStart;
    
    const salariosColTop10 = salariosColSorted.splice(
        spliceStart,
        spliceCount,
    );
    
const medianaTop10Col = medianaSalarios(salariosColTop10);
Resultado.innerText = "El top 10% de la mediana salarial es de " + medianaTop10Col;
}




