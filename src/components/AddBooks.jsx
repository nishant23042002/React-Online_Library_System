import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooks } from "../utils/bookSlice";
import { useNavigate } from "react-router-dom";


function AddBooks() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        category: "",
        description: "",
        image: "",
        rating: "",
    });

    function handleChange(e) {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();

        const { title, author, category, description, rating } = formData;

        if (!title || !author || !category || !description || !rating) {
            setError("Please fill out all fields.");
            return;
        }

        dispatch(addBooks(formData));
        navigate("/browseBooks");
    }

    return (
        <>
            <div className="w-lg m-auto border-gray-500 rounded-xl my-6 p-3 bg-gray-200 shadow-2xl">
                <h2 className="text-center mt-10 font-bold text-gray-700">Add a New Book</h2>
                {
                    error && <p className="text-red-600 text-center">{error}</p>
                }
                <form onSubmit={handleSubmit} className="flex flex-col gap-10 my-10">
                    <input className="bg-white outline-none p-3 rounded-md" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
                    <input className="bg-white outline-none p-3 rounded-md" name="author" placeholder="Author" value={formData.author} onChange={handleChange} />
                    <input className="bg-white outline-none p-3 rounded-md" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
                    <textarea className="bg-white outline-none p-3 rounded-md" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
                    <input className="bg-white outline-none p-3 rounded-md" name="rating" placeholder="Rating" type="number" step="1" value={formData.rating} onChange={handleChange} />

                    <button className="w-30 p-3 font-bold rounded-xl bg-blue-600 hover:bg-green-600 duration-300 cursor-pointer" type="submit">Add Book</button>
                </form>
            </div>
        </>
    )
}

export default AddBooks