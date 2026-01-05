const user = {
    firstName : 'Pratham',
    lastName : 'Kumar',
    age : 20
}

/* console.log(user.firstName)
console.log(user.lastName)
console.log(user['age']) */

// Object Destructuring
const {firstName , lastName , age} = user
console.log(firstName)
console.log(age)

// Array Destructuring
const fruits = ['apple' , 'mango' , 'orange']

/* console.log(fruits[1]) */

const [fruit1 , ,  fruit2] = fruits
console.log(fruit1)
console.log(fruit2)