import React from 'react';
import s from './Header.module.css';


const Header = () => {
    return (
            <div className={s.header}>
                <div>
                    <a href='#s'>
                      <img href='#s' src='https://i.ibb.co/QQd9PPV/logo0001.png' alt='Logo'></img>
                    </a>
                </div>
                <div>
                    <a href='#s'>Home</a>
                    <a href='#s'>News Feed</a>
                    <a href='#s'>Messages</a>
                    <a href='#s'>Music</a>
                </div>
            </div>
    )
  }

  export default Header;