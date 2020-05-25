//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false, se não for.

let palavra;

function verificaPalindromo(palavra){
    let arrayPalavra = palavra.split('');
    let isPalindromo = true;
    for(let chave in arrayPalavra){
        if(arrayPalavra[chave] != palavra[(palavra.length - 1) - chave]){
            isPalindromo = false;
        }
    }
    return isPalindromo
}
console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));



