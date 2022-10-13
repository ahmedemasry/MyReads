import "./../App.css";
import ShelfChanger from "./ShelfChanger";

const Book = ({book,  updateBook}) => {
    return (
        <li >
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage:
                  book.imageLinks != null?
                  "url(" + book.imageLinks.smallThumbnail+")"
                  :""
                }}
              ></div>
              <ShelfChanger book={book}  updateBook={updateBook}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors?book.authors.join(",\n"):""}</div>
          </div>
        </li>
    );
}

export default Book;