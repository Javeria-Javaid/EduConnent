import React from 'react'
import CardNav from './components/CardNav/CardNav'
import './index.css'

function App() {
    const navItems = [
        {
            label: "Home",
            bgColor: "#f0f9ff",
            textColor: "#0369a1",
            links: [
                { label: "Welcome", href: "#home", ariaLabel: "Welcome to EduConnect" },
                { label: "Get Started", href: "#get-started", ariaLabel: "Get started with EduConnect" },
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
    ]

    return (
        <div className="App">
            <CardNav
                logo="/educonnect_logo.png"
                logoAlt="EduConnect"
                items={navItems}
                baseColor="#ffffff"
                buttonBgColor="#2563eb"
                buttonTextColor="#ffffff"
            />

            {/* Your page sections */}
            <section id="home" className="page-section hero-section">
                <div className="content-container">
                    <div className="hero-content">
                        <h1>Welcome to EduConnect</h1>
                        <p>Your gateway to transformative learning experiences</p>
                    </div>
                </div>
            </section>

            <section id="about" className="page-section about-section">
                <div className="content-container">
                    <h2>About EduConnect</h2>
                    {/* About content */}
                </div>
            </section>

            <section id="features" className="page-section features-section">
                <div className="content-container">
                    <h2>Features</h2>
                    {/* Features content */}
                </div>
            </section>

            <section id="students" className="page-section roles-section">
                <div className="content-container">
                    <h2>For Students</h2>
                    {/* Roles content */}
                </div>
            </section>

            <section id="contact" className="page-section contact-section">
                <div className="content-container">
                    <h2>Contact Us</h2>
                    {/* Contact content */}
                </div>
            </section>
        </div>
    )
}

export default App