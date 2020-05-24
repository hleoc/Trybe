//Depois, faça uma pirâmide com n asteriscos de base

let n = 5, vazio = '', vazio2 = '', aste = '*', resul = '';

for(let x = 1; x <= n; x+=2){
    for(let y = 2; y <= n-x; y+=2){
        vazio+=' ';
    }

    for(let z = 1; z <= x; z+=1){
        resul+=aste;
    }

    for(let w = 2; w <= n-x; w+=2){
        vazio2+=' ';
    }
    console.log(vazio + resul + vazio2);
    vazio = '';
    resul = '';
    vazio2 = '';
}
