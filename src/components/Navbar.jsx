import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

function Navbar() {
    return (
        <>
            <nav className="bg-cyan-600 p-5 flex justify-between">
                <h1 className="text-xl font-bold hover:scale-90 duration-300">Online Library</h1>
                <div className="flex justify-center items-center gap-8">
                    <div className="flex justify-center items-center gap-2 hover:text-white hover:underline font-bold duration-300">
                    <span><IoHome /></span><Link to="/">Home</Link>
                    </div>
                    <Link className="hover:text-white hover:underline font-bold duration-300" to="browseBooks">Browse Books</Link>
                    <Link className="hover:text-white hover:underline font-bold duration-300" to="addBooks">Add Book</Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;