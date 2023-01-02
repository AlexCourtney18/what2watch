import React from 'react';

function Nav() {

    function pageSelected() {
        console.log("hello")
    }


    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera">🎬</span> What2Watch
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <span onClick={pageSelected} >
                            <a href="#about">
                                About
                            </a>
                        </span>
                    </li>
                    <li className='mx-2'>
                        <span onClick={pageSelected} >
                            <a href="#browse">
                                Browse
                            </a>
                        </span>
                    </li>
                    <li className='mx-2'>
                    <span onClick={pageSelected} >
                            <a href="#login">
                                Login
                            </a>
                        </span>
                    </li>
                    <li className='mx-2'>
                    <span onClick={pageSelected} >
                            <a href="#signup">
                                Sign-Up
                            </a>
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;