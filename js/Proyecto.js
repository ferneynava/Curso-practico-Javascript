const persona ={
    Nombre: " ",
    ingresosTotalesPersona: 1,
}

const gastos = [];


// Capacidad de endudamiento 30% y 40%
function capacidadDeEndeudamiento(){
    const Serviciosbasicos = document.getElementById("InputServiciosBasicos");
    const Alimentacion = document.getElementById("InputAlimentacion");
    const Transporte = document.getElementById("InputTransporte");
    gastos.push(Number(Serviciosbasicos.value));
    gastos.push(Number(Alimentacion.value));
    gastos.push(Number(Transporte.value));
    const ingresosTotales = document.getElementById("InputIngresos");
    const capacidadMenor = document.getElementById("InputCapacidadEndeuMenor");
    const capacidadMayor = document.getElementById("InputCapacidadEndeuMayor");
    const nombre = document.getElementById("InputNombre");
    const ingresosCliente = ingresosTotales.value;
    const ingresos = persona.ingresosTotalesPersona = ingresosCliente;
    const cliente = nombre.value;
    const nombreCliente = persona.Nombre = cliente;
    
    if(capacidadMenor.checked){
         Capacidad = 30/100;
    } else if (capacidadMayor.checked){
        Capacidad = 40/100; 
    }

    const sumaGastos = gastos.reduce(
        (valorAcumulado = 0, nuevoElemento)=>{
            return valorAcumulado + nuevoElemento;
        }    
    )
    
    const ingresosNetos = calculoIngresosNetos(Number(ingresos), sumaGastos);
    calculoCapacidadEndeudamiento(ingresosNetos, Capacidad, nombreCliente);
   
}

/// Suma de los Gastos


// Calculo ingresosNetos
function calculoIngresosNetos (Totales, Gastos){   // Esto es una funcion permite calcular los ingresos Netos
    const calculoNetos = Totales - Gastos;
    console.log("Ingresos Netos " + calculoNetos);
    return calculoNetos;
}

// Calculo CapacidadEndeudamiento
function calculoCapacidadEndeudamiento(ingresos, capacidadEndeu, nombre){
    const calculoCapacidadEndeudamiento = ingresos * capacidadEndeu;
    ResultadoCap.innerText = nombre + " tiene una capacidad de endeudamiento de " + calculoCapacidadEndeudamiento + "$"; 
    // console.log("Tiene una capacidad de endeudamiento de " + calculoCapacidadEndeudamiento);
}
 



