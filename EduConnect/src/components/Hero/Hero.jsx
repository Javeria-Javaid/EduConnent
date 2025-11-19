import React from 'react';
import DecryptedText from '../DecryptedText/DecryptedText';
import './Hero.css';
import educonnectLogo from '../../assets/educonnectLogo/educonnect_logo.png';

const Hero = ({
                  title,
                  subtitle,
                  background = "gradient",
                  backgroundProps = {
                      gradient: "linear-gradient(135deg, #1e293b 0%, #1e293b 100%)",
                      color: "#1e293b"
                  },
                  primaryButton = {
                      text: "Start Learning Free",
                      onClick: () => console.log("Primary button clicked")
                  },
                  secondaryButton = {
                      text: "Explore Courses",
                      onClick: () => console.log("Secondary Courses clicked")
                  },
                  className = ""
              }) => {

    const getBackgroundStyle = () => {
        switch (background) {
            case 'gradient':
                return { background: backgroundProps.gradient };
            case 'solid':
                return { backgroundColor: backgroundProps.color };
            case 'image':
                return {
                    backgroundImage: `url(${backgroundProps.imageUrl || ''})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                };
            default:
                return { background: backgroundProps.gradient };
        }
    };

    // Placeholder data for 5 key features (5 circles total)
    const features = [
        { name: "Schools & Admissions", icon: "🏫" }, // 0
        { name: "Jobs & Careers", icon: "💼" },       // 1
        { name: "Educational Services", icon: "🌐" }, // 2
        { name: "Unified Platform", icon: "🔗" },    // 3
        { name: "Parent & Teacher Connect", icon: "👪" } // 4
    ];

    return (
        <section
            id="home"
            className={`hero-section ${className}`}
            style={getBackgroundStyle()}
        >
            <div className="hero-container">
                <div className="hero-content-grid">

                    {/* Left Column: Text Content */}
                    <div className="hero-text-content">
                        <h1 className="hero-title">
                            <DecryptedText
                                text={title}
                                animateOn="view"
                                sequential={true}
                                revealDirection="center"
                                speed={15}
                                className="hero-revealed-title"
                                encryptedClassName="hero-encrypted-char"
                            />
                        </h1>

                        <p className="hero-subtitle">
                            <DecryptedText
                                text={subtitle}
                                animateOn="view"
                                sequential={true}
                                revealDirection="start"
                                speed={8}
                                className="hero-revealed-subtitle"
                                encryptedClassName="hero-encrypted-char"
                            />
                        </p>

                        <div className="hero-buttons">
                            {primaryButton && (
                                <button className="btn primary" onClick={primaryButton.onClick}>
                                    {primaryButton.text}
                                </button>
                            )}

                            {secondaryButton && (
                                <button className="btn secondary" onClick={secondaryButton.onClick}>
                                    {secondaryButton.text}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Logo and Features */}
                    <div className="hero-visual-content">
                        <div className="logo-feature-wrapper">
                            <img src={educonnectLogo} alt="EduConnect Portal Logo" className="hero-logo" />

                            {/* Feature Circles: Text removed */}
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="feature-circle"
                                >
                                    <span className="feature-icon">{feature.icon}</span>
                                    {/* Removed: <span className="feature-name">{feature.name}</span> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;