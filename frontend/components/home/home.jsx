import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <img src="http://res.cloudinary.com/daesquwob/image/upload/v1506050099/aldain-austria-316143_vd8mcv.jpg"></img>
      <span>Become inspired by a community of talented photographers. Share your talent and inspire others.</span>
      <Link to="/sign-up">Join the Community</Link>
    </div>
  );
};

export default Home;
