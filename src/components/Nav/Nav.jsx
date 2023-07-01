import React from 'react';
import Link from 'next/link';


import './Nav.css';

const Nav = () => {
    return (
        <nav className='nav'>
            {['home', 'notes', 'documents', 'about'].map((item) => (
                <ul className='nav__links'>
                    <li className='nav__link'>
                        <Link href={`#`} key={item}>{item}</Link>
                    </li>
                </ul>
            ))}
        </nav>
    )
}

export default Nav;