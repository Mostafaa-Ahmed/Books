import React from 'react'
import Book from './book'

const Shelf = ({books, title, shelfType, getAllBooks}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) =>
                        book.shelf == shelfType ? (
                            <li key={book.id}>
                                <Book data={book} type={shelfType} getAllBooks={getAllBooks}/>
                            </li>
                        ) : null
                    )}
                </ol>
            </div>
        </div>
    )
}

export default Shelf