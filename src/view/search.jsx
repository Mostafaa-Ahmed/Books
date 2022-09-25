import { search, update } from "../BooksAPI";
import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/book";
import { Spinner } from "reactstrap";

function Search() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchFun = async (query, maxResults) => {
    setLoading(true);
    const books = await search(query, maxResults);
    setBooks(books);
    setLoading(false);
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
                    <Book data={book} type={book.shelf} />
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
