import axios from "axios";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/books");
      const data = await response.data;
      setBooks(data.books);
      console.log("vooks", data.books);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching books", books);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchBooks();
  }, []);
  return (
    <>
      <div className="p-4">
        <div className="flex justify-center items-center text-4xl font-mono">
          <h1>Books List</h1>
        </div>
        <Link to="/books/create">
          <button className="text-sky-800 4xl">Add</button>
        </Link>
      </div>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            {books &&
              books.map((book) => (
                <div key={book._id}>
                  <div className="flex bg-red-800 p-10 gap-4">
                    <div>{book.title}</div>
                    <div>{book.author}</div>
                    <div>{book.description}</div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
