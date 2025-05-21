import { useParams } from "react-router-dom";
import { books } from "../utils/Books";
import BooksRating from "./BooksRating";

function BookDetails() {
    const { id } = useParams();
    const book = books.find(book => book.id.toString() == id);

    return (
        <>
            <div className="p-6 max-w-2xl mx-auto shadow-xl rounded-xl bg-gray-200 mt-10">
                <img src={book.image} alt={book.title} className="w-full h-96 p-4 rounded-xl" />
                <h1 className="text-3xl font-bold mt-4 text-gray-600">{book.title}</h1>
                <h2 className="text-xl text-gray-600">by {book.author}</h2>
                <p className="my-4 text-gray-600 font-semibold">{book.description}</p>
                <BooksRating rating={book.rating} />
            </div>
        </>
    )
}

export default BookDetails