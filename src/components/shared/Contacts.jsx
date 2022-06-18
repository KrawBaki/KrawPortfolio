import React from 'react';
import '../../App.scss';
const Contacts = () => {
    return (
        <div className='contacts wow fadeInDown img-thumbnail" data-wow-delay="0.5s"'>
            <p className='about-subtitle'>Контакты</p>
            <h2 className='about-title'>Связаться</h2>
            <div className='contacts-link'>
                <a
                    href='https://web.telegram.org/k/'
                    className='contacts-item telegram'
                    target='_blank'>
                    KrawBaki
                </a>
                <a
                    target='_blank'
                    className='contacts-item whatsapp'
                    href='https://api.whatsapp.com/send?phone=9960502228123'>
                    WhatsApp: Баки
                </a>

                <a href='tel: +996505166886' className='contacts-item telephone'>
                    +996 505 16 68 86
                </a>
            </div>
        </div>
    );
};

export default Contacts;
