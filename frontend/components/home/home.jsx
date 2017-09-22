import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div class="heroimage">
      <img src="http://res.cloudinary.com/daesquwob/image/upload/v1506035126/aldain-austria-316143_k1zp3f.jpg"></img>
      <Link to="/sign-up"></Link>
    </div>
  );
};

export default Home;
