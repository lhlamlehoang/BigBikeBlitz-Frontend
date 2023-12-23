import React from 'react';
import '../assets/CSS/header.css'

const Header = () => {
  return (
    <header>
      <button className='header-btn'>
        =
      </button>
      <h1 className='header-content'>Big Bike Blitz</h1>
      <img className='header-avatar' src="https://firebasestorage.googleapis.com/v0/b/bigbikeblitz.appspot.com/o/bikes%2FAvatar%2Fdefault%20avatar.jpg?alt=media&token=f2cead34-72aa-4ba7-83cd-fb97c829aed7"/>
      <p className='header-username'>Username</p>
    </header>
  );
};

export default Header;