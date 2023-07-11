import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import {Navbar} from "./NavbarAndFooter/Navbar";
import {Home} from "./Layouts/Home";
import {Footer} from "./NavbarAndFooter/Footer";
import {SignUp} from "./Layouts/Components/SignUp";
import {Security} from '@okta/okta-react';
import {Login} from "./Layouts/Components/Login";



const MainApp = () => {
    const location = useLocation();
    const showNavbarAndFooter = location.pathname !== '/signup' && location.pathname !== '/login';

    return (
        <>
            {showNavbarAndFooter && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/login" element={<Login />} />
            </Routes>
            {showNavbarAndFooter && <Footer />}
        </>
    );
};

export const App = () => {
    return (
        <BrowserRouter>
            <div>
                <MainApp />
            </div>
        </BrowserRouter>
    );
};

export default App;