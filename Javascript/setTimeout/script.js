// asynchronous
setTimeout(() => {
    console.log('Hello')
} , 10000)

setTimeout(() => {
    console.log('hello 3')
})
console.log('HEllo 4') // synchronous 
console.log('Hello 5')
setTimeout(() => {
    console.log('hello 2')
}, 5000)

/* setInterval(() =>{
    console.log('Hello')
} , 2000) */