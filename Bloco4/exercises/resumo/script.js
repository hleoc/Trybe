//let corSelecionado = null//para resetar o valor. redefinir o valor.
//let sobrenome = undefined //sem definição. sem tipo.
//
//let maiorDeIdade = false;
//let possuiCarteiraDeTrabalho = true;
//let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
//console.log('Candidato está apto para aplicar prova? ' + podeAplicar);
//let candidatoRecusado = !podeAplicar;//para negar
//console.log('Canditato foi recusado? ' + candidatoRecusado);

//IF / ELSE
//se hora estiver entre 6 e 12: bom dia!
//se estiver entre 12 e 18: boa tarde!
//caso contrário: boa noite!
//let hora = 19;
//
//if (hora > 6 && hora < 12) {
//    console.log("Bom dia!");
//}else if(hora > 12 && hora < 18){
//    console.log('Boa tarde!');
//}else{
//    console.log('Boa noite!');
//}

//SWITCH / CASE
//let permissao;//usuario comum, gerente, diretor
//permissao = 'diretor';
//switch(permissao){
//    case 'comum':
//    console.log('Usuário comum');
//    break;
//
//    case 'gerente':
//    console.log('Usuario gerente');
//    break;
//
//    case 'diretor':
//    console.log('Usuário diretor');
//    break;
//
//    default:
//    console.log('Usuário não reconhecido!');
//
//}
//ACEITAR A STRING MINUSCULA OU MAIUSCULA
//var peca = 'torre';
//var movimento = peca.toLowerCase();

//let nota = 90;
//
//switch(nota){
//    case (nota >= 90) && (nota <= 100):
//        console.log('Conceito A');
//        break;
//    
//    case (nota >= 80) && (nota < 90):
//        console.log('Conceito B');
//        break;
//    
//    case (nota >= 70) && (nota < 80):
//        console.log('Conceito C');
//        break;    
//    
//    case (nota >= 60) && (nota < 70):
//        console.log('Conceito D');
//        break;    
//    
//    case (nota >= 50) && (nota < 60):
//        console.log('Conceito E');
//        break;    
//    
//    case (nota >= 0) && (nota < 50):
//        console.log('Conceito F');
//        break;    
//    
//    default:
//        console.log('Erro. Digite uma nota entre 0 e 100.');
//
//}

//let custoProduto = 70, valorVenda = 100, lucroLiquido;
//
//if (custoProduto !== 0 && valorVenda !== 0){
//    lucroLiquido = (valorVenda - custoProduto - (custoProduto * 0.20)) * 1000;
//    console.log(lucroLiquido);
//
//} else {
//    console.log('ERRO!! Digite um valor dirente de zero');
//}

//ARRAYS
//var nomeDoArray = ['João', 30, {nome: 'mundão'}, ['dados',['outro']]];
//var EXEMPLO = 2;
//console.log(nomeDoArray[0]);
//console.log(nomeDoArray[EXEMPLO].nome);
//console.log(nomeDoArray[3][0]);
//console.log(nomeDoArray[3][1][0])

//let numero = 7;
//
//for (var contador = 1; contador <= 9; contador+=1) {
//    console.log("");
//    console.log(numero + " * " +  contador + " = " + (numero * contador))
//}

//let nome = '*', resultado='', vazia = " ";
//for (let c = 1; c < 5; c+=1) {
//    resultado+=nome;       
//}
//console.log(resultado);

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], aux;
//
//for (let c = 1; c < numbers.length; c+=1){
//    for(let a = 0; a < c; a+=1){
//        if (numbers[a] < numbers[c]) {
//            aux = numbers[a];
//            numbers[a] = numbers[c];
//            numbers[c] = aux;
//        }
//    }
//}
//
//console.log(numbers);


//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], aux;
//
//for(let x = 1; x < numbers.length; x+=1){
//    for(let y = 0; y < x; y+=1){
//        if(numbers[y] > numbers[x]){
//            aux = numbers[y];
//            numbers[y] = numbers[x];
//            numbers[x] = aux;
//        }
//    }
//}
//console.log(numbers);


//let n = 5, espaco = '', aste = '*', resul = '';
//
//for(let x = 1; x <= n; x+=1){
//    for(let y = 0; y < n-x; y+=1){
//        espaco+=' ';
//    }
//
//    for(let z = 0; z < x; z+=1){
//        resul+=aste;
//    }
//    console.log(espaco + resul);
//    espaco = '';
//    resul = '';
//
//}

let n = 5, aste = '*', resul = '';

for (let x = 1; x <= n; x+=2) {
    resul+=aste;
    console.log(resul);
}




















