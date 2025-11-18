import React from 'react';
import DecryptedText from '../DecryptedText/DecryptedText';
import './Hero.css';

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

    return (
        <section
            id="home"
            className={`hero-section ${className}`}
            style={getBackgroundStyle()}
        >
            <div className="hero-container">
                {/* 💡 The text content now occupies the full width */}
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
            </div>
        </section>
    );
};

export default Hero;