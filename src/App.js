import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {debounce} from 'throttle-debounce'
import * as BooksAPI from './BooksAPI'
import './App.css'
import './ListBooks.js'
import ListBooks from "./ListBooks";
import SearchBook from "./SearchBook";

const bookshelves=[
  {key:'currentlyReading', name:'Currently Reading'},
  {key: 'wantToRead', name:'Want to Read'},
  {key: 'read', name:'Read'}
];

class BooksApp extends Component {
  state = {
    mBooks :[],
    searchBooks:[],
    error: false
  };
  componentDidMount = () =>{
    console.log("Component Mount called")
    BooksAPI.getAll().then(books => {
      console.log("I am here");
      this.setState({mBooks:books});
    }).catch(error =>{
      console.log(error);
      this.setState({error :true});
    })
  };
  searchForBooks = debounce(300, false, query => {
    if(query.length >0) {
        BooksAPI.search(query).then (books => {
    if (books.error) {
        this.setState( {searchBooks:[] });
    } else {
        this.setState({searchBooks:books });
    }
    });
    } else{
        this.setState({searchBooks:[] });
    }
  });
  resetSearch=()=>{
      this.setState({searchBooks:[] });
  };

  moveBook = (book, shelf) => {
      console.log("In Move");
      BooksAPI.update(book,shelf).catch(error => {
          console.log(error);
          this.setState({error:true});
      });
      if(shelf === 'none'){
          this.setState(prevState => ({
              mBooks:prevState.mBooks.filter(b => b.id!== book.id)
          }));
      } else{
          book.shelf = shelf;
          this.setState(prevState => ({
              mBooks: prevState.mBooks.filter(b => b.id!== book.id).concat(book)
          }));
      }
  };
  render() {
    const { mBooks, searchBooks, error } = this.state;
    console.log("In Main Container");
    return (
      <div className="app">
        <Route
            exact
            path="/"
            render={()=>(<ListBooks
                bookShelves = {bookshelves}
                books={mBooks}
                onMove={this.moveBook}
            />
            )}
        />
        <Route
            path="/search"
            render={()=> (
                <SearchBook searchBooks={searchBooks}
                             mBooks={mBooks}
                             onSearch={this.searchForBooks}
                             onResetSearch={this.resetSearch}
                             onMove={this.moveBook}
                />
            )}
        />
      </div>
    );
  }
}

export default BooksApp;
