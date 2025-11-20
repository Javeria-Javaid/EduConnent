import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';

// Import your existing landing page components
import CardNav from './components/CardNav/CardNav';
import Hero from './components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';
import FeatureSection from './components/FeatureSection/FeatureSection';
import RoleSection from './components/RoleSection/RoleSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import './index.css';

// Import AuthPage
import AuthPage from './AuthPage';

// --- COMPONENT 1: The Landing Page (Your original content) ---
const LandingPage = () => {
    const navigate = useNavigate();

    // Nav Items Data
    const navItems = [
        {
            label: "Home",
            bgColor: "#f0f9ff",
            textColor: "#0369a1",
            links: [
                { label: "Welcome", href: "#home", ariaLabel: "Welcome to EduConnect" },
                {
                    label: "Get Started",
                    href: "/login",
                    onClick: (e) => { e.preventDefault(); navigate('/login'); },
                    ariaLabel: "Get started with EduConnect"
                },
                { label: "Platform Tour", href: "#tour", ariaLabel: "Take a platform tour" }
            ]
        },
        {
            label: "About",
            bgColor: "#fef7cd",
            textColor: "#854d0e",
            links: [
                { label: "Our Story", href: "#about", ariaLabel: "Learn our story" },
                { label: "Mission & Vision", href: "#mission", ariaLabel: "Our mission and vision" },
                { label: "Our Team", href: "#team", ariaLabel: "Meet our team" }
            ]
        },
        {
            label: "Features",
            bgColor: "#f3e8ff",
            textColor: "#7e22ce",
            links: [
                { label: "Learning Tools", href: "#features", ariaLabel: "Learning tools and features" },
                { label: "Interactive Content", href: "#interactive", ariaLabel: "Interactive learning content" },
                { label: "Progress Tracking", href: "#progress", ariaLabel: "Progress tracking features" }
            ]
        },
        {
            label: "Roles",
            bgColor: "#dcfce7",
            textColor: "#166534",
            links: [
                { label: "For Students", href: "#students", ariaLabel: "Features for students" },
                { label: "For Educators", href: "#educators", ariaLabel: "Features for educators" },
                { label: "For Institutions", href: "#institutions", ariaLabel: "Features for institutions" }
            ]
        },
        {
            label: "Contact",
            bgColor: "#ffe4e6",
            textColor: "#be123c",
            links: [
                { label: "Get in Touch", href: "#contact", ariaLabel: "Contact us" },
                { label: "Support", href: "#support", ariaLabel: "Get support" },
                { label: "Partnership", href: "#partnership", ariaLabel: "Partnership inquiries" }
            ]
        }
    ];

    const heroProps = {
        title: "Connecting Schools, Parents, Teachers & Vendors — All in One Place.",
        subtitle: "A simpler way to find schools, apply for admissions, explore teaching jobs, and access trusted educational services — all through one unified platform.",
        primaryButton: {
            text: "Get Started",
            onClick: () => navigate('/login')
        },
        secondaryButton: {
            text: "Platform tour",
            onClick: () => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }
        },
        background: "solid",
        backgroundProps: {
            gradient: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
            color: "#ffffff"
        },
        className: "fade-in",
    };

    return (
        <div className="LandingPage">
            <CardNav
                logo="/educonnect_logo.png"
                logoAlt="EduConnect"
                items={navItems}
                baseColor="#1e293b"
                buttonBgColor="#66a1be"
                buttonTextColor="#ffffff"
            />
            <Hero {...heroProps} />
            <AboutSection />
            <FeatureSection />
            <RoleSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

// --- COMPONENT 2: The Main App (Handles Routing) ---
function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <div className="App">
                <Toaster position="top-right" />
                <Routes>
                    {/* Route 1: The Homepage */}
                    <Route path="/" element={<LandingPage />} />

                    {/* Route 2: The Login/Sign Up Page */}
                    <Route
                        path="/login"
                        element={
                            <AuthPage
                                onLogin={() => setIsAuthenticated(true)}
                            />
                        }
                    />

                    {/* Simple redirect for admin routes for now */}
                    <Route
                        path="/admin/*"
                        element={
                            <div className="min-h-screen flex items-center justify-center">
                                <div className="text-center">
                                    <h2 className="text-2xl font-bold mb-4">Admin Dashboard Coming Soon</h2>
                                    <p className="text-gray-600">The admin dashboard is being redesigned and will be available soon.</p>
                                </div>
                            </div>
                        }
                    />

                    {/* Redirect unknown routes to home */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;