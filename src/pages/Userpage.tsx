import React, { useState } from 'react';

// Mock Data for user profile and reviews
const mockUser = {
  username: 'booklover123',
  email: 'booklover123@example.com',
  bio: 'Avid reader and book collector. I enjoy reading dystopian novels and historical fiction.',
  profilePicture: 'https://via.placeholder.com/150',  // Placeholder image
  reviews: [
    { bookTitle: '1984', content: 'A timeless dystopian masterpiece.', rating: 5, createdAt: '2023-01-15' },
    { bookTitle: 'Brave New World', content: 'A thought-provoking and eerily predictive novel.', rating: 4, createdAt: '2023-02-20' },
    { bookTitle: 'The Great Gatsby', content: 'A beautiful yet tragic story about the American dream.', rating: 5, createdAt: '2023-03-10' },
  ],
};

const UserProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(mockUser);
  const [newBio, setNewBio] = useState(user.bio);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = () => {
    setUser((prevUser) => ({
      ...prevUser,
      bio: newBio,  // Save the updated bio
    }));
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <h1 className="text-3xl font-bold">{user.username}</h1>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        {isEditing ? (
          <>
            <textarea
              value={newBio}
              onChange={(e) => setNewBio(e.target.value)}
              className="w-full p-2 border rounded mb-2"
              rows={4}
            />
            <button
              onClick={handleSaveProfile}
              className="px-4 py-2 bg-green-500 text-white rounded mr-2"
            >
              Save
            </button>
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <p className="mb-2">{user.bio}</p>
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Edit Profile
            </button>
          </>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">My Reviews</h2>
        <ul className="space-y-4">
          {user.reviews.map((review, index) => (
            <li key={index} className="border rounded-lg p-4 bg-gray-100 shadow">
              <h3 className="font-bold">{review.bookTitle}</h3>
              <p>{review.content}</p>
              <p><strong>Rating:</strong> {review.rating}/5</p>
              <p className="text-gray-500 text-sm">Reviewed on {new Date(review.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfilePage;
