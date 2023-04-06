import React, { useState } from 'react';

export const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8070/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registration complete successfully');
            } else {
                alert('Registration error: ${data.message}');
            }
        } catch (error) {
            alert('Connection error. Please, try again later');
        }
    };


    return (
        <div className="signup-container d-flex justify-content-center align-items-center vh-100">
            <div className="me-5">
                <img src={require('/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/LoginPic.png')} alt="signIn-image" />
            </div>
            <div className="d-flex flex-column">
                <h1 className="d-flex justify-content-center">Sign Up as a customer</h1>
                <form className="signup-text" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="first-name">First name:</label>
                        <input type="text" name="firstName" className="form-control" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last name:</label>
                        <input type="text" name="lastName" className="form-control" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="text" name="email" className="form-control" placeholder="Enter your email" value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" className="form-control" placeholder="Create a password (8 character)" value={formData.password} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input type="password" name="confirmPassword" className="form-control" placeholder="Repeat the password" value={formData.confirmPassword} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-type">User Type:</label>
                        <select className="form-control" id="user-type" name="userType" value={formData.userType} onChange={handleSelectChange} defaultValue="">
                            <option value="" disabled>Please choose a user type</option>
                            <option value="customer">Customer (create a task)</option>
                            <option value="freelancer">Freelancer (take a task)</option>
                        </select>
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

