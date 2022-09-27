function devolverEmAsterisco(numero) {
    let asteriscos = '';

    if (numero > 0) {
        for (let i = 0; i < numero; i++) {
            asteriscos += '*';
            console.log(asteriscos);
        }
    }
    else {
        console.log('Precisa ser um número acima de 0.');
    }
}

devolverEmAsterisco(15);