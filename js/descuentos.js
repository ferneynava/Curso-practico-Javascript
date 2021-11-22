// const precioOriginal = 120;
// const descuento = 18;

// const coupons = [
//     "Altavoz",
//     "Radio",
//     "Dron",
// ];

// Solución #3 

const coupons = [
    
    {
        name: "Altavoz",
        discount: 15,
        producto: function(){
            const imagen = new Image(500,500);
            imagen.src = "./Assets/vm-50_prm_top_pc.png";   
            document.getElementById("producto").appendChild(imagen);
        },
    },
    {
        name: "Radio",
        discount: 30,
        producto: function(){
            const imagen = new Image(500,500);
            imagen.src = "./Assets/6925281935244_5.png";   
            document.getElementById("producto").appendChild(imagen);
        },
    },
    {
        name: "Dron",
        discount: 25,
        producto: function(){
            const imagen = new Image(500,500);
            imagen.src = "./Assets/small_67b6e702e43181063b7c0f3ff393b145@2x.png";   
            document.getElementById("producto").appendChild(imagen);
        },
    },
];


function closeresultado(){
    const closer = document.getElementById("resultado");
    closer.style.display= "none";
    location.reload();
}

function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
    
}

function onClickButtonPriceDiscount(){
   
   
    
    const abrir = document.getElementById("resultado");
    abrir.style.display = "grid";
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const InputCupones = document.getElementById("InputCupon");
    const CuponValue = InputCupones.value;
    let descuento;

    // Solución #1
    // switch (CuponValue){
    //     case coupons[0]:
    //         descuento = 15;
    //         break;
        
    //     case coupons[1]:
    //         descuento = 20;
    //         break;

    //     case coupons[2]:
    //         descuento = 30;
    //         break;
    
    // }

    // Solución #2

    // if(!coupons.includes(CuponValue)){ // si muestra falso cambia a verdadero ! y se evalua verdadero
    //     alert("El cupón " + CuponValue + " no es válido");

    // } else if (CuponValue == coupons[0]){
    //     descuento = 15;
    // } else if (CuponValue == coupons[1]){
    //     descuento = 30;
    // } else if(CuponValue == coupons[2]){
    //     descuento = 25;
    // }

    // Solución #3

    // const isCouponValueValid = (coupons) =>{ // nueva forma de generar funciones 
    //     return coupons.name ===  CuponValue; //Regresame de tus coupons el .nombre que seestrictamente igual a CuponValue
    // };  

    const isCouponValueValid = function(coupons){
        return coupons.name ===  CuponValue; //Regresame de tus coupons el .nombre que seestrictamente igual a CuponValue
    };

    const userCoupon = coupons.find(isCouponValueValid);
    
    if(!userCoupon){ // si muestra falso (undefined) va a cambiar verdadero y realiza lo que est adentro del if
        const Resultado = document.getElementById("Resultado");
        Resultado.innerText = "El cupón " + CuponValue + " no es válido";

    } else {
        descuento = userCoupon.discount;
        
        const precioConDescuento = calcularPrecioConDescuento(Number(priceValue), descuento);

        const Resultado = document.getElementById("Resultado");
        Resultado.innerText = "El precio con cupon es de: $" + precioConDescuento;
        userCoupon.producto();
    }
} 