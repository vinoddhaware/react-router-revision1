import React from "react";

const BooksCard = ({ currBook }) => {
  let name = currBook.volumeInfo.title;
  let img =
    currBook.volumeInfo.imageLinks &&
    currBook.volumeInfo.imageLinks.smallThumbnail;

  if (img !== undefined && name !== undefined) {
    return (
      <div className="flex flex-col space-y-4 border- ">
        <div className="w-[180px] shadow-lg ">
          <img className="w-full h-56" src={img} alt="img" />
        </div>
        <button className="text-white bg-blue-700 rounded-sm h-full"> Read </button>
      </div>
    );
  }
};

export default BooksCard;
