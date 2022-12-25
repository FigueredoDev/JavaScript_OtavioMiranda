const students = ['Jhonata', 'Nayara', 'Jhully', 'Daniel', 'Valmir']

students.shift() // Remove o Primeiro elemento
students.pop() // Remove o ultimo elemento 
students.unshift('Primeiro estudante') // Adiciona ao inicio do array
students.shift()

console.log(students.slice(0, 2))

students[students.length] = 'Arthur' // Adiciona dados ao fim do array
students.push('João') // Adicionar no fim
