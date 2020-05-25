//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

let n = 5, total = 0;

function soma (n){
    for(let c = 1; c <= n; c+=1){
       total+=c; 
    }
    return total;
}
console.log(soma(n));