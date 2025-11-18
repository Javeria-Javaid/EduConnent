import React from 'react';
import DecryptedText from '../DecryptedText/DecryptedText';
import './Hero.css';

const Hero = ({
                  title,
                  subtitle,
                  background = "gradient",
                  backgroundProps = {
                      // 💡 CURRENT DEFAULT GRADIENT (Dark Teal to Light Gray)
                      gradient: "linear-gradient(154deg, rgb(19 70 77) 40%, rgb(219 219 219) 166%)",
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
                <div className="hero-content">
                    <h1 className="hero-title">
                        {/* 💡 DecryptedText for Title Animation */}
                        <DecryptedText
                            text={title}
                            animateOn="view"
                            sequential={true} // Decrypts character by character
                            revealDirection="center" // Decrypts from the center outwards
                            // ✅ FASTER SPEED for title (15ms)
                            speed={15}
                            className="hero-revealed-title"
                            encryptedClassName="hero-encrypted-char"
                        />
                    </h1>

                    <p className="hero-subtitle">
                        {/* 💡 DecryptedText for Subtitle Animation */}
                        <DecryptedText
                            text={subtitle}
                            animateOn="view"
                            sequential={true}
                            revealDirection="start" // Decrypts from left to right
                            // ✅ FASTER SPEED for subtitle (8ms)
                            speed={8}
                            className="hero-revealed-subtitle"
                            encryptedClassName="hero-encrypted-char"
                        />
                    </p>

                    <div className="hero-buttons">
                        {primaryButton && (
                            <button
                                className="btn primary"
                                onClick={primaryButton.onClick}
                            >
                                {primaryButton.text}
                            </button>
                        )}

                        {secondaryButton && (
                            <button
                                className="btn secondary"
                                onClick={secondaryButton.onClick}
                            >
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