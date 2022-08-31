/*
Jhonata tem 20 anos, pesa 90 kg, tem 1.85 de altura e seu IMC é de 25.00000

Jhonata nasceu no ano de 2002
*/

const nome = "Jhonata";
const sobrenome = "Figueredo";
const idade = 20;
const peso = 90;
const alturaM = 1.85;
let imc;
let anoNascimento;

imc = peso / (alturaM * alturaM)
anoNascimento = 2022 - idade

// template string
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`)
console.log(`tem ${alturaM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu no ano de anoNascimento`)


