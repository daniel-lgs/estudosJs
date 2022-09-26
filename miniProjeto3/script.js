function fizzBuzz(numero){
    let resultado;

    if(isNaN(numero)){
        resultado = 'Não é um número';
    }
    else{
        if(numero % 3 == 0 && numero % 5 == 0){
            resultado = 'FizzBuzz';
        }
        else if(numero % 3 == 0){
            resultado = 'Fizz';
        }
        else if(numero % 5 == 0){
            resultado = 'Buzz';
        }
        else{
            resultado = numero;
        }
    }

    return resultado;
}

console.log(fizzBuzz(15));