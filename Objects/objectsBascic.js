const personOne = {
    name: 'Jhonata',
    lastName: 'Figueredo',
    age: 21,
}

const personTwo = {
    name: 'Nayara',
    lastName: 'Sudre',
    age: 23,
}

function createPerson(name, lastName, age) {
    return {
        name: name,
        lastName: lastName,
        age: age,

    incrementAge(){
        this.age++
    },

    getAge(){
        return this.age
    }
    }
}

const personThree = createPerson('Valmir', 'Carvalho', 48)

console.log(`Ola, me chamo ${personOne.name} ${personOne.lastName} e tenho ${personOne.age} anos de idade.`)
console.log(`Ola, me chamo ${personTwo.name} ${personTwo.lastName} e tenho ${personTwo.age} anos de idade.`)
console.log(`Ola, me chamo ${personThree.name} ${personThree.lastName} e tenho ${personThree.age} anos de idade.`)

personThree.incrementAge()
personThree.incrementAge()
console.log(personThree.getAge(), 'Anos')
