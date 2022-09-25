import { search } from "../BooksAPI";
import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/book";
import { Spinner } from "reactstrap";

function Search({ homeBooks }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchFun = async (query, maxResults) => {
    if (!query) {
      setBooks([]);
      return;
    }
    setLoading(true);
    const books = await search(query, maxResults);
    setBooks(books);
    setLoading(false);
  };

  const isThereBook = (book) => {
    const bookFound = Array.isArray(homeBooks)
      ? homeBooks.filter((hb) => hb.id === book.id)
      : [];
    return bookFound[0];
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={"/"}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            onChange={(e) => searchFun(e.target.value)}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      {!loading ? (
        <div className="search-books-results">
          <ol className="books-grid">
            {Array.isArray(books)
              ? books.map((book) => (
                  <li key={book.id}>
                    <Book
                      data={book}
                      type={
                        isThereBook(book) ? isThereBook(book).shelf : "none"
                      }
                    />
                  </li>
                ))
              : null}
          </ol>
        </div>
      ) : (
        <div className="loader">
          <Spinner
            color="success"
            style={{
              height: "3rem",
              width: "3rem",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Search;
