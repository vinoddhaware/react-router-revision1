import React, { useEffect, useState } from 'react'
import BooksCard from '../components/books/BooksCard'
import { getBookApi } from '../api/BookApi'
import BooksSearch from '../components/books/BooksSearch'

const Books = () => {

  const [bookData, setBookData] = useState([])
  const [search, setSearch] = useState('react')

  const fetBookData = async(search) =>{
    try {
      const res = await getBookApi(search)
      setBookData(res.data.items);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
      fetBookData(search)
  }, [search])

  console.log(search);
  

  return (
    <div className='h-screen bg-black text-white py-20 '>
      <div className='sm:flex sm:flex-row w-[80%] mx-auto justify-between flex flex-col space-y-4 px-4'>
        <h1 className='text-3xl font-bold'> Open Books Library </h1>
        <BooksSearch search = {search} setSearch = {setSearch} />
      </div>
      <div className='flex flex-col justify-center m-6 sm:m-10 items-center'>
      <h1 className='font-semibold px-4 w-[85%] mx-auto underline text-green-600'>Trending React Books </h1>
      <div className='flex overflow-x-auto w-[85%]  gap-10 px-4 py-4 '>
        {
          bookData.map((currBook) => {
            return <BooksCard key={currBook.id} currBook = {currBook} />
          })
        }
      </div>
      </div>
      
    </div>
  )
}

export default Books
