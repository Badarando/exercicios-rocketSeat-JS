// for...of

// let name = "Marcos";
// let names = ['João', 'Paulo', 'Pedro'];

// for(let name of names) {
//     console.log(name)
// }

//for...in

let person = {
    name: 'John',
    age: 30, 
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}