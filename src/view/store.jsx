import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import Shelf from "../components/shelf";

function Store({ getAllBooks, books }) {
  useEffect(() => {
    getAllBooks();
  }, []);
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {books.length > 0 ? (
          <div className="list-books-content">
            <Shelf
              books={books}
              shelfType={"currentlyReading"}
              title={"Currently Reading"}
              getAllBooks={getAllBooks}
            />
            <Shelf
              books={books}
              shelfType={"wantToRead"}
              title={"Want To Read"}
              getAllBooks={getAllBooks}
            />
            <Shelf
              books={books}
              shelfType={"read"}
              title={"Read"}
              getAllBooks={getAllBooks}
            />
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
        <div className="open-search">
          <Link to="/search" />
        </div>
      </div>
    </div>
  );
}

export default Store;
