// Velocidade máxima -> 70km/h
// A cada 5km ultrapassados -> +1 ponto na carteira
// Carteira suspensa -> mais de 12 pontos

function radarDeVelocidade(velocidade){
    let pontos = 0;
    let limite = 70;
    let aux = 1;

    if(isNaN(velocidade)){
        console.log('Velocidade inválida');
    }
    else {
        if(velocidade <= limite){
            console.log('Velocidade dentro do padrão.');
        }
        else{
            for(let i = 1; i <= velocidade - limite; i++){
                if (aux == 5){
                    aux = 1;
                    pontos++;
                }
                else{
                    aux++;
                }
            }
            if(pontos <= 12){
                console.log('Infração de trânsito com' + ' ' + pontos + ' ' + 'ponto(s) na carteira.');
            }
            else{
                console.log('Carteira suspensa.');
            }
        }
    }
}

radarDeVelocidade(120);