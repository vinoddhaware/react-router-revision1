import axios from "axios";

const api = axios.create({
    baseURL: 'https://pokeapi.co'
})

export const pokemonApi = () =>{
    return api.get('/api/v2/pokemon?offset=0&limit=100')
}