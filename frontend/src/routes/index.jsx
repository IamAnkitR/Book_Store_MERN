import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import BookList from "../pages/BookList.jsx";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/books",
    element: <BookList />,
  },
]);

export default router;
