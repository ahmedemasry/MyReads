import "./../App.css";

const ShelfChanger = ({book,  updateBook}) => {

    const selectedShelf = book.shelf;
    const isCurrentlyReading = (selectedShelf === "currentlyReading");
    const isWantToRead = (selectedShelf === "wantToRead");
    const isRead = (selectedShelf === "read");
    const isNone = (selectedShelf === "none");
    const isUndefined = (selectedShelf === undefined);
    return (
        <div className="book-shelf-changer">
            <select value={selectedShelf??"none"} onChange={(e) =>  updateBook(book,e.target.value)}>
                <option value="none" disabled>{isUndefined?"Add To..":"Move To..."}</option>
                <option value="currentlyReading">{isCurrentlyReading?"✓ ":""} Currently Reading</option>
                <option value="wantToRead">{isWantToRead?"✓ ":""} Want to Read</option>
                <option value="read">{isRead?"✓ ":""} Read</option>
                {!isUndefined?<option value="none">{isNone?"✓ ":""}None</option>:""}
            </select>
        </div>
    );
}





export default ShelfChanger;