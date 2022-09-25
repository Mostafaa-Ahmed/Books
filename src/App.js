import "./App.css";
import { Routes, Route } from "react-router-dom";
import Store from "./view/store";
import Search from "./view/search";
import NotFound from "./components/NotFound";
import { getAll } from "./BooksAPI";
import { useState, useEffect } from "react";
//tr

function App() {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const booksRes = await getAll();
    setBooks(booksRes);
  };
  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Store getAllBooks={getAllBooks} books={books} />}
        />
        <Route path="/search" element={<Search homeBooks={books} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
