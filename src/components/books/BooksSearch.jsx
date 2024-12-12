import React, { useState } from "react";

const BooksSearch = ({search, setSearch}) => {

    const [bookSearch, setBookSearch] = useState('')
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        setSearch(bookSearch)
        setBookSearch('')
    }

  return (
    <>
      <div className="md:w-[40%]">
        <div className="flex space-x-4">
          <form onSubmit={handleFormSubmit} className="flex rounded-md overflow-hidden w-full">
            <input
                onChange={(e) => setBookSearch(e.target.value)}
                value={bookSearch}
              type="text"
              placeholder="search"
              className="w-full placeholder-black text-black px-4 rounded-md rounded-r-none"
            />
            <button className="bg-indigo-600 text-white px-4 text-lg font-semibold py-2 rounded-r-md">
              Go
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BooksSearch;
