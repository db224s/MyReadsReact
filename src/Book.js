import React from 'react';
import BookShelfChanger from "./BookShelfChanger";

const Book = ({book, bookShelf, onMove}) => (
    <li>
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                       `url(${ book.imageLinks
                         ? book.imageLinks.thumbnail 
                         :'icons/book-placeholder.svg'
                        })`
                }}
                />
                <BookShelfChanger book={book} shelf={bookShelf} onMove={onMove}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>

    </li>
);

export default Book;

