/* const p = fetch('https://dummyjson.com/products')

p.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data.products)
})
console.log(p) */

//async await

async function fetchProducts(){
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    console.log(data.products)
}

fetchProducts()