import React from 'react';
import s from './Header.module.css';


const Header = () => {
    return (
            <div className={s.header}>
                <div>
                    <a href='/news'>
                      <img src='https://i.ibb.co/QQd9PPV/logo0001.png' alt='Logo'></img>
                    </a>
                </div>
                <div>
                    <a href='/profile'>My Profile</a>
                    <a href='/news'>News Feed</a>
                    <a href='/messages'>Messages</a>
                    <a href='/news'>Music</a>
                </div>
            </div>
    )
  }

  export default Header;