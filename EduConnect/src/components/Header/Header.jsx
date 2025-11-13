import React, { useState, useEffect } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="logo">
                    <h2>YourBrand</h2>
                </div>

                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#features" onClick={closeMenu}>Features</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                    <button className="cta-button" onClick={closeMenu}>Get Started</button>
                </nav>

                <button
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </header>
    )
}

export default Header