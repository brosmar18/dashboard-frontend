import React from 'react';
import Link from 'next/link';
import {images} from '../../assets';
import './Nav.css';


import './Nav.css';

const Nav = () => {
    return (
        <nav className='nav'>
            <img className='nav__logo' src={images.logo} alt='logo' />
            <ul className='nav__links'>
                {['home', 'notes', 'documents', 'about'].map((item) => (
                    <li className='nav__link' key={item}>
                        <Link href={`#`}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;