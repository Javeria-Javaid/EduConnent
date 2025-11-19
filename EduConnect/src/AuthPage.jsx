import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <--- ADDED: For navigation
import './AuthPage.css';
import { FaGoogle, FaGithub, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

// --- MOCK CREDENTIALS FOR DEVELOPMENT ---
const ADMIN_EMAIL = 'admin@educonnect.com';
const ADMIN_PASSWORD = 'password123';
// ----------------------------------------

const AuthPage = () => {
    const navigate = useNavigate(); // <--- ADDED: Initialize navigate hook

    // State to toggle between Login (true) and Sign Up (false) forms
    const [isLoginView, setIsLoginView] = useState(true); // Start on Login view

    // State for Login Form Inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(''); // State for error messages

    // State for the multi-step feature (kept for the Sign Up side)
    const [currentStep] = useState(1); // Removed setter since we are not changing steps yet

    // Function to switch view
    const toggleView = (isLogin) => {
        setIsLoginView(isLogin);
        setLoginError(''); // Clear error when switching views
    };

    // --- LOGIN SUBMISSION HANDLER ---
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setLoginError(''); // Clear previous errors

        // Check against mock credentials
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            console.log("Login Successful! Redirecting to Dashboard...");
            // Navigate to the dashboard route defined in App.jsx
            navigate('/admin/dashboard');
        } else {
            // Display an error message
            setLoginError('Invalid email or password. Use admin@educonnect.com / password123');
        }
    };
    // --- END LOGIN SUBMISSION HANDLER ---


    // 1. Right Panel Content (Form)
    const renderRightPanelContent = () => {
        if (isLoginView) {
            // --- LOGIN FORM ---
            return (
                <form className="login-form" onSubmit={handleLoginSubmit}> {/* <--- USE HANDLER */}
                    <h2>Welcome Back!</h2>
                    <p className="form-subtitle">Log in to continue your journey with EduConnect.</p>

                    <div className="social-login-container">
                        <button type="button" className="social-login-btn google">
                            <FaGoogle className="social-icon" /> Google
                        </button>
                        <button type="button" className="social-login-btn github">
                            <FaGithub className="social-icon" /> Github
                        </button>
                    </div>

                    <div className="or-divider">Or</div>

                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // <--- CAPTURE EMAIL
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // <--- CAPTURE PASSWORD
                    />

                    {/* Display Error Message */}
                    {loginError && <p className="login-error-message">{loginError}</p>}

                    <div className="forgot-password-link">
                        <a href="#" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
                    </div>

                    <button type="submit" className="login-submit-btn">
                        <FaSignInAlt className="submit-icon" /> Log In
                    </button>

                    <p className="signup-link-text">
                        Don't have an account?
                        <a href="#" onClick={() => toggleView(false)}> Sign Up</a>
                    </p>
                </form>
            );
        } else {
            // --- SIGN UP FORM (Your existing Sign Up form) ---
            return (
                <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
                    <h2>Sign Up Account</h2>
                    <p className="form-subtitle">Enter your personal data to create your account.</p>

                    <div className="social-login-container">
                        <button type="button" className="social-login-btn google">
                            <FaGoogle className="social-icon" /> Google
                        </button>
                        <button type="button" className="social-login-btn github">
                            <FaGithub className="social-icon" /> Github
                        </button>
                    </div>

                    <div className="or-divider">Or</div>

                    <div className="name-fields">
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Last Name" required />
                    </div>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <small>Must be at least 8 characters.</small>

                    <button type="submit" className="signup-submit-btn">
                        <FaUserPlus className="submit-icon" /> Sign Up
                    </button>

                    <p className="login-link-text">
                        Already have an account?
                        <a href="#" onClick={() => toggleView(true)}> Log In</a>
                    </p>
                </form>
            );
        }
    };

    // 2. Left Panel Content (Steps/Text)
    const renderLeftPanelContent = () => {
        if (isLoginView) {
            // --- LOGIN VIEW CONTENT ---
            return (
                <div className="auth-left-content">
                    <h1>Join Our Community</h1>
                    <p>Don't have an account yet? Sign up to access all the features of the EduConnect platform.</p>
                    <button className="auth-left-cta" onClick={() => toggleView(false)}>
                        Sign Up <FaUserPlus />
                    </button>
                </div>
            );
        } else {
            // --- SIGN UP VIEW CONTENT (Your existing steps) ---
            return (
                <div className="auth-left-content">
                    <h1>Get Started with Us</h1>
                    <p>Complete these easy steps to register your account.</p>

                    <div className="auth-steps-container">
                        <div className={`auth-step-item ${currentStep === 1 ? 'active' : ''}`}>
                            <div className="auth-step-number">1</div>
                            <div className="auth-step-text">Sign up your account</div>
                        </div>
                        <div className={`auth-step-item ${currentStep === 2 ? 'active' : ''}`}>
                            <div className="auth-step-number">2</div>
                            <div className="auth-step-text">Set up your workspace</div>
                        </div>
                        <div className={`auth-step-item ${currentStep === 3 ? 'active' : ''}`}>
                            <div className="auth-step-number">3</div>
                            <div className="auth-step-text">Set up your profile</div>
                        </div>
                    </div>
                </div>
            );
        }
    };


    // --- MAIN RENDER ---
    return (
        <div className="auth-page-wrapper dark-theme">
            <div className="auth-card-container">

                {/* LEFT SECTION: Dynamic Content based on view */}
                <div className={`auth-left-panel ${isLoginView ? 'login-bg' : 'signup-bg'}`}>
                    {renderLeftPanelContent()}
                </div>

                {/* RIGHT SECTION: Dynamic Form based on view */}
                <div className="auth-right-panel">
                    {renderRightPanelContent()}
                </div>

            </div>
        </div>
    );
};

export default AuthPage;