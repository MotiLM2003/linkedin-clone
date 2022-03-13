import React from 'react';
// import { SearchIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './header.css';
const Header = () => {
  return (
    <header className='header'>
      <div className='header__left'>
        <img src='/images/linkedin-icon.svg' alt='linkedin clone icon' />
        <div className='header__serach'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>

      <div className='header__right'></div>
    </header>
  );
};

export default Header;
