//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'], maior = '';

function nomeMaior(){
    maior = array[0];
    for(let indice in array){
        if(maior.length < array[indice].length){
            maior = array[indice];
        }
    }
    return maior;
}

console.log(nomeMaior());