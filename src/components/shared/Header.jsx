import React, { useState, useEffect } from 'react';
import '../../App.scss';
import logo from '../../img/logo.png';
import WOW from 'wowjs';

const Header = ({ onChangeTheme }) => {
    const [menuActive, setMenuActive] = useState(false);
    function showMenu() {
        setMenuActive(!menuActive);
    }

    function scrollContacts() {}

    useEffect(() => {
        new WOW.WOW({
            live: false,
        }).init();
    }, []);

    return (
        <header className='header wow flipInX data-wow-duration="1" "data-wow-delay="1s"'>
            <div className='container'>
                <div className='header-content'>
                    <div className='header-logo'>
                        Баки <img src={logo} className='logo' />
                        <br />
                        Каримов
                    </div>
                    <div className='nav'>
                        <div className='nav-item'>
                            <p className='switch-text'>Цветная Тема</p>
                            <label className='switch'>
                                <input onChange={onChangeTheme} type='checkbox' />
                                <span className='slider'></span>
                            </label>
                            <a
                                onClick={showMenu}
                                className={menuActive ? 'header_burger active' : 'header_burger'}>
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
