import React, { useEffect } from 'react';
import '../../App.scss';
import WOW from 'wowjs';

const Portfolio = () => {
    useEffect(() => {
        new WOW.WOW({
            live: false,
        }).init();
    }, []);
    return (
        <div className='portfolio wow slideInRight data-wow-duration="1s" "data-wow-delay="1s"'>
            <p className='portfolio-subtitle'>Портфолио</p>
            <h2 className='portfolio-title'>Мои работы</h2>
            <div className='portfolio-list '>
                <div className='portfolio-item'>
                    <h3 className='portfolio-desr'>SuShi React</h3>
                    <div className='porfolio-img sushi' />
                    <div className='portfolio-links'>
                        <a className='site' href='https://su-shi.vercel.app/' target='_blank'>
                            Посмотереть
                        </a>
                        <a
                            className='git'
                            href='https://github.com/KrawBaki/SuShi.git'
                            target='_blank'>
                            Git
                        </a>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <h3 className='portfolio-desr'>Blog on React</h3>
                    <div className='porfolio-img blog' />
                    <div className='portfolio-links'>
                        <a className='site' href='https://blogon-react.vercel.app/' target='_blank'>
                            Посмотереть
                        </a>
                        <a
                            className='git'
                            href='https://github.com/KrawBaki/BlogonReact.git'
                            target='_blank'>
                            Git
                        </a>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <h3 className='portfolio-desr'>Denis Novik</h3>
                    <div className='porfolio-img denis' />
                    <div className='portfolio-links'>
                        <a
                            className='site'
                            href='https://krawbaki.github.io/DenisNovik/'
                            target='_blank'>
                            Посмотереть
                        </a>
                        <a
                            className='git'
                            href='https://github.com/KrawBaki/DenisNovik.git'
                            target='_blank'>
                            Git
                        </a>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <h3 className='portfolio-desr'>Webovio</h3>
                    <div className='porfolio-img webovio' />
                    <div className='portfolio-links'>
                        <a
                            className='site'
                            href='https://krawbaki.github.io/Webovios/'
                            target='_blank'>
                            Посмотереть
                        </a>
                        <a
                            className='git'
                            href='https://github.com/KrawBaki/Webovios.git'
                            target='_blank'>
                            Git
                        </a>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <h3 className='portfolio-desr'>Add List</h3>
                    <div className='porfolio-img addList' />
                    <div className='portfolio-links'>
                        <a
                            className='site'
                            href='https://krawbaki.github.io/AddList/'
                            target='_blank'>
                            Посмотереть
                        </a>
                        <a
                            className='git'
                            href='https://github.com/KrawBaki/AddList.git'
                            target='_blank'>
                            Git
                        </a>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <h3 className='portfolio-desr'>Записная книжка</h3>
                    <div className='porfolio-img books' />
                    <div className='portfolio-links'>
                        <a
                            className='site'
                            href='https://krawbaki.github.io/LettersBOOK/'
                            target='_blank'>
                            Посмотереть
                        </a>
                        <a
                            className='git'
                            href='https://github.com/KrawBaki/LettersBOOK.git'
                            target='_blank'>
                            Git
                        </a>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <h3 className='portfolio-desr'>Игра Змейка</h3>
                    <div className='porfolio-img snake' />
                    <div className='portfolio-links'>
                        <a
                            className='site'
                            href='https://krawbaki.github.io/snake/'
                            target='_blank'>
                            Посмотереть
                        </a>
                        <a
                            className='git'
                            href='https://github.com/KrawBaki/snakes.git'
                            target='_blank'>
                            Git
                        </a>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <h3 className='portfolio-desr'>Калкулятор iOS </h3>
                    <div className='porfolio-img calculate' />
                    <div className='portfolio-links'>
                        <a
                            className='site'
                            href='https://krawbaki.github.io/Calculate-iOS/'
                            target='_blank'>
                            Посмотереть
                        </a>
                        <a
                            className='git'
                            href='https://github.com/KrawBaki/Calculate-iOS.git'
                            target='_blank'>
                            Git
                        </a>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <h3 className='portfolio-desr'>Игра Блоки</h3>
                    <div className='porfolio-img block' />
                    <div className='portfolio-links'>
                        <a
                            className='site'
                            href='https://krawbaki.github.io/GameBlock/'
                            target='_blank'>
                            Посмотереть
                        </a>
                        <a
                            className='git'
                            href='https://github.com/KrawBaki/GameBlock.git'
                            target='_blank'>
                            Git
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
