import React from 'react'
import CardNav from './components/CardNav/CardNav'
import Hero from './components/Hero/Hero'
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

    const heroProps = {
        title: "Transform Your Learning Journey with EduConnect",
        subtitle: "Access world-class education, expert tutors, and interactive resources all in one platform designed for modern learners.",
        primaryButton: {
            text: "Start Learning Free",
            onClick: () => console.log("Start Learning clicked")
        },
        secondaryButton: {
            text: "Explore Courses",
            onClick: () => console.log("Explore Courses clicked")
        },
        background: "gradient",
        backgroundProps: {
            gradient: "linear-gradient(135deg, #1e293b 0%, #1e293b 100%)",
            color: "#1e293b"
        },
        className: "fade-in"
    }

    return (
        <div className="App">
            <CardNav
                logo="/educonnect_logo.png"
                logoAlt="EduConnect"
                items={navItems}
                baseColor="#ffffff"
                buttonBgColor="#66a1be"
                buttonTextColor="#ffffff"
            />

            {/* ONLY use the Hero component - REMOVED the duplicate inline section */}
            <Hero {...heroProps} />

            {/* About Section */}
            <section id="about" className="page-section about-section">
                {/* ... about section content remains ... */}
            </section>

            {/* Features Section */}
            <section id="features" className="page-section features-section">
                {/* ... features section content remains ... */}
            </section>

            {/* Roles Section */}
            <section id="students" className="page-section roles-section">
                {/* ... roles section content remains ... */}
            </section>

            {/* Contact Section */}
            <section id="contact" className="page-section contact-section">
                {/* ... contact section content remains ... */}
            </section>

            {/* CTA Section */}
            <section className="page-section cta-section">
                {/* ... CTA section content remains ... */}
            </section>
        </div>
    )
}

export default App