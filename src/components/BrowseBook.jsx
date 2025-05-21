import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BrowseBook() {
    const [searchText, setSearchText] = useState("");
    const { category } = useParams();
    const books = useSelector((state) => state.books.books);
    console.log(books);

    const filteredBooks = books.filter((book) => {
        const matchesSearch = book.title.toLowerCase().includes(searchText.toLowerCase()) || book.author.toLowerCase().includes(searchText.toLowerCase());
        return matchesSearch;
    });

    return (
        <>
            <div>
                <h2>Browsing: {category}</h2>

                <div className="flex justify-center items-center">
                    <input className="bg-white p-3 rounded-2xl w-100 outline-none text-xl" type="text" placeholder="Search by title or author" value={searchText} onChange={(e) => setSearchText(e.target.value)}  />
                </div>

                {filteredBooks.length === 0 ? (
                    <h1 className="text-center text-red-600 text-xl">No books found.</h1>
                ) : (
                    <div className="flex flex-wrap justify-center items-center">
                        {filteredBooks.map((book) => (
                            <div className="p-3 shadow-xl m-3 rounded-xl cursor-pointer hover:scale-105 duration-300 bg-gray-300" key={book.id}>
                                <div className="w-60 h-60 p-2">
                                    <img className="rounded-xl w-full h-full object-fill" src={book.image} alt={book.title} />
                                </div>
                                <div className="mt-4">
                                    <h1 className="font-semibold text-xl text-center w-60">{book.title}</h1>
                                    <h2 className="text-center">{book.author}</h2>
                                    <button className="w-full shadow font-bold bg-gray-200 text-gray-600 text-center p-1 rounded-xl my-3 hover:scale-90 duration-300 hover:bg-green-600"><Link to={`/book/${book.id}`}>View Details</Link></button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default BrowseBook