//Trocando valores de variáveis

let num1 = 89;
let num2 = 34;

console.log('Antes da troca o primeiro número é' + ' ' + num1 + ' ' + 'e o segundo é' + ' ' + num2);

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log('Depois da troca o primeiro número é' + ' ' + num1 + ' ' + 'e o segundo é' + ' ' + num2);