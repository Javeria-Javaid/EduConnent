import React from 'react';
import './AboutSection.css';

// IMPORTING THE IMAGES
import admissionPortal1Img from '../../assets/admission_portal_1.png';
import admissionPortal2Img from '../../assets/admission_portal_2.png';
import admissionPortal3Img from '../../assets/admission_portal_3.png';


const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                {/* Left Column: Visuals and Social Proof */}
                <div className="about-visuals">

                    {/* Visual Card 1: Main (admission_portal_2.png) */}
                    {/* 💡 NEW CLASS: .visual-card-1 */}
                    <div className="visual-card visual-card-main visual-card-1">
                        <img
                            src={admissionPortal2Img}
                            alt="Admissions Reports and Analytics Dashboard"
                            className="about-image main"
                        />
                    </div>

                    {/* Visual Card 2: Side-Top (admission_portal_1.png) */}
                    {/* 💡 NEW CLASS: .visual-card-2 */}
                    <div className="visual-card visual-card-side visual-card-2">
                        <img
                            src={admissionPortal1Img}
                            alt="Student Application Journey Map or Process Flow"
                            className="about-image side-top"
                        />
                    </div>

                    {/* Visual Card 3: Side-Bottom (admission_portal_3.png) */}
                    {/* 💡 NEW CLASS: .visual-card-3 */}
                    <div className="visual-card visual-card-bottom visual-card-3">
                        <img
                            src={admissionPortal3Img}
                            alt="Counselor and Student Communication Interface"
                            className="about-image side-bottom"
                        />

                        {/* EMOJIS ELIMINATED - Replacing with a simpler text element */}
                        <div className="best-ratings-label">
                            **Trusted by 300+ Institutions**
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
                            <span className="stat-chart-icon">📈</span>
                        </div>
                    </div>

                    <h3 className="about-subheading">OUR STORY</h3>
                    <h2 className="about-heading">ABOUT EDUCONNECT</h2>

                    {/* Description Text */}
                    <p className="about-description">
                        EduConnect was built around a simple idea:schools, parents, teachers, and vendors should be able to find each other without the usual maze of visits,
                        calls, and guesswork. The platform brings everything into one space — school admissions, teaching jobs, vendor services,
                        and communication — so each part of the education cycle moves with a little more clarity. It isn’t trying to replace
                        anyone’s work… just smooth the edges. Whether a parent needs nearby schools, a teacher wants openings that match their
                        skills, a vendor hopes to connect with institutions, or a school needs an easier way to manage all of this, **EduConnect
                        gives them one shared place to start.**
                    </p>

                    <button className="btn about-cta-button">EXPLORE MORE</button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;