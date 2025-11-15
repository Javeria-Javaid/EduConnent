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
                buttonBgColor="#66a1be" // Make sure this is set
                buttonTextColor="#ffffff"
            />

            {/* Hero Section */}
            <section id="home" className="page-section hero-section">
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

            {/* About Section */}
            <section id="about" className="page-section about-section">
                <div className="content-container">
                    <h2>About EduConnect</h2>
                    <div className="about-content">
                        <p>EduConnect is a revolutionary learning platform that bridges the gap between traditional education and modern technology. We believe in making quality education accessible to everyone, everywhere.</p>
                        <div className="about-features">
                            <div className="about-feature">
                                <h3>Our Mission</h3>
                                <p>To democratize education through innovative technology and personalized learning experiences.</p>
                            </div>
                            <div className="about-feature">
                                <h3>Our Vision</h3>
                                <p>A world where anyone can learn anything, anytime, with the best resources at their fingertips.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="page-section features-section">
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
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Mobile Friendly</h3>
                            <p>Learn on the go with our responsive design that works on all devices.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🏆</div>
                            <h3>Certification</h3>
                            <p>Earn recognized certificates to showcase your skills and achievements.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💼</div>
                            <h3>Career Ready</h3>
                            <p>Gain practical skills that employers are looking for in today's market.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roles Section */}
            <section id="students" className="page-section roles-section">
                <div className="content-container">
                    <h2>Designed for Everyone</h2>
                    <div className="roles-grid">
                        <div className="role-card">
                            <h3>For Students</h3>
                            <p>Access interactive courses, track your progress, and join a community of learners. Perfect for academic success and skill development.</p>
                            <ul>
                                <li>Personalized learning paths</li>
                                <li>Interactive assignments</li>
                                <li>Progress analytics</li>
                                <li>Peer collaboration</li>
                            </ul>
                        </div>
                        <div className="role-card">
                            <h3>For Educators</h3>
                            <p>Create engaging content, track student performance, and connect with learners worldwide. Expand your reach and impact.</p>
                            <ul>
                                <li>Course creation tools</li>
                                <li>Student analytics</li>
                                <li>Interactive teaching tools</li>
                                <li>Global audience reach</li>
                            </ul>
                        </div>
                        <div className="role-card">
                            <h3>For Institutions</h3>
                            <p>Transform your educational institution with our comprehensive platform. Manage courses, track performance, and enhance learning outcomes.</p>
                            <ul>
                                <li>Institution management</li>
                                <li>Bulk enrollment</li>
                                <li>Performance analytics</li>
                                <li>Custom branding</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="page-section contact-section">
                <div className="content-container">
                    <h2>Get In Touch</h2>
                    <div className="contact-content">
                        <div className="contact-info">
                            <h3>We'd Love to Hear From You</h3>
                            <p>Have questions about our platform? Interested in partnership opportunities? Reach out to our team.</p>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <strong>Email:</strong> hello@educonnect.com
                                </div>
                                <div className="contact-item">
                                    <strong>Phone:</strong> +1 (555) 123-4567
                                </div>
                                <div className="contact-item">
                                    <strong>Office Hours:</strong> Mon-Fri, 9AM-6PM EST
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Your Message" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn primary">Send Message</button>
                            </form>
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