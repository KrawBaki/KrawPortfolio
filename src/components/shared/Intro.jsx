import React, { useEffect, useState } from 'react';
import '../../App.scss';
import WOW from 'wowjs';
const Intro = () => {
    useEffect(() => {
        new WOW.WOW({
            live: false,
        }).init();
    }, []);

    return (
        <section className='intro '>
            <div className='intro-content wow fadeInDown data-wow-duration="1s" "data-wow-delay="1s"'>
                <h1 className='intro-title'>Добро Пожаловать</h1>
                <p className='intro-desr'>
                    Я Frontend-разработчик. Здесь собрана коллекция работ, и немного о себе.
                </p>
            </div>
        </section>
    );
};

export default Intro;
