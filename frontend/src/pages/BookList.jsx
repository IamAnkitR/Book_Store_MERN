import { useState, useEffect } from "react";

const BookList = () => {
  const [books, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchBookList = async () => {
    try {
      console.log("fetching book list");
      const response = await fetch("http://localhost:3000/books", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setLoading(false);
      setBookList(data.books);
      console.log(data.books);
    } catch (error) {
      console.log("Error fetching books", error);
    }
  };

  useEffect(() => {
    fetchBookList();
  }, []);
  return (
    <>
      <div>Book List</div>
      <div>
        {loading ? (
          "Loading..."
        ) : (
          <div className=" h-100 w-100">
            {books &&
              books.map((book) => (
                <div
                  key={book.id}
                  className="bg-red-800 w-4/12 m-6 h-40 text-center"
                >
                  <div className="flex justify-center">
                    <div className="mr-4">{book.title}</div>
                    <div>{book.publishYear}</div>
                  </div>
                  <div>{book.author}</div>
                  <div>{book.description}</div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default BookList;
