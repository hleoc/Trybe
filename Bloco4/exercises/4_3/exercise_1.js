//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1,
//imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let n = 5, nome = '*', resultado = "";
    
        for (let x = 1; x <= n; x+=1){
            for(let y = 0; y < n; y+=1){
                resultado = resultado + nome;               

            }   
            console.log(resultado);
            resultado = '';
        
        }
        
