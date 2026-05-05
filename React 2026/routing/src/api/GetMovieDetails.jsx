async function getMovieDetails({params}){
    const res =await  fetch(`http://www.omdbapi.com/?apikey=a5e6060b&i=${params.movieId}`)
    const data = await res.json()
    console.log(data)
    return data
}

export default getMovieDetails