import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"
import { IoHome } from "react-icons/io5";

function Error() {
    const err = useRouteError()

    return (
        <>
            <div className="flex items-center gap-3 hover:text-green-700 hover:underline font-bold duration-300 mx-8">
                <Link to="/">Home</Link>
                <span><IoHome /></span>
            </div>
            <div className="flex justify-center items-center flex-col h-screen">
                <h1 className="text-2xl font-bold text-red-600">{err.data}</h1>
                <h1 className="text-2xl font-bold text-red-600">{err.status}</h1>
                <h1 className="text-2xl font-bold text-red-600">{err.statusText}</h1>
            </div>
        </>
    )
}

export default Error