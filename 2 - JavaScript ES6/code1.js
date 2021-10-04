

// Unary elements são operações representada por uma palavra "typeof" cujo retorno fornece o tipo do valor.

let elementos = ['text', 23 , null];

console.log(` Elemento do tipo: ${typeof elementos[0]}, elemento : ${typeof elementos[1]}, elemento:  ${typeof elementos[2]}`);

// binary elements são operadores que retornam valores lógicos do tipo: verdadeiro ou falso.

console.log ( 2+3 > 7 && 10 > 4);

// ternary elements são operadores que retornam um valor caso a operação seja true or false.

console.log(true ? "ok" : "bad");

console.log(false ? "ok" : "bad");

// == & === , o javascript tenta converter os valores de acordo com certas regras estabelecidas na operção

console.log ( false == 0);
console.log (false === 0);
console.log ('5' - 4 == 1);
console.log ('5' + 4 == 9);

// peculiaridades || and && . retorna o valor da esquerda quando o mesmo pode ser convertido para booleano 
//e o valor da direita quando for o contrário.
// obs : null , 0 and " " retornam false.


var teste = "";
var substituto = "coringa";
console.log( teste || substituto);

// && . retorna o valor da esquerda for falso retorna o valor contido nele.

console.log( 0 && substituto);




