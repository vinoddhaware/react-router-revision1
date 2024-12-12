import React from 'react'

const PokemonSearch = ({pokemonSearch, setPokemonSearch}) => {
  return (
    <>
    <div className="md:w-[20%]">
      <div className="flex space-x-4">
        <div className="flex rounded-md overflow-hidden w-full">
          <input onChange={(e) => setPokemonSearch(e.target.value)} value={pokemonSearch} type="text" placeholder='search' className="w-full placeholder-black text-black px-4 rounded-md rounded-r-none" />
          <button className="bg-indigo-600 text-white px-4 text-lg font-semibold py-2 rounded-r-md">Go</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default PokemonSearch
