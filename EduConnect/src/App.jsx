import React from 'react';
import CardNav from './components/CardNav/CardNav';
import Hero from './components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';
import FeatureSection from './components/FeatureSection/FeatureSection';
import RoleSection from './components/RoleSection/RoleSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
    // Nav Items Data - LIGHT/CONTRASTING colors for the dropdown cards
    const navItems = [
        {
            label: "Home",
            bgColor: "#f0f9ff", // Light Blue
            textColor: "#0369a1", // Dark Blue Text
            links: [
                { label: "Welcome", href: "#home", ariaLabel: "Welcome to EduConnect" },
                { label: "Get Started", href: "#get-started", ariaLabel: "Get started with EduConnect" },
                { label: "Platform Tour", href: "#tour", ariaLabel: "Take a platform tour" }
            ]
        },
        {
            label: "About",
            bgColor: "#fef7cd", // Light Yellow
            textColor: "#854d0e", // Dark Brown Text
            links: [
                { label: "Our Story", href: "#about", ariaLabel: "Learn our story" },
                { label: "Mission & Vision", href: "#mission", ariaLabel: "Our mission and vision" },
                { label: "Our Team", href: "#team", ariaLabel: "Meet our team" }
            ]
        },
        {
            label: "Features",
            bgColor: "#f3e8ff", // Light Purple
            textColor: "#7e22ce", // Dark Purple Text
            links: [
                { label: "Learning Tools", href: "#features", ariaLabel: "Learning tools and features" },
                { label: "Interactive Content", href: "#interactive", ariaLabel: "Interactive learning content" },
                { label: "Progress Tracking", href: "#progress", ariaLabel: "Progress tracking features" }
            ]
        },
        {
            label: "Roles",
            bgColor: "#dcfce7", // Light Green
            textColor: "#166534", // Dark Green Text
            links: [
                { label: "For Students", href: "#students", ariaLabel: "Features for students" },
                { label: "For Educators", href: "#educators", ariaLabel: "Features for educators" },
                { label: "For Institutions", href: "#institutions", ariaLabel: "Features for institutions" }
            ]
        }
        ,
        {
            label: "Contact",
            bgColor: "#ffe4e6", // Light Red/Pink
            textColor: "#be123c", // Dark Red Text
            links: [
                { label: "Get in Touch", href: "#contact", ariaLabel: "Contact us" },
                { label: "Support", href: "#support", ariaLabel: "Get support" },
                { label: "Partnership", href: "#partnership", ariaLabel: "Partnership inquiries" }
            ]
        }
    ]

    const heroProps = {
        title: "Connecting Schools, Parents, Teachers & Vendors — All in One Place.",
        subtitle: "A simpler way to find schools, apply for admissions, explore teaching jobs, and access trusted educational services — all through one unified platform.",
        primaryButton: {
            text: "Get Started",
            onClick: () => console.log("Get Started clicked")
        },
        secondaryButton: {
            text: "Explore Features",
            onClick: () => console.log("Explore Features clicked")
        },
        background: "solid",
        backgroundProps: {
            gradient: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
            color: "#ffffff"
        },
        className: "fade-in",
    }

    return (
        <div className="App">
            <CardNav
                // Using a white logo for the dark background
                logo="/image_59bd60.png"
                logoAlt="EduConnect"
                items={navItems}
                // SETTING THE MAIN NAV BAR TO DARK BLUE
                baseColor="#1e293b"
                buttonBgColor="#66a1be"
                buttonTextColor="#ffffff"
            />

            {/* Main Sections */}
            <Hero {...heroProps} />
            <AboutSection />
            <FeatureSection />
            <RoleSection />
            <ContactSection />

            {/* Footer */}
            <Footer />

        </div>
    )
}

export default App;