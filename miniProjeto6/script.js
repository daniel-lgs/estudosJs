let pessoa = {
    nome: 'Daniel',
    idade: 30,
    mae: 'Miriam',
    pai: 'Josué',
};

function descobrirString(objeto) {
    let numSrings = 0;

    for (let indice in objeto) {
        if (typeof (objeto[indice]) == 'string') {
            console.log(indice + ' - ' + objeto[indice]);
            numSrings++;
        }
    }

    console.log('Número de strings no objeto - ' + numSrings);
}

descobrirString(pessoa);