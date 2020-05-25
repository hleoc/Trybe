//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let array = [2, 4, 6, 7, 10, 0, -3], menor = 0;

function menorValor(){
    for(let indice in array){
        if(array[menor] > array[indice]){
            menor = indice;
        }
    }
    return menor;
}

console.log(menorValor());