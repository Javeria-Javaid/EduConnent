import React from 'react';
import DecryptedText from '../DecryptedText/DecryptedText';
import './Hero.css';
// 💡 Assuming your logo is named educonnect_logo.png and is in the public folder or correctly imported
import educonnectLogo from './educonnect_logo.png';

const Hero = ({
                  title,
                  subtitle,
                  background = "gradient",
                  backgroundProps = {
                      gradient: "linear-gradient(135deg, #1e293b 0%, #1e293b 100%)", // Using the solid color from App.jsx
                      color: "#1e293b"
                  },
                  primaryButton = {
                      text: "Start Learning Free",
                      onClick: () => console.log("Primary button clicked")
                  },
                  secondaryButton = {
                      text: "Explore Courses",
                      onClick: () => console.log("Secondary button clicked")
                  },
                  className = ""
              }) => {

    const getBackgroundStyle = () => {
        switch (background) {
            case 'gradient':
                // Check App.jsx heroProps for the current gradient
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

    // Placeholder data for features - replace with your actual features
    const features = [
        { name: "Live Classes", icon: "📚" },
        { name: "Quizzes & Tests", icon: "📝" },
        { name: "Certificates", icon: "🏆" },
        { name: "Student Community", icon: "🤝" },
        { name: "Progress Tracking", icon: "📈" }
    ];

    return (
        <section
            id="home"
            className={`hero-section ${className}`}
            style={getBackgroundStyle()}
        >
            <div className="hero-container">
                {/* 💡 RE-INTRODUCED: Flex/Grid container for two columns */}
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
                            {/* The logo image is placed here */}
                            <img src={educonnectLogo} alt="EduConnect Portal Logo" className="hero-logo" />

                            {/* Feature Circles */}
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="feature-circle"
                                    style={{ '--i': index, '--total': features.length }}
                                >
                                    <span className="feature-icon">{feature.icon}</span>
                                    <span className="feature-name">{feature.name}</span>
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