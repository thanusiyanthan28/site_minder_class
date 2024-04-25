import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
    <div>
      <Link to="/component1" className='taps'>Calander</Link>
      <Link to="/component2"className='taps'>Room Reservation </Link>
      <Link to="/component3"className='taps'>Full page(EMED)</Link>
    </div>
  );
};

export default Header;