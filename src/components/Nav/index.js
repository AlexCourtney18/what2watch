import React from 'react';

function Nav() {

    

    const pages = [
        {
            name: "About"
        },
        {
            name: "Browse"
        },
        {
            name: "Login"
        },
        {
            name: "Sign-Up"
        },
    ];

    function pageSelected(name) {
        console.log(`${name} clicked`)
    }


    return (
        <header>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="clicker">🎬</span> What2Watch
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>

                    {pages.map((page) => (
                        <li 
                            className='mx-2'
                            key={page.name}
                        >
                            <span onClick={() => pageSelected(page.name)}>
                                {page.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;