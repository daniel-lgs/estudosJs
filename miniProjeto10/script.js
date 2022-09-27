function mostrarPrimos(numero) {
    if (typeof (numero) != 'number' || numero == 0) {
        console.log('Insira um número positivo ou negativo e não nulo.');
    }
    else if (numero > 0) {
        let aux = 0;
        for (let i = 1; i <= numero; i++) {
            for (let x = 1; x <= i; x++) {
                if (i % x == 0) {
                    aux++;
                }
            }
            if (aux == 2) {
                console.log(i + ' é primo');
            }
            else {
                //console.log(i + ' não é primo');
            }
            aux = 0;
        }
    }
    else if (numero < 0) {
        let aux = 0;
        for (let i = -1; i >= numero; i--) {
            for (let x = -1; x >= i; x--) {
                if (i % x == 0) {
                    aux++;
                }
            }
            if (aux == 2) {
                console.log(i + ' é primo');
            }
            else {
                //console.log(i + ' não é primo');
            }
            aux = 0;
        }
    }
}

mostrarPrimos(20);