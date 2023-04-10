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

    const firstSlice = pages.slice(0, 3);
    const secondSlice = pages.slice(3, 5);
    const profileSlice = pages.slice(5, 6);
    const logoutSlice = pages.slice(6, 7);


    const logout = event => {
        console.log("LOGOUT!");
        event.preventDefault();
        Auth.logout();
    };



    return (
        <header className='flex-row px-1'>
            <h2>
                <Link to="/">
                    <span role="img" aria-label="clicker">🎬</span> What2Watch
                </Link>
            </h2>
            <nav>
                <ul className='flex-row'>
                    {firstSlice.map((page) => (
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
                    {Auth.loggedIn() ? (
                        <>
                            {profileSlice.map((page) => (
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
                            {logoutSlice.map((page) => (
                                <Link to={page.name} onClick={logout}>
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
                        </>
                    ) : (
                        <>
                            {secondSlice.map((page) => (
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
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;