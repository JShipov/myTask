import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type FormData = {
    username: string;
    password: string;
    email: string;
    role: { id: number } | '';
};
export const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({ username: '', password: '', email: '', role: '' });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const BASE_API = 'http://localhost:8080/api';

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let value: string | { id: number } = event.target.value;

        if (event.target.name === "role") {
            value = { id: Number(event.target.value) };
        }

        setFormData({ ...formData, [event.target.name]: value as any });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${BASE_API}/users`, formData);
            console.log(response);
            // Обработка успешной регистрации
            setSuccessMessage('Registration successful! Please log in.');
            setError('');
            navigate('/login');
        } catch (error: any) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);

            setError('An error occurred during registration. Please try again.');
            setSuccessMessage(''); // clear any success messages
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
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" className="form-control" placeholder="Enter your username" value={formData.username} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="text" name="email" className="form-control" placeholder="Enter your email" value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" className="form-control" placeholder="Create a password (8 character)" value={formData.password} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Role:</label>
                        <select className="form-control" id="role" name="role" value={formData.role !== '' ? formData.role.id : ''} onChange={handleChange} defaultValue="">
                            <option value="" disabled>Please choose a role</option>
                            <option value="1">Freelancer (take a task)</option>
                            <option value="2">Customer (take a task)</option>
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