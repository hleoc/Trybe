//Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do 
//novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo.
//Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor 
//correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação deverá ser feita
//por 2. Faça isso utilizando o for e o método push.


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], novoArray = [];

for(let x = 1; x < numbers.length; x+=1){
    for(let y = 0; y < x; y+=1){
        novoArray.push(numbers[y] * numbers[x]);
    }    
}
console.log(novoArray);
