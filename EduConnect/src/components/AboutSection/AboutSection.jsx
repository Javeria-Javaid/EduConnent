import React from 'react';
import './AboutSection.css'; // Import the CSS for this component

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                {/* Left Column: Visuals and Social Proof */}
                <div className="about-visuals">
                    <div className="visual-card visual-card-main">
                        {/* Placeholder for Main Image */}
                        <div className="image-placeholder main">Main Visual</div>
                    </div>
                    <div className="visual-card visual-card-side">
                        {/* Placeholder for Side-Top Image */}
                        <div className="image-placeholder side-top">Side Visual 1</div>
                    </div>
                    <div className="visual-card visual-card-bottom">
                        {/* Placeholder for Side-Bottom Image */}
                        <div className="image-placeholder side-bottom">Side Visual 2</div>
                        <div className="best-ratings">
                            <h4>Best ratings</h4>
                            <div className="rating-emojis">
                                <span>😀</span>
                                <span>😁</span>
                                <span>😋</span>
                                <span>🤩</span>
                                <span>😍</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Stats, Text, and CTA */}
                <div className="about-content">
                    {/* Stat Card */}
                    <div className="about-stat-card">
                        <div className="stat-value">30,000+</div>
                        <div className="stat-description">
                            <p>A single place where schools, parents, teachers, and vendors can find each other and
                                get things done with less confusion.</p>
                            {/* Placeholder for small chart icon */}
                            <span className="stat-chart-icon">📈</span>
                        </div>
                    </div>

                    <h3 className="about-subheading">OUR STORY</h3>
                    <h2 className="about-heading">ABOUT EDUCONNECT</h2>

                    {/* 💡 UPDATED DESCRIPTION TEXT */}
                    <p className="about-description">
                        EduConnect was built around a simple idea:schools, parents, teachers, and vendors should be able to find each other without the usual maze of visits,
                        calls, and guesswork. The platform brings everything into one space — school admissions, teaching jobs, vendor services,
                        and communication — so each part of the education cycle moves with a little more clarity. It isn’t trying to replace
                        anyone’s work… just smooth the edges. Whether a parent needs nearby schools, a teacher wants openings that match their
                        skills, a vendor hopes to connect with institutions, or a school needs an easier way to manage all of this, **EduConnect
                        gives them one shared place to start.
                    </p>

                    <button className="btn about-cta-button">EXPLORE MORE</button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;