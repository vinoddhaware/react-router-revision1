import axios from "axios";

const api = axios.create({
    baseURL: 'https://www.omdbapi.com'
})

export const getMovieApi = (next, movieSearch) =>{

    
    console.log(movieSearch);
    console.log(next);
    

    return api.get(`/?i=tt3896198&apikey=1c12799f&s=${movieSearch}&page=${next}`)
}