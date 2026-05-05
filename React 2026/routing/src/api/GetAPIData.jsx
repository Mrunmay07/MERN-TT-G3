async function getMoviesData(){
    const res =await  fetch('http://www.omdbapi.com/?apikey=a5e6060b&s=Batman')
    const data = await res.json()
    return data
}

export default getMoviesData