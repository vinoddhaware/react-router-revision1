import React from 'react'

const PokemonCards = ({currData}) => {
    let img = currData.sprites.other.dream_world.front_default
    let name = currData.name
    let experience = currData.base_experience
    let ability = currData.abilities[0].ability.name
  return (
    <>
  <div className="max-w-[300px]  flex flex-col justify-center items-center w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
    <div>
      <img className=" h-14 sm:h-28 md:h-52  duration-500 hover:scale-110 cursor-pointer place-self-center" src={img} alt={name} />
    </div>

    <div className="flex flex-col sm:gap-1 sm:mt-4 sm:px-4">
      <h2 className=" text-[10px] md:text-lg font-semibold text-gray-800 dark:text-gray-50"> {name} </h2>
      <span className="text-[8px] md:text-sm font-semibold text-gray-800 dark:text-gray-50">Experience: {experience}</span>
    </div>
    <div className="mt-2 p-2 sm:mt-4 sm:p-4 border-t border-gray-200 dark:border-gray-500">
      <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
        <span className="text-[10px] sm:text-sm md:text-base"> Ability: {ability} </span>
      </button>
    </div>
  </div>
    </>
  )
}

export default PokemonCards
