import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <span>Become inspired by a community of talented photographers. Share your talent and inspire others.</span>
      <Link to="/sign-up">Join the Community</Link>
    </div>
  );
};

export default Home;
