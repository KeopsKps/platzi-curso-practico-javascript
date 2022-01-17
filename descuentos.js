// Identificando elementos
const botonCalculaDescuento = document.getElementById("CalculaDescuento");


// añadiendo funciones callbacks
botonCalculaDescuento.addEventListener('click', onClickButtonPriceDiscount);

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerHTML = "EL precio con descuento son: $" + precioConDescuento;

}

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}