import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import MyReviewsPage from './pages/Myreviewpage';
import BookListPage from './pages/Booklistpage';
import BookDetailPage from './pages/Bookdetailspage'
import Loginpage from './pages/Loginpage';
// import ProfilePage from './pages/Profilepage';
import UserProfilePage from './pages/Userpage';
import './App.css';
// import axios from 'axios';
import Layout from './components/Layout';


const App:React.FC = () => {
  // const fetchAPI = async () => {
  //   const response = await axios.get("http://localhost:5000/");
  //   console.log(response.data);
  // };

  // fetchAPI();

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Loginpage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/reviews" element={<MyReviewsPage />} />
            <Route path="/user" element={<UserProfilePage />} />
            <Route path='/books' element={<BookListPage />} />
            <Route path="/books/:id" element={<BookDetailPage />} />
          </Route>
        </Routes>
      </Router>
    </>    
  );
};
export default App;
