const container = document.querySelector('.container')


/* const p = fetch('https://dummyjson.com/products')
p.then((res) => {
    return res.json()
})
.then((data) => {
    const products = data.products
    console.log(products)
    products.forEach((product) => {
       const card = document.createElement('div') 

       card.classList.add('card')
       card.innerHTML = `
        <img src=${product.images[0]} alt="">
            <h1>${product.title}</h1>
            <p>${product.description}</p>
            <b>Price : ${product.price}</b>
            <button>Add to Cart</button>
       `
        container.appendChild(card)

    })
}) */

// <div class='card'>
// </div>



async function loadProducts(){
    const res =await fetch('https://dummyjson.com/products' )
    const data = await res.json()
   const products = data.products

   products.forEach((product) => {
        const card = document.createElement('div') 
         card.classList.add('card')
         card.innerHTML = `
        <img src=${product.images[0]} alt="">
            <h1>${product.title}</h1>
            <p>${product.description}</p>
            <b>Price : ${product.price}</b>
            <button>Add to Cart</button>
       `
       container.appendChild(card)
   })
}

loadProducts()