const array = [35, 36, 37, 38, 39, 40];

function calcularMedia(vetor) {
    let media = 0;

    for (let i = 0; i < vetor.length; i++) {
        media += vetor[i];
    }

    media = media / vetor.length;

    console.log(media);
}

calcularMedia(array);