import React from 'react';
import TextType from './TextType';
import './Hero.css';

const Hero = ({
                  title = "Transform Your Learning Journey with EduConnect",
                  subtitle = "Access world-class education, expert tutors, and interactive resources all in one platform designed for modern learners.",
                  primaryButton = {
                      text: "Start Learning Free",
                      onClick: () => console.log("Primary button clicked")
                  },
                  secondaryButton = {
                      text: "Explore Courses",
                      onClick: () => console.log("Secondary button clicked")
                  },
                  background = "gradient",
                  backgroundProps = {
                      gradient: "linear-gradient(135deg, #1e293b 0%, #1e293b 100%)",
                      color: "#1e293b"
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
                    backgroundImage: `url(${backgroundProps.imageUrl})`,
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
                        <TextType
                            text={[
                                "Transform Your Learning Journey with EduConnect",
                                "Access World-Class Education Resources",
                                "Learn Anytime, Anywhere with Expert Tutors"
                            ]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            as="span"
                            className="hero-type-animation"
                        />
                    </h1>

                    <p className="hero-subtitle">
                        <TextType
                            text={[
                                "Access world-class education, expert tutors, and interactive resources all in one platform designed for modern learners.",
                                "Join thousands of students transforming their education with cutting-edge technology and personalized learning paths.",
                                "Experience interactive courses, real-time progress tracking, and a global community of learners."
                            ]}
                            typingSpeed={40}
                            initialDelay={500}
                            pauseDuration={2000}
                            showCursor={true}
                            cursorCharacter="|"
                            as="span"
                            className="hero-subtitle-animation"
                        />
                    </p>

                    <div className="hero-buttons">
                        {primaryButton && (
                            <button
                                className="btn btn-primary"
                                onClick={primaryButton.onClick}
                            >
                                {primaryButton.text}
                            </button>
                        )}

                        {secondaryButton && (
                            <button
                                className="btn btn-secondary"
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