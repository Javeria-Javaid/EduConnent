import React, { useState } from 'react';
import './AuthPage.css';
import { FaGoogle, FaGithub, FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Added icons for buttons

const AuthPage = () => {
    // State to toggle between Login (true) and Sign Up (false) forms
    const [isLoginView, setIsLoginView] = useState(false);

    // State for the multi-step feature (kept for the Sign Up side)
    const [currentStep, setCurrentStep] = useState(1);

    // Function to switch view
    const toggleView = (isLogin) => {
        setIsLoginView(isLogin);
    };

    // --- CONTENT RENDER LOGIC ---

    // 1. Right Panel Content (Form)
    const renderRightPanelContent = () => {
        if (isLoginView) {
            // --- LOGIN FORM ---
            return (
                <form className="login-form" onSubmit={(e) => e.preventDefault()}>
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

                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />

                    <div className="forgot-password-link">
                        <a href="#" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
                    </div>

                    <button type="submit" className="login-submit-btn">
                        <FaSignInAlt className="submit-icon" /> Log In
                    </button>

                    <p className="signup-link-text">
                        Don't have an account?
                        <a href="#" onClick={(e) => toggleView(false)}> Sign Up</a>
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
                        <a href="#" onClick={(e) => toggleView(true)}> Log In</a>
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