import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes} from "react-router-dom";
import BookShelvesPage from "./pages/BookShelvesPage";
import SearchPage from "./pages/SearchPage";
import { getAll, update, get } from "./BooksAPI";

function App() {
  
  const [books, setBooks] = useState([{}]);

  //When a shelf of a book changed while runtime
  //Sent as a callback down to the ShelfChanger (options)
  const updateBook = async (book, shelf) => {
    let isExisted = false;
      setBooks(books.map((b)=>{
        if(b.id === book.id){
          b.shelf = shelf;
          isExisted = true;
        }
        return b;
      }));

    //if it is a new book, add to books array
    if(!isExisted){
      book = await get(book.id);
      book.shelf = shelf;
      setBooks([...books, book]);
    }
    
    update(book, shelf);
    
  }

  //Only First Time, Get books fron API
  useEffect(() => {
    const getAllBooks = async () => {
      const res = await getAll();
      setBooks(res);
    }
    getAllBooks();
  }, []);
  
  
  
  return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={ <BookShelvesPage   books={books} updateBook={updateBook}/>} />
          <Route path="/search" element={ <SearchPage currentBooks={books} updateBook={updateBook} /> } />
        </Routes>
       </div>
  );
  
};

export default App;
