//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let array = [2, 3, 2, 5, 8, 2, 3], repete = 0, c = 0, indexRepetido = 0;

function maisRepete(){
    for(let chave in array){
        let verificaNumero = array[chave];
        for(let chave2 in array){
            if (verificaNumero === array[chave2]){
                c+=1;
            }
        }
        if(c > repete){
            repete = c;
            indexRepetido = chave;
        }
        c = 0;
    }
    return array[indexRepetido];
}

console.log(maisRepete());