import React from 'react';
import style from './Navbar.module.css';

// let classes = {
//   'nav': 'Navbar_nav_2ou9Q',
//   'item': 'Navbar_item_30u9Q'
// }

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item + ' ' + style.active}>
                <a href='/profile'>Profile</a></div>
            <div className={style.item}>
                <a href='/dialogs'>Messages</a></div>
            <div className={style.item}>
                <a href='/news'>News</a></div>
            <div className={style.item}>
                <a href='/music'>Music</a></div>
            <div className={style.item}>
                <a href='/settings'>Settings</a></div>
        </nav>
    );
}

export default Navbar;