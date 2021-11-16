import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

class SearchBook extends Component{

    render(){
        const { searchBooks, mBooks, onSearch, onResetSearch, onMove } = this.props;
        return(
            <div className="search-books">
                <div className ="search-books-bar">
                    <Link to="/">
                        <button className ="close-search" onClick={onResetSearch}>
                          Close
                        </button>
                    </Link>
                    <SearchInput onSearch={onSearch} />
                </div>
                <SearchResults searchBooks={searchBooks}
                               mBooks={mBooks}
                               onMove={onMove}

                />
            </div>
        );
    }
}
export default SearchBook;
