//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array = [2, 3, 6, 7, 10, 1], maior = 0;

function maiorValor(){
    for(let chave in array){
        if(array[maior] < array[chave]){
            maior = chave
        } 
    }           
    return maior;
}

console.log(maiorValor());