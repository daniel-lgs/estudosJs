// Função que descobre valor entre dois números

let num1 = 145;
let num2 = 12;
let maior;

function descobreMaior(num1, num2){
    let maior;
    
    if(num1 > num2){
        maior = num1;
    }
    else if(num2 > num1){
        maior = num2;
    }
    else{
        maior = false;
    }
    
    return maior;
}

maior = descobreMaior(num1, num2);

console.log('Maior número é :' + ' ' + maior);