import React, { useState } from 'react';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import axios from 'axios';

interface Book {
  key: string;
  title: string;
}

const Searchbar: React.FC = () => {
  const [query, setQuery] = useState<string>(''); // Default string is an empty string
  const [isLoading, setIsLoading] = useState<boolean>(false); // Default state is false
  const [suggestions, setSuggestions] = useState<Book[]>([]); // Empty list

  // Fetching book list for suggestions
  const fetchBookSuggestion = async (searchTerm: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${searchTerm}`);
      const books = response.data.docs.map((book: any) => ({
        key: book.key,
        title: book.title,
      }));
      setSuggestions(books); // Setting the suggestions received from the API call
    } catch (error) {
      console.error('Error fetching book suggestions: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    if (searchTerm.trim().length > 0) {  // Trigger fetch after a single character
      fetchBookSuggestion(searchTerm);
    } else {
      setSuggestions([]); // Clear suggestions when input is empty
    }
  };

  const handleSuggestionClick = (bookTitle: string): void => {
    setQuery(bookTitle);
    setSuggestions([]); // Clearing suggestion
  };

  return (
    <div className="relative w-[20%]">
      <div className="flex p-1 overflow-hidden items-center border border-gray-200 focus-within:shadow-lg rounded-lg transition-all ease-in">
        <SearchOutlinedIcon />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for books..."
          className="px-4 py-2 text-xl outline-none w-full"
        />
      </div>

      <div>
        {isLoading && query && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
            <div className="px-4 py-2">Loading...</div>
          </div>
        )}

        {!isLoading && suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg max-h-40 overflow-y-auto">
            {suggestions.slice(0, 5).map((book) => (
              <li
                key={book.key}
                onClick={() => handleSuggestionClick(book.title)}
                className="px-4 py-2 cursor-pointer hover:bg-[#316D92] hover:text-white"
              >
                {book.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
