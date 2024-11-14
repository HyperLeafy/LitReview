import React from 'react';
import Bookcard from '../components/Bookcard';
import Searchbar from '../components/Searchbar';

const Homepage: React.FC = () => {
  const mock_data  = {};  

  return (
    <>
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Book Review Platform</h1>
        <Searchbar />
      </header>

      {/* Featured Books Section */}
      <section className="py-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Using BookCard Component */}
          <Bookcard
            title="The Great Gatsby"
            author="F. Scott Fitzgerald"
            imgUrl="https://via.placeholder.com/150"
            rating={5}
          />
          <Bookcard
            title="To Kill a Mockingbird"
            author="Harper Lee"
            imgUrl="https://via.placeholder.com/150"
            rating={4}
          />
          <Bookcard
            title="To Kill a Mockingbird"
            author="Harper Lee"
            imgUrl="https://via.placeholder.com/150"
            rating={4}
          />
          {/* Add more BookCard components as needed */}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">Explore Genres</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Example Genre */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Fiction
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Non-Fiction
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Fantasy
          </button>
          {/* Add more genres as needed */}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-4 bg-gray-800 text-center text-white">
        <p>&copy; 2024 Book Review Platform. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
};

export default Homepage;
