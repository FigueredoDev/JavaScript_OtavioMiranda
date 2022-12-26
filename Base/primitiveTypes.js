/* 
Primitivos (imutáveis) - string, number, boolean, undefined
null(bigint, symbol)- Valores copiados

Referencia (mutável) - array, object, function - Apontam pro mesmo lugar na memoria
*/

// Passados por referencia
let a = [1, 2];
let b = a;
let c = [...a]; // Copia do array A

console.log(a, b);

a.push(3, 4);
console.log(a, b);

b.pop();
console.log(a, b);

console.log("array C:", c);
