import { useParams } from "react-router-dom"
import { books } from "../utils/Books"

function CategoryBooks() {
    const { category } = useParams();
    const categorizeBook = books.filter(book => book.category === category);
    console.log(categorizeBook)
    return (
        <div className="flex justify-center mt-10 gap-6">
            {
                categorizeBook.map(book =>
                    <div className="p-3 shadow-xl m-3 rounded-xl cursor-pointer hover:scale-105 duration-300 bg-gray-100" key={book.id}>
                        <div className="w-60 h-60 p-2">
                            <img className="rounded-xl w-full h-full object-fill" src={book.image} alt={book.title} />
                        </div>
                        <div className="mt-4">
                            <h1 className="font-semibold text-center w-60">{book.title}</h1>
                            <h2 className="text-center">{book.author}</h2>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CategoryBooks