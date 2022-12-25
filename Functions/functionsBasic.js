function sumValues (x = 1, y = 1){
    return x + y
}

console.log(sumValues(10, 10))

// Anonima
const multipleValues = function (x, y){
    return x * y
}

const arrowFunction = (n) => {
    return `Arrow Function example, value: ${n}`
}

console.log(multipleValues(10, 10))
console.log(arrowFunction(10))