import React from 'react';
import DecryptedText from '../DecryptedText/DecryptedText';
import './Hero.css';

const Hero = ({
                  title,
                  subtitle,
                  background = "gradient",
                  backgroundProps = {
                      // Using the solid dark color configuration from App.jsx
                      gradient: "linear-gradient(135deg, #1e293b 0%, #1e293b 100%)",
                      color: "#1e293b"
                  },
                  primaryButton = {
                      text: "Get Started",
                      onClick: () => console.log("Primary button clicked")
                  },
                  secondaryButton = {
                      text: "Explore Features",
                      onClick: () => console.log("Explore Features clicked")
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

    return (
        <section
            id="home"
            className={`hero-section ${className}`}
            style={getBackgroundStyle()}
        >
            <div className="hero-container">

                {/* 💡 NEW: Absolute-positioned background shape for the floating blue curve effect */}
                <div className="hero-background-shape"></div>

                {/* Two-column grid container */}
                <div className="hero-content-grid">

                    {/* Left Column: Text Content */}
                    <div className="hero-text-content">
                        <h1 className="hero-title">
                            <DecryptedText
                                text={title}
                                animateOn="view"
                                sequential={true}
                                revealDirection="center"
                                // ✅ Faster speed
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
                                // ✅ Faster speed
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

                    {/* Right Column: Visual Element (Stacked Device Mockup) */}
                    <div className="hero-visual-content">
                        <div className="device-mockup-stack">

                            {/* Device 1: Tablet/Desktop View (Background) */}
                            <div className="device desktop">
                                <img
                                    src="admission_portal_3.png"
                                    alt="EduConnect Desktop Dashboard View"
                                    className="device-screen"
                                />
                            </div>

                            {/* Device 2: Mobile View (Foreground) */}
                            <div className="device mobile">
                                <img
                                    src="admission_portal_1.png"
                                    alt="EduConnect Mobile Application"
                                    className="device-screen"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;