import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Book {
  key: string;
  title: string;
  author_name: string[];
  first_publish_year: number;
}

const BookListPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]); // List of books
  const [currentPage, setCurrentPage] = useState<number>(1); // Current page number
  const [totalPages, setTotalPages] = useState<number>(0); // Total number of pages
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const booksPerPage = 10; // Number of books per page

  // Fetch books for the current page
  const fetchBooks = async (page: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=programming&page=${page}`);
      const totalResults = response.data.numFound;
      const books = response.data.docs.map((book: any) => ({
        key: book.key,
        title: book.title,
        author_name: book.author_name || ['Unknown'],
        first_publish_year: book.first_publish_year || 'N/A',
      }));

      setBooks(books); // Set the list of books for the current page
      setTotalPages(Math.ceil(totalResults / booksPerPage)); // Calculate total pages based on results
    } catch (err) {
      console.error('Error fetching books:', err);
      setError('Failed to fetch books. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch books whenever the current page changes
  useEffect(() => {
    fetchBooks(currentPage);
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>

      {isLoading ? (
        <div>Loading books...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <>
          {/* Book List */}
          <ul className="divide-y divide-gray-200">
            {books.map((book) => (
              <li key={book.key} className="py-4">
                <div>
                  <h2 className="text-lg font-semibold">{book.title}</h2>
                  <p className="text-sm text-gray-500">
                    {book.author_name.join(', ')} - First Published: {book.first_publish_year}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination */}
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}
            >
              Previous
            </button>

            <span className="text-sm">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BookListPage;
