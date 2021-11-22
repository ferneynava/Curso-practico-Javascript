function closeresultado(){
    const close= document.getElementById("resultado");
    close.style.display = "none";
}

// Código del Cuadrado 
console.group("Cuadrado"); //Agrupar mensajes o console.log
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
return lado * 4; 
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado (lado) {
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd(); //Finalizar agrupación 

// Código del tríangulo 
console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triangulo miden: "
//     + ladoTriangulo1
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );

// const alturaTriangulo = 5.5; 
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm ") 


function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
 
function areaTriangulo (base, altura){
 return (base * altura) / 2;
}

// console.log("El are del cuadrado es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Código del Círculo
console.group("Círculo");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diametro 
function diametroCirculo (radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia 
function perimetroCirculo (radio){
   const diametro = diametroCirculo(radio);
   return diametro * PI;
}

// Área
function areaCirculo (radio){
     return (radio * radio) * PI; 

}

console.groupEnd();

// Código del triangulo isósceles
console.group("Altura triangulo isósceles");

function AlturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase){

     if(trianguloGrandeLadoA != trianguloGrandeLadoB){
        console.log("Los lados a y b no son iguales");
     } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase =  trianguloGrandeLadoA;

        const trianguloPequenoLadoBCudrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;
        
        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCudrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
    
}

console.groupEnd();

// Aquí interactuamos con el HTML
function resultado(){
    const abrir = document.getElementById("resultado");
    abrir.style.display = "grid";
}

function calcularPerimetroCuadrado(){
    resultado();
    const input = document.getElementById("InputCuadrado");//Dentro de nuestro HTML(document) estamos buscando al elemento de la etiqueta que tenga el Id
    const value = input.value;
    const perimetro = perimetroCuadrado(Number(value)); 
    resultadotext.innerText = "El perímetro del cuadrado es de " + perimetro;
    //alert(perimetro);
}

function calcularAreaCuadrado(){
    resultado();
    const input = document.getElementById("InputCuadrado");//Dentro de nuestro HTML(document) estamos buscando al elemento de la etiqueta que tenga el Id
    const value = input.value;

    const area = areaCuadrado(Number(value)); 
    resultadotext.innerText = "El área del cuadrado es de " + area;
}

function calcularPerimetroTriangulo(){
    resultado();
    const lado1 = document.getElementById("InputLado1");
    const lado2 = document.getElementById("InputLado2");
    const base = document.getElementById("InputBase");
    const ladosBases = [Number(lado1.value), Number(lado2.value), Number(base.value)];

    const perimetro = perimetroTriangulo(ladosBases[0], ladosBases[1], ladosBases[2]);
    resultadotext.innerText = "El perimetro del triangulo es de " + perimetro;
}

function calcularAreaTriangulo(){
    resultado();
    const base = document.getElementById("InputBase");
    const altura = document.getElementById("InputAltura");

    const area = areaTriangulo(Number(base.value), Number(altura.value));
    resultadotext.innerText = "El área del triangulo es de " + area;

}

function calcularDiametroCirculo(){
    resultado();
    const radio = document.getElementById("InputRadio");
    const radios = radio.value;

    const diametro = diametroCirculo(Number(radios));
    resultadotext.innerText = "El diametro del circulo es de " + diametro;
}

function calcularPerimetroCirculo(){
    resultado();
    const radio = document.getElementById("InputRadio");
    const radios = radio.value;
    const perimetro = perimetroCirculo(Number(radios));
    resultadotext.innerText = "El perímetro del circulo es de " + perimetro.toFixed(2);
}

function calcularAreaCirculo(){
    resultado();
    const radio = document.getElementById("InputRadio");
    const radios = radio.value;
    const area = areaCirculo(Number(radios));
    resultadotext.innerText = "El área del circulo es de " + area.toFixed(3);
}

function calcularAlturaTrianguloIsosceles(){
    resultado();
    const ladoA = document.getElementById("LadoA");
    const ladoB = document.getElementById("LadoB");
    const baseI = document.getElementById("BaseI");
    const ladosA = ladoA.value;
    const ladosB = ladoB.value;
    const basesI = baseI.value;
    const alturaI = AlturaTrianguloIsosceles(Number(ladosA), Number(ladosB), Number(basesI));
    resultadotext.innerText = "La altura del triangulo Isosceles es de " + alturaI.toFixed(3);
} 

