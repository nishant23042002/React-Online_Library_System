import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CategoryBooks from './components/CategoryBooks.jsx'
import AddBooks from './components/AddBooks.jsx'
import Body from './components/Body.jsx'
import BookDetails from './components/BookDetails.jsx'
import Error from './components/Error.jsx'
import BrowseBook from './components/BrowseBook.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "browseBooks", element: <BrowseBook /> },
      { path: "books/:category", element: <CategoryBooks /> },
      { path: "book/:id", element: <BookDetails /> },
      { path: "addBooks", element: <AddBooks /> },
    ],
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
);
