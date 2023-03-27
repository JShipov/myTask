import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import {Navbar} from "./NavbarAndFooter/Navbar";
import {Home} from "./Layouts/Home";
import {Footer} from "./NavbarAndFooter/Footer";
import {SignUp} from "./Layouts/Components/SignUp";
import {OktaConfig} from "./Lib/OktaConfig";
import {OktaAuth} from '@okta/okta-auth-js';
import LoginWidget from "./Auth/LoginWidget";
import {Security} from '@okta/okta-react';

const oktaAuth = new OktaAuth(OktaConfig);

const restoreOriginalUri = async (_oktaAuth: OktaAuth, originalUri: string) => {
    window.location.replace(originalUri);
};

const MainApp = () => {
    const location = useLocation();
    const showNavbarAndFooter = location.pathname !== '/signup' && location.pathname !== '/login';

    return (
        <>
            {showNavbarAndFooter && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LoginWidget config={OktaConfig} />} />
            </Routes>
            {showNavbarAndFooter && <Footer />}
        </>
    );
};

export const App = () => {
    return (
        <BrowserRouter>
            <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
                <div>
                    <MainApp />
                </div>
            </Security>
        </BrowserRouter>
    );
};

export default App;