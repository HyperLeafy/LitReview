import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Review {
  id: string;
  bookTitle: string;
  content: string;
  rating: number;
  createdAt: string; // Date when the review was created
}
const mockReviews: Review[] = [
    {
      id: '1',
      bookTitle: 'The Catcher in the Rye',
      content: 'An insightful book about teenage rebellion and self-discovery.',
      rating: 4,
      createdAt: '2023-01-15T12:30:00',
    },
    {
      id: '2',
      bookTitle: 'To Kill a Mockingbird',
      content: 'A timeless masterpiece that addresses serious themes of race and morality.',
      rating: 5,
      createdAt: '2023-02-20T10:00:00',
    },
    {
      id: '3',
      bookTitle: '1984',
      content: 'A chilling dystopian novel that still feels relevant today.',
      rating: 5,
      createdAt: '2023-03-10T08:45:00',
    },
    {
      id: '4',
      bookTitle: 'Moby Dick',
      content: 'A complex and profound narrative about obsession and revenge.',
      rating: 3,
      createdAt: '2023-04-18T15:20:00',
    },
    {
      id: '5',
      bookTitle: 'Pride and Prejudice',
      content: 'A wonderful exploration of manners, love, and marriage in Regency England.',
      rating: 4,
      createdAt: '2023-05-05T11:30:00',
    },
    {
      id: '6',
      bookTitle: 'The Great Gatsby',
      content: 'A tragic tale of love and ambition set against the backdrop of the American Dream.',
      rating: 5,
      createdAt: '2023-06-14T14:10:00',
    },
    {
      id: '7',
      bookTitle: 'Brave New World',
      content: 'A stark warning about the dangers of technology and authoritarianism.',
      rating: 4,
      createdAt: '2023-07-01T09:15:00',
    },
]
const REVIEWS_PER_PAGE = 5; // Set the number of reviews to display per page

const MyReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);  // Review data
  const [currentPage, setCurrentPage] = useState<number>(1); // Current page

  // Fetch mock reviews data on component load
  useEffect(() => {
    setReviews(mockReviews);
  }, []);

  // Pagination logic: calculating the index range for reviews to show
  const lastReviewIndex = currentPage * REVIEWS_PER_PAGE;
  const firstReviewIndex = lastReviewIndex - REVIEWS_PER_PAGE;
  const currentReviews = reviews.slice(firstReviewIndex, lastReviewIndex);

  // Calculate total pages needed for pagination
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

  // Function to handle pagination change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Reviews</h1>

      {/* List of Reviews */}
      {currentReviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <ul className="space-y-4">
          {currentReviews.map((review) => (
            <li key={review.id} className="border rounded-lg p-4 bg-gray-100 shadow">
              <h2 className="text-xl font-semibold">{review.bookTitle}</h2>
              <p className="mt-2">{review.content}</p>
              <p className="mt-1"><strong>Rating:</strong> {review.rating}/5</p>
              <p className="text-gray-500 text-sm mt-1">
                Reviewed on: {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviewsPage;