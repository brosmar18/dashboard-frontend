import React from 'react';
import './Header.css';
import {images} from '../../assets';
import {NavBar} from '../';

const Header = () => {
    return (
        <section className='header'>
            <NavBar />
            <h1 className='header__title'>Welcome to my Second Brain</h1>
            <p className='header__description'>Embark on a journey through the depths of my digital mind. Here you'll find a curated collection of notes, insights, and resources amassed through my odyssey in software development. A treasure trove for the curious and passionate, this space is where knowledge transforms and ideas take flight.</p>
            <img className='header__image' src={images.header_img} alt='Neuron Network' />
        </section>
    )
}

export default Header;