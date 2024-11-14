import React, { useState, useEffect } from 'react';

interface Review {
  id: string;
  content: string;
  rating: number;
  createdAt: string;
  reviewer: string;
}

interface Book {
  id: string;
  title: string;
  author: string;
  summary: string;
  reviews: Review[];
}

// Mock Data for a selected book
const mockBook: Book = {
  id: '1',
  title: '1984',
  author: 'George Orwell',
  summary: 'A dystopian novel set in a totalitarian regime where surveillance and propaganda dominate.',
  reviews: [
    { id: '1', content: 'A haunting vision of the future.', rating: 5, createdAt: '2023-01-15T12:30:00', reviewer: 'John' },
    { id: '2', content: 'The themes are still relevant today.', rating: 4, createdAt: '2023-02-20T10:00:00', reviewer: 'Sarah' },
    { id: '3', content: 'A must-read for everyone.', rating: 5, createdAt: '2023-03-10T08:45:00', reviewer: 'David' },
  ],
};

const BookDetailsPage: React.FC = () => {
  const [book, setBook] = useState<Book | null>(null);
  const [newReview, setNewReview] = useState<string>('');  // New review content
  const [rating, setRating] = useState<number>(0);          // Rating for new review

  useEffect(() => {
    // Simulate fetching the book data from an API
    setBook(mockBook); // For now, we're using mock data
  }, []);

  // Handle new review submission
  const handleSubmitReview = () => {
    if (!newReview || rating === 0) return;

    // Mocking adding a review
    const newReviewObject: Review = {
      id: (book?.reviews.length || 0 + 1).toString(),
      content: newReview,
      rating,
      createdAt: new Date().toISOString(),
      reviewer: 'Anonymous', // This could be fetched from logged-in user in real implementation
    };

    // Add the new review to the book's reviews
    setBook((prevBook) => ({
      ...prevBook!,
      reviews: [...(prevBook?.reviews || []), newReviewObject],
    }));

    // Reset review form
    setNewReview('');
    setRating(0);
  };

  return (
    <div className="container mx-auto p-4">
      {book ? (
        <>
          {/* Book Details */}
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <h2 className="text-xl mb-2"><strong>Author:</strong> {book.author}</h2>
          <p className="mb-4">{book.summary}</p>

          {/* Reviews Section */}
          <h3 className="text-2xl font-semibold mb-2">Reviews</h3>
          <ul className="space-y-4 mb-4">
            {book.reviews.length === 0 ? (
              <p>No reviews yet. Be the first to review!</p>
            ) : (
              book.reviews.map((review) => (
                <li key={review.id} className="border rounded-lg p-4 bg-gray-100 shadow">
                  <p>{review.content}</p>
                  <p><strong>Rating:</strong> {review.rating}/5</p>
                  <p className="text-gray-500 text-sm">Reviewed by {review.reviewer} on {new Date(review.createdAt).toLocaleDateString()}</p>
                </li>
              ))
            )}
          </ul>

          {/* Review Submission Form */}
          <div className="border rounded-lg p-4 bg-gray-100 shadow">
            <h3 className="text-xl font-semibold mb-2">Write a Review</h3>
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              className="w-full p-2 mb-2 border rounded"
              placeholder="Write your review..."
            ></textarea>
            <div className="mb-2">
              <label htmlFor="rating" className="mr-2">Rating:</label>
              <select value={rating} onChange={(e) => setRating(Number(e.target.value))} id="rating" className="border rounded">
                <option value={0}>Select rating</option>
                {[1, 2, 3, 4, 5].map((star) => (
                  <option key={star} value={star}>{star}</option>
                ))}
              </select>
            </div>
            <button onClick={handleSubmitReview} className="px-4 py-2 bg-blue-500 text-white rounded">
              Submit Review
            </button>
          </div>
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default BookDetailsPage;
