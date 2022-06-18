import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/shared/Intro';
import Portfolio from './components/shared/Portfolio';
import Header from './components/shared/Header';
import About from './components/shared/About';
import Contacts from './components/shared/Contacts';

function App() {
    const [statusBurger, setStatus] = useState(false);

    const [bacgroundCol, setBacgroundCol] = useState({ backgroundColor: '#000', color: '#fff' });
    function checkState(e) {
        e.target.checked
            ? setBacgroundCol({ backgroundColor: '#fff', color: '#000' })
            : setBacgroundCol({ backgroundColor: '#000', color: '#fff' });
    }

    return (
        <div className='wrapper'>
            <Header onChangeTheme={checkState} />
            <menu className='menu' style={bacgroundCol}>
                <div className='container'>
                    <Intro />
                    <Portfolio />
                    <About />
                    <Contacts />
                </div>
            </menu>
        </div>
    );
}

export default App;
