import React from "react";
import ReactDom from "react-dom";

// Data
import { books } from "./books";
import Book from "./componets/Book";

//CSS
import "./index.css";

function BookList() {
    return (
        <section className="booklist">
            {books.map((book) => {
                return <Book key={book.id} {...book} />;
            })}
        </section>
    );
}

ReactDom.render(<BookList />, document.getElementById("root"));
