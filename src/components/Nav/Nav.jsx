import React from 'react';
import Link from 'next/link';


import './Nav.css';

const Nav = () => {
    return (
        <nav className='nav'>
            <img className='nav__logo' src='#' alt='logo' />
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