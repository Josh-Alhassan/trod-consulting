"use client"

import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.navWrapper}>

                    <div className={styles.navLeft}>
                        {/* Logo */}
                        <div className={styles.logo}>
                            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4446 21.1006H10.8283V13.2077H8.7275V11.5972H12.4446V21.1006Z" fill="black" />
                                <path d="M12.4446 21.1006H10.8283V13.2077H8.7275V11.5972H12.4446V21.1006Z" fill="url(#paint0_linear_2_921)" />
                                <path d="M15.3534 24H13.7375V10.3087H5.81834V8.69778H15.3534V24Z" fill="black" />
                                <path d="M15.3534 24H13.7375V10.3087H5.81834V8.69778H15.3534V24Z" fill="url(#paint1_linear_2_921)" />
                                <path d="M21.1717 21.1006H19.5558V11.5972H23.2729V13.2077H21.1717V21.1006Z" fill="black" />
                                <path d="M21.1717 21.1006H19.5558V11.5972H23.2729V13.2077H21.1717V21.1006Z" fill="url(#paint2_linear_2_921)" />
                                <path d="M18.2626 24H16.6466V8.69778H26.1821V10.3087H18.2626V24Z" fill="black" />
                                <path d="M18.2626 24H16.6466V8.69778H26.1821V10.3087H18.2626V24Z" fill="url(#paint3_linear_2_921)" />
                                <path d="M29.0912 5.79839H2.90916V7.40929H29.0912V5.79839Z" fill="black" />
                                <path d="M29.0912 5.79839H2.90916V7.40929H29.0912V5.79839Z" fill="url(#paint4_linear_2_921)" />
                                <path d="M32 2.89899H0V4.5099H32V2.89899Z" fill="black" />
                                <path d="M32 2.89899H0V4.5099H32V2.89899Z" fill="url(#paint5_linear_2_921)" />
                                <path d="M32 0H1.71274e-05V1.61091H32V0Z" fill="black" />
                                <path d="M32 0H1.71274e-05V1.61091H32V0Z" fill="url(#paint6_linear_2_921)" />
                                <defs>
                                    <linearGradient id="paint0_linear_2_921" x1="-7.12905" y1="-6.44846" x2="13.13" y2="8.48806" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.235951" stopColor="#06E9FC" />
                                        <stop offset="1" stopColor="#075BF7" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2_921" x1="-7.12905" y1="-6.44846" x2="13.13" y2="8.48806" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.235951" stopColor="#06E9FC" />
                                        <stop offset="1" stopColor="#075BF7" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_2_921" x1="-7.12905" y1="-6.44846" x2="13.13" y2="8.48806" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.235951" stopColor="#06E9FC" />
                                        <stop offset="1" stopColor="#075BF7" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_2_921" x1="-7.12905" y1="-6.44846" x2="13.13" y2="8.48806" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.235951" stopColor="#06E9FC" />
                                        <stop offset="1" stopColor="#075BF7" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_2_921" x1="-7.12905" y1="-6.44846" x2="13.13" y2="8.48806" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.235951" stopColor="#06E9FC" />
                                        <stop offset="1" stopColor="#075BF7" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_2_921" x1="-7.12905" y1="-6.44846" x2="13.13" y2="8.48806" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.235951" stopColor="#06E9FC" />
                                        <stop offset="1" stopColor="#075BF7" />
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_2_921" x1="-7.12905" y1="-6.44846" x2="13.13" y2="8.48806" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.235951" stopColor="#06E9FC" />
                                        <stop offset="1" stopColor="#075BF7" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <span className={styles.logoText}>TROD</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className={styles.desktopNav}>
                            <a href="#services" className={styles.navLink}>Our Services</a>
                            <a href="#studies" className={styles.navLink}>Case Study</a>
                            <a href="#about" className={styles.navLink}>About Us</a>
                        </div>
                    </div>

                    {/* CTA Button Desktop */}
                    <div className={styles.desktopCta}>
                        <button className={styles.ctaButton}>Get In Touch</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.mobileMenuButton}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <a href="#services" className={styles.mobileNavLink} onClick={toggleMenu}>
                            Our Services
                        </a>
                        <a href="#studies" className={styles.mobileNavLink} onClick={toggleMenu}>
                            Case Study
                        </a>
                        <a href="#about" className={styles.mobileNavLink} onClick={toggleMenu}>
                            About Us
                        </a>
                        <button className={styles.ctaButton}>Get In Touch</button>
                    </div>
                )}
            </div>
        </nav>
    );
}