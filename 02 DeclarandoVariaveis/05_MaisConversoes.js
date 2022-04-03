
let atelefone = 12341234;
console.log("O telefone é " + String(atelefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let btelefone = 12341234;
console.log("O telefone é " + btelefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

 let usuarioConectado = false;
 console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
 usuarioConectado = true;
 console.log(String(usuarioConectado)); // agora teremos uma string “true”.





 /* Formatos numerricos  */
 // Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

let alargura = "10";
let aaltura = "5";
console.log( + alargura * + aaltura); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado2 = false;
console.log(Number(usuarioConectado2)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado2 = true;
console.log(Number(usuarioConectado2)); // agora teremos a conversão de true (verdadeiro) para o número 1.