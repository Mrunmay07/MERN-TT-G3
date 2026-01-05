const form = document.querySelector('form')
const addButton = document.querySelector('.add-btn')
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')
const container = document.querySelector('.container')

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    
    const title = input.value
    const desc = textarea.value
  

    const card = document.createElement('div')
    card.classList.add('note-card')
    card.innerHTML  = `
        <h1>${title}</h1>
        <p>${desc}</p>
        <button>Delete</button>
        <button>Edit</button>
    `
    container.appendChild(card)
    console.log(card)
})

