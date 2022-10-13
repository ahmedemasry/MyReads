import { Link } from "react-router-dom";
import BookShelf from './../components/BookShelf'

const CURRENTLY_READING = "currentlyReading";
const READ = "read";
const WANT_TO_READ = "wantToRead";

const BookShelvesPage = ({books, updateBook}) => {
  const filterBooks = (shelf) => {
    return books.filter((book) => book.shelf === shelf);
  };
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf shelfName="Currently Reading" books={filterBooks(CURRENTLY_READING)} updateBook={updateBook}></BookShelf>
              <BookShelf shelfName="Want to Read" books={filterBooks(WANT_TO_READ)} updateBook={updateBook}></BookShelf>
              <BookShelf shelfName="Read" books={filterBooks(READ)} updateBook={updateBook}></BookShelf>        
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">
            Add a book
            </Link>
          </div>
        </div>
    );
}

export default BookShelvesPage;