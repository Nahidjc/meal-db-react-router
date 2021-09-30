import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="container-fluid">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarCenteredExample"
                        aria-controls="navbarCenteredExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>


                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarCenteredExample"
                    >

                        <ul className="mb-2 navbar-nav mb-lg-0">
                            <li className="m-2 nav-item">
                                <Link to="/">Home</Link>

                            </li>
                            <li className="m-2 nav-item">
                                <Link to="/">Home</Link>
                            </li>



                        </ul>

                    </div>

                </div>

            </nav>
        </div>
    );
};

export default Navbar;