import React from 'react';
import Book from './Book';

const SearchResults = props =>{
    const {searchBooks, mBooks, onMove } = props;
    const updateBooks = searchBooks.map(book => {
        mBooks.map(b=> {
            if(b.id === book.id){
                book.shelf = b.shelf;
            }
            return b;
        });
        return book;
    });
    return(
        <div className = "search-books-results">
            <ol className="books-grid">
                {updateBooks.map(book => (
                    <Book key={book.id}
                          book={book}
                          shelf={book.shelf ? book.shelf : 'none'}
                          onMove={onMove}
                    />
                ))}
            </ol>
        </div>
    );
};
export default SearchResults;