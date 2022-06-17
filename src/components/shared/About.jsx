import React, { useEffect } from 'react';
import '../../App.scss';
import WOW from 'wowjs';

const About = () => {
    useEffect(() => {
        new WOW.WOW({
            live: false,
        }).init();
    }, []);
    return (
        <div className='about wow slideInLeft data-wow-duration="1s" "data-wow-delay="1s"'>
            <p className='about-subtitle'>Обо мне</p>
            <h2 className='about-title'>Skills</h2>
            <div className='about-info'>
                <div className='info-photo'></div>
                <div className='info-desr'>
                    <h3 className='desr-title'>React Frontend Разработчик</h3>
                    <ul className='desr-list'>
                        <li className='desr-item'>ФИО: Каримов Бакытбек Авазбекович</li>
                        <li className='desr-item'>День рождения: 1 июня 2001 г.</li>
                        <li className='desr-item'>Город: Бишкек, Кыргызстан</li>
                        <li className='desr-item'>Возраст: 21</li>
                        <li className='desr-item'>
                            Телефон: <a href='tel'> 996 505 158686</a>
                        </li>
                        <li className='desr-item'>
                            Электронная почта: <a href='email'> stx36@mail.ru</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='skills-parent'>
                <h4 className='skills'>Skills</h4>
                <ul className='skill-list'>
                    <li className='skill-item'>ReactJS</li>
                    <li className='skill-item'>TypeScript</li>
                    <li className='skill-item'>JavaScript ES6</li>
                    <li className='skill-item'>Gulp</li>
                    <li className='skill-item'>HTML</li>
                    <li className='skill-item'>CSS/SASS</li>
                    <li className='skill-item'>Bootstrap</li>
                    <li className='skill-item'>Figma, PhotoShop</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
