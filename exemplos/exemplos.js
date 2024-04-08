const nome = "João" //string - cadeia de texto
let anosdevida = 25 //número inteiro - int 
let empregado = true //dado booleano - true ou false
let salario = 2324.5 //número decimal - "float"

console.log (nome); /*irá mandar uma mensagem para o usuário*/

let numeros = [1, 2, 3, 4, 5]; //array de números
let nomes = ['João', 'José', 'Ana']; //array de strings

function somar(a, b) { //criou duas variáveis a e b
    return a + b; //função: retornar a soma de a com b
  }
  let resultado = somar(5, 3); //resultado: 8

if (condition) {
    //bloco de código para quando a condição for verdadeira
}

if (condition) {
    //bloco de código para quando for verdadeiro
} else {
    //bloco de código para quando for falso
}

let idade = 16;

if (idade >= 18) {
    console.log ("Seu voto é obrigatório");
} elseif (idade >=16 && idade <= 17);{
    console.log ("Você pode votar, mas seu voto não é obrigatório");
}

let num1 = 10
let num2 = 5

console.log (num1 + num2); //resultado: 15
console.log (num1 - num2); //resultado: 5
console.log (num1 * num2); //resultado: 50
console.log (num1 / num2); //resultado: 2
console.log (num1 % num2); //resultado: 0

let num = 5;
num += 3; //num agora vale 8
num -= 2; //como num agora é 8, o resultado é 6
num *= 4; //como num agora é 6, o resultado é 24
num /= 3; //como num agora é 24, o resultado é 8

let a = 10;
let b = 5;
console.log(a == b); //false 
console.log(a != b); //true 
console.log(a > b); //true 
console.log(a <= b); //false 



let c = "10"
console.log (a === c); /*false, pois o tipo de dado de "a" é int (inteiro),
                       e o de "c" é string (cadeia decaracteres)*/
console.log (a !== c); /*true, pois os tipos de dados são diferentes*/ 

let age = 25;
let possuiCarteira = true;
console.log(idade > 18 && possuiCarteira); //true (idade é maior que 18 e possui carteira)
console.log(idade < 18 || possuiCarteira); //true (idade é menor que 18 ou possui carteira)
console.log(!possuiCarteira); //false (inverteu o valor de possuiCarteira)

let i = 1
while (i <= 5) {
    console.log (i); //mesmo exemplo do anterior
    i++;
}

let x = 10
while (x >= 1) {
    x-- //aqui x vai diminuir de 1 em 1
    console.log (x);
}

for (let i = 1; i <= 5; i++) {
    console.log (i);
    i++; //vai mostrar os números de 1 a 5
}


while (numero <= 5) {
    console.log (numero);
    numero++;
}
let y = 1
do {
    console.log (y);
    y++;
} while (y <= 5);

document.write ("Olá mundo!")