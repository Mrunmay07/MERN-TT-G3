const fruits = ['apple' , 'mango' , 'banana' , 'orange']

// Normal for loop
/* for(let i = 0 ; i<fruits.length ; i++){
    console.log(fruits[i])
} */

for(let fruit of fruits){
    console.log(fruit)
}

const users = {
    firstName : 'Akash',
    lastName : 'Singh'
}

for(let user in users){
    console.log(users[user])
}

fruits.forEach((fruits) => {
    console.log(fruits)
})