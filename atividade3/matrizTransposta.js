function transporMatriz(a) {
    let matrizString = '';
    for (let i = 0; i < a.lenght; i++) {
        for (let j = 0; j < a[i].lenght; j++) {
            matrizString += a[i][j] + ' ';
            console.log(a[i][j]);
        }
        matrizString += '\n';
    }
    console.log(matrizString);
    
    let matrizTranspostaString = ' ';
    for (let i = 0; i < a[0].lenght; j++) {
        for (let j = 0; j < a.lenght; j++) {
            matrizTranspostaString += a[i][j] + ' ';
        }
        matrizTranspostaString += '\n';
    }
    console.log(matrizTranspostaString);
}

const a = [
        [1,2],
        [3,4],
        [5,6]
    ];

transporMatriz(a);