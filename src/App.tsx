import * as React from 'react'
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import JobsOverview from './pages/JobsOverview';

export default function App() {
  

  return (
    <div>
      <Router>
          <Routes>
            <Route path ="/" element={<Login />}/>
            <Route path ="/dashboard" element={<DashBoard />}/>
            <Route path ="/jobs" element={<JobsOverview />}/>
          </Routes>
      </Router>
    </div>
  )
}
