const numero = 456;
const numeroString = "456"

/* comparando tipos */
console.log(numero === numeroString)
/* comparando valores */
console.log(numero == numeroString)
/* transformou tudo em string concatenacao de tipos diferentes */
console.log(numero + numeroString)
/*forcando respeitar tipo number */
console.log(numero + Number(numeroString))