import React from 'react'
import CardNav from './components/CardNav/CardNav'
import './index.css'

function App() {
    const navItems = [
        {
            label: "Products",
            bgColor: "#f0f9ff",
            textColor: "#0369a1",
            links: [
                { label: "Online Courses", href: "#courses", ariaLabel: "Browse online courses" },
                { label: "Tutoring", href: "#tutoring", ariaLabel: "Find tutors" },
                { label: "Resources", href: "#resources", ariaLabel: "Learning resources" }
            ]
        },
        {
            label: "Company",
            bgColor: "#fef7cd",
            textColor: "#854d0e",
            links: [
                { label: "About Us", href: "#about", ariaLabel: "Learn about EduConnect" },
                { label: "Careers", href: "#careers", ariaLabel: "View career opportunities" },
                { label: "Blog", href: "#blog", ariaLabel: "Read our blog" }
            ]
        },
        {
            label: "Support",
            bgColor: "#f3e8ff",
            textColor: "#7e22ce",
            links: [
                { label: "Help Center", href: "#help", ariaLabel: "Get help and support" },
                { label: "Contact", href: "#contact", ariaLabel: "Contact us" },
                { label: "FAQ", href: "#faq", ariaLabel: "Frequently asked questions" }
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

            {/* Hero Section with consistent width */}
            <section className="page-section hero-section">
                <div className="content-container">
                    <div className="hero-content">
                        <h1>Transform Your Learning Journey with EduConnect</h1>
                        <p>Access world-class education, expert tutors, and interactive resources all in one platform designed for modern learners.</p>
                        <div className="hero-buttons">
                            <button className="btn primary">Start Learning Free</button>
                            <button className="btn secondary">Explore Courses</button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="placeholder-visual">
                            <span>Interactive Learning Platform</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="page-section features-section">
                <div className="content-container">
                    <h2>Why EduConnect Stands Out</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🎯</div>
                            <h3>Personalized Learning</h3>
                            <p>AI-powered recommendations tailored to your learning style and goals.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🚀</div>
                            <h3>Fast Progress Tracking</h3>
                            <p>Monitor your improvement with detailed analytics and progress reports.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">👥</div>
                            <h3>Community Support</h3>
                            <p>Join study groups and connect with peers and mentors worldwide.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="page-section cta-section">
                <div className="content-container">
                    <h2>Ready to Start Your Learning Journey?</h2>
                    <p>Join thousands of students already transforming their education with EduConnect.</p>
                    <button className="btn primary large">Get Started Today</button>
                </div>
            </section>
        </div>
    )
}

export default App