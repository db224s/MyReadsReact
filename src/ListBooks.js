import React, {Component} from 'react'
import BookShelf from "./BookShelf";
import {Link} from "react-router-dom";

class ListBooks extends Component{
    render() {
        const { bookShelves, books, onMove } = this.props;
        console.log(" I am priging books")
        console.log(books);

        return(
            <div className="list-books">
                <div className ="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {bookShelves.map(bookShelf =>(
                            <BookShelf key={bookShelf.key}
                                       bookShelf={bookShelf}
                                       books={books}
                                       onMove={onMove}
                            ></BookShelf>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="search">
                        <button>Add a Book</button>
                    </Link>
                </div>
            </div>
        );

    }
}

export default ListBooks;