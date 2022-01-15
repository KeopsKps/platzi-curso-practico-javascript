// identificando elementos
const botonCalculaPerimetroCuadrado = document.getElementById("calculaPerimetroCuadrado");
const botonCalculaAreaCuadrado = document.getElementById("calculaAreaCuadrado");

const botonCalculaPerimetroTriangulo = document.getElementById("calculaPerimetroTriangulo");
const botonCalculaAreaTriangulo = document.getElementById("calculaAreaTriangulo");

// añadiendo funciones callbacks
// Cuadrado

botonCalculaPerimetroCuadrado.addEventListener('click', calcularPerimetroCuadrado);
botonCalculaAreaCuadrado.addEventListener('click', calcularAreaCuadrado);

// Triangulo

botonCalculaPerimetroTriangulo.addEventListener('click', calcularPerimetroTriangulo)
botonCalculaAreaTriangulo.addEventListener('click', calcularAreaTriangulo)

//

function calcularPerimetroCuadrado() {
    const lado = obtenerValorInputCuadrado();
    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const lado = obtenerValorInputCuadrado();
    const area = areaCuadrado(lado);
    alert(area);
}

function obtenerValorInputCuadrado() {
    const input = document.getElementById("InputCuadrado");
    return input.value;
}

function calcularPerimetroTriangulo() {
    const lados = obtenerLadosTriangulo();
    if (validaTrianguloIsosceles(lados)) {
        const perimetro = lados["lado1"] + lados["lado2"] + lados["base"];
        alert("Perimetro triangulo", perimetro);
    }
    else {
        alert("No es un triangulo isosceles")
    }
}

function calcularAreaTriangulo() {
    const lados = obtenerLadosTriangulo();
    if (validaTrianguloIsosceles(lados)) {
        const area = (lados["base"] / 4) * Math.sqrt(4*lados["lado1"]**2 - lados["base"]**2 )
        alert("Area triangulo isosceles", area);
    }
    else {
        alert("No es un triangulo isosceles");
    }
}

function obtenerLadosTriangulo() {
    const lados = {
        "lado1" : parseFloat(document.getElementById("lado1").value),
        "lado2" : parseFloat(document.getElementById("lado2").value),
        "base" : parseFloat(document.getElementById("base").value),
    }
    return lados;
}

function validaTrianguloIsosceles(lados) {
    if (lados["lado1"]==lados["lado2"] && lados["lado1"] != lados["base"]){
        return true;
    }
    return false;
}

// formulas cuadrado

function perimetroCuadrado (lado) {
    return  lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
} 


// formulas triángulo

function perimetroTriangulo ( lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

// formulas circulo

// Radio
const radioCirculo = 4;

// Diametro
function diametroCirculo (radio){
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo (radio) { 
    return (radio * radio) * PI;
}