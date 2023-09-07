import React from 'react';
import {BrowserRouter, Routes, Route,Outlet} from 'react-router-dom'
import Home from './Home';
import LineChart from './charts/LineChart';
import BarChart from './charts/Barchart';
import PieChart from './charts/PieChart';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
           <Route path="/line" exact element={<LineChart/>} />
          <Route path="/bar" exact element={<BarChart/>} />
          <Route path="/pie" exact element={<PieChart/>} />
          <Route path="/" exact element={<Home/>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
