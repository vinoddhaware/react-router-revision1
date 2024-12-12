import React, { useEffect, useState } from 'react'
import PokemonSearch from '../components/pokemons/PokemonSearch'
import { pokemonApi } from '../api/PokemonApi'
import axios from 'axios'
import PokemonCards from '../components/pokemons/PokemonCards'

const Pokemon = () => {

  const [pokemonData, setPokemonData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [pokemonSearch, setPokemonSearch] = useState('')

  const fetchPokemon = async() =>{
    try {
      const res = await pokemonApi()
      // console.log(res.data.results);
      let pokemonRes = res.data.results.map( async(currData) => {
        try {
           const res = await axios.get(currData.url)
          return res.data
        } catch (error) {
          console.log(error);
        }
      })
      let pokemonData = await Promise.all(pokemonRes)
      setPokemonData(pokemonData);
      setIsLoading(false)
    } catch (error) {
      console.log(error);  
    }
  }
  useEffect(() => {
      fetchPokemon()
  }, [])
  
   let SearchData = pokemonData.filter((curPoke) => curPoke.name.toLowerCase().includes(pokemonSearch.toLowerCase()))

  if(isLoading) return <h1 className='text-white p-16 h-screen bg-black text-2xl text-center'> Loading ... </h1>

  return (
    <div className='h-screen bg-black text-white py-14 space-y-6'>
      <div className='flex flex-col justify-center items-center  space-y-3'>
        <h1 className='text-2xl font-bold'> Let's Catch Pokemons </h1>
        <PokemonSearch pokemonSearch = {pokemonSearch} setPokemonSearch = {setPokemonSearch} />
      </div>
      <div className='overflow-y-scroll h-[60vh] w-[90%] mx-auto gap-6 py-4'>
        <div className='grid grid-cols-4 w-[85%] gap-4 mx-auto'>
        {
          SearchData.map((currData) =>{
            return <PokemonCards key={currData.order} currData = {currData} />
          })
        }
        </div>
      </div>      
    </div>
  )
}

export default Pokemon
