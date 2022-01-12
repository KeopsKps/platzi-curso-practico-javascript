// Codigo del cuadrado

console.group("Cuadrado");

function perimetroCuadrado (lado) {
    return  lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
} 

console.groupEnd();

// Codigo del triángulo

console.group("Triangulo");

function perimetroTriangulo ( lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

// Codigo del circulo

console.group("Circulos");

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

console.groupEnd();


function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}