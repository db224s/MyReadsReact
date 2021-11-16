import React, {Component} from 'react';
import Book from './Book';

class BookShelf extends Component{
    render() {
        const {bookShelf, books, onMove} = this.props;
        const booksOnShelf = books.filter(book => book.shelf === bookShelf.key);
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookShelf.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {booksOnShelf.map(book =>(
                            <Book key={book.id}
                                  book={book}
                                  bookShelf={bookShelf.key}
                                  onMove={onMove}>

                            </Book>
                        ))}
                    </ol>
                </div>
            </div>
        );

    }
}
export default BookShelf;

