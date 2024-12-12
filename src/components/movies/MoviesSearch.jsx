import React, { useState } from 'react'

const MoviesSearch = ({setMovieSearch}) => {

    const [search, setSearch] = useState('')

    const handleFormSubmt = (e) =>{
        e.preventDefault()
        setMovieSearch(search)

    }


  return (
    <>
  <>
    <div className="sm:max-w-sm max-w-[240px]">
      <div className="flex space-x-4">
        <form onSubmit={handleFormSubmt} className="flex rounded-md overflow-hidden w-full">
          <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='search' className="w-full text-black px-4 rounded-md bg-white/90 placeholder-black rounded-r-none text-xs" />
          <button type='submit' className="bg-indigo-600 text-white  px-6 text-sm sm:text-lg font-semibold py-2 rounded-r-md">Go</button>
        </form>
      </div>
    </div>
  </>
    </>
  )
}

export default MoviesSearch
