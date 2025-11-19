import React, { useState } from 'react';
import './AuthPage.css'; // This imports the CSS file we will create next
import { FaGoogle, FaFacebookF } from 'react-icons/fa'; // Make sure you ran: npm install react-icons

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="auth-page-wrapper">
            <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">

                {/* --- SIGN UP FORM --- */}
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container" style={{ margin: '20px 0' }}>
                            <a href="#" className="social-icon"><FaGoogle /></a>
                            <a href="#" className="social-icon"><FaFacebookF /></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <select defaultValue="" style={{ color: '#555' }}>
                            <option value="" disabled>I am a...</option>
                            <option value="parent">Parent</option>
                            <option value="teacher">Teacher</option>
                            <option value="school">School Admin</option>
                        </select>
                        <button>Sign Up</button>
                    </form>
                </div>

                {/* --- SIGN IN FORM --- */}
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign In</h1>
                        <div className="social-container" style={{ margin: '20px 0' }}>
                            <a href="#" className="social-icon"><FaGoogle /></a>
                            <a href="#" className="social-icon"><FaFacebookF /></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>

                {/* --- OVERLAY --- */}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with your school and community, please login with your personal info</p>
                            <button className="ghost" onClick={(e) => { e.preventDefault(); setIsSignUp(false); }}>
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start your journey with EduConnect today.</p>
                            <button className="ghost" onClick={(e) => { e.preventDefault(); setIsSignUp(true); }}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;