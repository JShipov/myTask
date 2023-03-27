import React from 'react';

export const SignUp = () => {
    return (
        <div className="signup-container d-flex justify-content-center align-items-center vh-100">
            <div className="me-5">
                <img src={require('/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/LoginPic.png')} alt="signIn-image"/>
            </div>
            <div className="d-flex flex-column">
                <h1 className="d-flex justify-content-center">Sign Up as a customer</h1>
                <form className="signup-text">
                    <div className="form-group">
                        <label htmlFor="first-name">First name:</label>
                        <input type="text" className="form-control" placeholder="Enter your first name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last name:</label>
                        <input type="text" className="form-control" placeholder="Enter your last name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="text" className="form-control" placeholder="Enter your email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" placeholder="Create a password (8 character)"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input type="password" className="form-control" placeholder="Repeat the password"/>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <button type="submit" className="btn mt-4 signup-button">Create an account</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

