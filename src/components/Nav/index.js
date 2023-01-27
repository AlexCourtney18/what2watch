import React, { useEffect } from 'react';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
        document.title = currentPage.name;
    }, [currentPage]);



    return (
        <header className='flex-row px-1'>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="clicker">🎬</span> What2Watch
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    {pages.map((page) => (
                        <li
                            className={`mx-1 ${currentPage.name === page.name && 'navActive'}`}
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