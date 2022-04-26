import * as React from 'react'
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

import Login from './pages/Login';
import DashBoard from './pages/DashBoard';

export default function App() {
  

  return (
    <div>
      <Router>
          <Routes>
            <Route path ="/" element={<Login />}/>
            <Route path ="/dashboard" element={<DashBoard />}/>
          </Routes>
      </Router>
    </div>
  )
}
