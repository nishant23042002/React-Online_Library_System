import { books } from "../utils/Books"
import { Link } from "react-router-dom";


const categories = ["Classic", "Tragedy", "Fantasy", "Dystopian"];
const popularBooks = books.slice(0, 3);

function Body() {
    return (
        <>
            <div>
                <h1 className="text-center font-bold text-gray-600 text-3xl p-3">Welcome to the Online Library</h1>
                <h2 className="text-xl font-bold mx-10 text-gray-600">Categories : </h2>
                <ul className="flex gap-4 justify-evenly">{categories.map(category => <li className="text-gray-400 hover:scale-110 duration-300 font-bold hover:underline hover:text-green-600" key={category}><Link to={`/books/${category}`}>{category}</Link></li>)}</ul>
            </div>
            <div className="flex justify-center flex-wrap my-8 gap-9">
                {
                    popularBooks.map((book) =>
                        <div className="p-3 shadow-xl m-3 rounded-xl cursor-pointer hover:scale-105 duration-300 bg-gray-300" key={book.id}>
                            <div className="w-60 h-60 p-2">
                                <img className="rounded-xl w-full h-full object-fill" src={book.image} alt={book.title} />
                            </div>
                            <div className="mt-4">
                                <h1 className="font-semibold text-xl text-center">{book.title}</h1>
                                <h2 className="text-center">{book.author}</h2>
                                <button className="w-full shadow font-bold bg-gray-200 text-gray-600 text-center p-1 rounded-xl my-3 hover:scale-90 duration-300 hover:bg-green-600"><Link to={`/book/${book.id}`}>View Details</Link></button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Body
