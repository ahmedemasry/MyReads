
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {search} from "./../BooksAPI";
import BookShelf from "../components/BookShelf";

const SearchPage = ({currentBooks, updateBook}) => {
  const MAX_RESTULT = 100;
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([{}]);


  //Update the SearchPage if a book is added to a shelf

  useEffect(() => {
    const getBooks = async () => {
      let res;
      if(query.trim().length){
        res = await search(query.trim(),MAX_RESTULT);
      }
      if(res === undefined || res.length === undefined){
        setBooks([{}]);
        return;
      }

      //Shelf Defining
      for(let i = 0; i<res.length; i++){
        const book = res[i];
        const thisBook = currentBooks.filter((b)=>book.id === b.id)[0];
        if(thisBook){
          book.shelf = thisBook.shelf;
        }
      }
      setBooks(res);
    };

    getBooks();  
    
  }, [query,currentBooks]);

  

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(v) => {setQuery(v.target.value)}}
              />
            </div>
          </div>
          <div className="search-books-results">
            {
              <BookShelf books={books} shelfName="Result" updateBook={updateBook}></BookShelf>
            }
            {/* <ol className="books-grid"></ol> */}
          </div>
        </div>
    );
}

export default SearchPage;