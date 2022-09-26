function somarMultiplos(numero) {
    let soma = 0;

    for (let i = 0; i <= numero; i++) {
        if (i % 3 == 0) {
            soma += i;
        }
        else if (i % 5 == 0) {
            soma += i;
        }
    }

    console.log('Soma de todos os números múltiplos de 0 a ' + numero + ' - ' + soma);
}

somarMultiplos(11);