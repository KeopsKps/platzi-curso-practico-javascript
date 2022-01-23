function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento ) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const lista1 = [100,400, 200, 500, 40000000000];

lista1.sort((a, b) => a-b);

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    }
    return false;
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1]
    mediana = calcularMediaAritmetica([elemento1, elemento2])
}
else {
    mediana = lista1[mitadLista1];
}