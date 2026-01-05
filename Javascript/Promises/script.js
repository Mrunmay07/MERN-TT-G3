const p = new Promise((resolve , reject) => {
    resolve('Hello')
})

console.log(p)


// Promise -> object that tell the eventual completion or failure of any asynchronous task
// Promise State
// pending (default)
// fullfilled
// rejected

// resolve('hi')
// PromiseResult : 'hi'

// .then() .catch()
// .then((data) => {console.log(data)})
// .catch()

