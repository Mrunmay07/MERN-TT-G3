/* let user1 = {
    firstName : 'Akash'
} // 123
 
//Spread Operator
let user2 = {...user1} // 124
user2.firstName = 'Ansh'
console.log(user1)
console.log(user2) */

//c = [2 , 3 , 56] 
function sum(a , b, ...c){
    let total = a + b; //  8 + 2  + 3
    for(let num of c){
        total += num
    }
    return total
}

const result = sum(3 , 5 , 2 , 3 , 56)
console.log(result)