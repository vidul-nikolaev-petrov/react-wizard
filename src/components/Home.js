import React from 'react';
import { Link } from 'react-router'

const Home = () => (
  <div className="container center" id="home">
      Start the wizard <Link to="/wizard/1">here</Link>
  </div>
);

export default Home
