var name = process.argv[2];
var age= process.argv[3]

function person (name, age){
this.name = name
this.age = age

}

var P = new person(inputName, inputAge)

console.log('Name: ${P.name}')
console.log('Age: ${P.age}')

