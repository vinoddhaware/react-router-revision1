import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getMovieApi } from '../api/MovieApi'
import MoviesSearch from '../components/movies/MoviesSearch'
import MoviesCard from '../components/movies/MoviesCard'
import MoviePagination from '../components/movies/MoviePagination'

const Movies = () => {

    const [movieData, setMovieData] = useState([])
    const [next, setNext] = useState(1)
    const [movieSearch, setMovieSearch] = useState('titanic')

    const fetchMovieApi = async(next, MoviesSearch) =>{
        try {
            const res = await getMovieApi(next, movieSearch)
            setMovieData(res.data.Search);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovieApi(next, movieSearch)
    }, [next, movieSearch])   


  return (
    <div className='h-screen bg-[#000] sm:p-20 py-20 text-white'>
        <div className=' flex justify-between items-center'>
        <h1 className='sm:text-3xl text-xl font-bold'> Movies </h1>
        <MoviesSearch movieSearch = {movieSearch} setMovieSearch = {setMovieSearch} />
        </div>
        <div className='grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-4 px-4 gap-4 lg:px-36 sm:px-10 py-4 lg:mt-6 lg:gap-10 sm:gap-2'>
            {
                movieData.map((currData) => {
                    return <MoviesCard key={currData.imdbID} currData = {currData}  />
                })
            }
        </div>
        <div className='flex justify-end lg:pr-40 pt-2'>
            <MoviePagination next = {next} setNext = {setNext} />
        </div>
    </div>
  )
}

export default Movies
