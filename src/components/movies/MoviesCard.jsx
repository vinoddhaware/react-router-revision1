import React from 'react'

const MoviesCard = ({currData}) => {

    const {title, Poster} = currData

  return (
    <>
      <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl px-8 pb-4 h-28 sm:h-28 lg:pt-32 max-w-[80px] sm:max-w-[100px] lg:max-w-[150px] mx-auto">
    <img src={Poster} alt="University of Southern California" className="inset-0 absolute"/>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-[8px] lg:text-sm font-bold text-white">Watch now</h3>
    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-white"> {title} </div>
</div>
    </>
  )
}

export default MoviesCard
