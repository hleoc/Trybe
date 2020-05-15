//Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], posicao;

for (let x = 1; x < numbers.length; x++) {
    for (let y = 0; y < x; y++) {
        if (numbers[y] < numbers[x]) {
            posicao = numbers[x]
            numbers[x] = numbers[y]
            numbers[y] = posicao  
        }
    }
}
console.log(numbers);