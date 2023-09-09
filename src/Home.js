// src/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Chart Samples</h1>
      <ul>
        <li><Link to="/line">Line Chart</Link></li>
        <li><Link to="/bar">Bar Chart</Link></li>
        <li><Link to="/pie">Pie Chart</Link></li>
        <li><Link to="/destination">Destination</Link></li>
        <li><Link to="/duration">Duration</Link></li>
        {/* Add other charts as needed */}
      </ul>
    </div>
  );
}

export default Home;
