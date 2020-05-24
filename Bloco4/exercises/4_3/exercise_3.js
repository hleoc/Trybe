//Agora inverta o lado do triângulo do exercício 2.

let n = 5, espaco = '', nome = '*', resultado = '';

for(let x = 1; x <= n; x+=1){
    for(let y = 0; y < n-x; y+=1){
        espaco+= ' ';
    }

    for(let z = 0; z < x; z+=1){
        resultado += nome;
    }
    console.log(espaco + resultado);
    espaco = '';
    resultado = '';
}


