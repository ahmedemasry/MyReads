import Book from "./Book";
import "./../App.css";

const BookShelf = ({shelfName, books,  updateBook}) =>{
    return (<div className="bookshelf">
    <h2 className="bookshelf-title">{shelfName}</h2>
    <div className="bookshelf-books">
      <ol className= "books-grid">
        {/* {console.log(books)} */}
        {
          books !== undefined?
          books.length > 0?
         (!(books[0].title === undefined))?

          books.map( (book) => {
            return (<Book key={book.id} book={book}  updateBook={updateBook}></Book>)

          }
          )
          :"No Result Found":"No Result Found":"No Result Found"
        } 
      </ol>
    </div>
  </div>
  );
}

export default BookShelf;
