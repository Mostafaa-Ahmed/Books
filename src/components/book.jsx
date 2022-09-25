import React from "react";
import { update } from "../BooksAPI";

function Book({ data: book, type, getAllBooks }) {
  const updateFun = async (book, value) => {
    const res = await update(book, value);
    getAllBooks && getAllBooks();
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${
              book.imageLinks &&
              (book.imageLinks.thumbnail
                ? book.imageLinks.thumbnail
                : book.imageLinks.smallThumbnail
                ? book.imageLinks.smallThumbnail
                : "")
            }")`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            onChange={(e) => updateFun(book, e.target.value)}
            defaultValue={type}
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.length > 0 ? book.authors : ""}
      </div>
    </div>
  );
}

export default Book;
