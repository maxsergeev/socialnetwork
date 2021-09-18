import React from 'react';
import style from './Navbar.module.css';

// let classes = {
//   'nav': 'Navbar_nav_2ou9Q',
//   'item': 'Navbar_item_30u9Q'
// }

const Navbar = () => {
    return (
        <nav className={style.nav}>
          <div className={style.item + ' ' + style.active}><a>Profile</a></div>
          <div className={style.item}><a>Messages</a></div>
          <div className={style.item}><a>News</a></div>
          <div className={style.item}><a>Music</a></div>
          <div className={style.item}><a>Stings</a></div>
        </nav>
    );
}

export default Navbar;