import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

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
                <Link to="/">
                    <span role="img" aria-label="clicker">🎬</span> What2Watch
                </Link>
            </h2>
            <nav>
                <ul className='flex-row'>
                    {pages.map((page) => (
                        <Link to={page.name}>
                            <li
                                className={`mx-1 ${currentPage.name === page.name && 'navActive'}`}
                                key={page.name}
                            >
                                <span onClick={() => { setCurrentPage(page) }}>
                                    {page.name}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;