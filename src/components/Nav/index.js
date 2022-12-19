import React from 'react';

function Nav() {
    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera">🎬</span> What2Watch?!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <span>Browse</span>
                    </li>
                    <li className='mx-2'>
                        <a href="#login">
                            Login
                        </a>
                    </li>
                    <li className='mx-2'>
                        <a href="#login">
                            Sign-Up
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;