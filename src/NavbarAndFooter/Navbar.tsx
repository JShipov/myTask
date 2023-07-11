import React from "react";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {

    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    const handleLogInClick = () => {
        navigate('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container-fluid">
                <span className="navbar-brand"> Lend Place</span>
                <button className="navbar-toggler bg-white"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="NavbarDropdown"
                        aria-expanded="false"
                        aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarDropdown">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Advantages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">How it's work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FAQ</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <ul className="navbar-nav ms-3">
                            <li className="nav-item m-1">
                                <button type="button" className="btn" onClick={handleSignUpClick}>Sign up</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
