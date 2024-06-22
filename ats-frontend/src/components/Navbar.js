import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/coordinator-dashboard">Coordinator Dashboard</Link></li>
        <li><Link to="/recruiter-dashboard">Recruiter Dashboard</Link></li>
        <li><Link to="/employer-dashboard">Employer Dashboard</Link></li>
        <li><Link to="/candidate-dashboard">Candidate Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
