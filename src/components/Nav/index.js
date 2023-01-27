import React, { useState } from 'react';

function Nav() {

    

    const [pages] = useState([
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
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);


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
                            className={`mx-2 ${currentPage.name === page.name && 'navActive'}`}
                            key={page.name}
                        >
                            <span onClick={() => {setCurrentPage(page)}}>
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