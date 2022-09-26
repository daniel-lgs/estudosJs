function parOuImpar(numero)
{
    if (isNaN(numero)){
        console.log('Não é um número');
    }
    else{
        for (let i = 0; i <= numero; i++){
            if (i % 2 == 0){
                console.log(i + ' é um número par');
            }
            else{
                console.log(i + ' é um número ímpar');
            }
        }
    }
}

parOuImpar(93);