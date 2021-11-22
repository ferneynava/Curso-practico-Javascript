const colombia = [];
let li;
let lielementos;
let ol;

function eliminarElemento(){
    colombia.pop();
    ol.removeChild(li);
}

function agregarElemento(){
    const nombre = document.getElementById("InputNombre");
    const salario = document.getElementById("InputSalario");
    const nombreEmpleado  = nombre.value;
    const salarioEmpleado = Number(salario.value);
    
    colombia.push({
        name: nombreEmpleado,
         salary: salarioEmpleado,
    });


    li = document.createElement("li");
    lielementos = document.createTextNode("Nombre: "+ nombreEmpleado + " Salario: " + salarioEmpleado);
    li.appendChild(lielementos);
    ol = document.getElementById("listaDeSalarios");
    ol.appendChild(li);
}





