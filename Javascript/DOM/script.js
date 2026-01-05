const card = document.querySelector('.card')
const container = document.querySelector('.container')
const addButton = document.querySelector('button')

console.log(card)
/* 
const newCard = card.cloneNode(true)
container.appendChild(newCard)
console.log(newCard) */
let count = 0;
addButton.addEventListener('click' , () => {
    count++;
   /*  card.classList.add('active') */
   /* const newCard = card.cloneNode(true)
   newCard.innerText = count;
   container.appendChild(newCard)
   console.log(newCard) */
   const newCard = document.createElement('div')
   newCard.classList.toggle('card')
   newCard.innerText = count
   container.appendChild(newCard)
   console.log(newCard)
})