let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

let A = varB;
let B = varC;
let C = varA;

// Forma do professor

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)