'use client';

import { useState, useRef } from 'react';
import styles from './Testimonials.module.css';
import SectionSubheader from "@/app/components/SectionSubheader";
import Image from 'next/image';

import davidSignature from '@/public/testimonials/davidSignature.svg';
import joshuaSignature from '@/public/testimonials/joshuaSignature.svg';
import alhassanJoshua from '@/public/testimonials/joshua.png';
import davidCraig from '@/public/testimonials/david.png';
import arrowDirection from '@/public/arr-direction.svg';
import arrowDirectionRight from '@/public/arr-direction-right.svg';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    // Total number of testimonials
    const totalTestimonials = 7;

    const handleNext = () => {
        if (currentIndex < totalTestimonials - 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            scrollToIndex(newIndex);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            scrollToIndex(newIndex);
        }
    };

    const scrollToIndex = (index: number) => {
        if (sliderRef.current) {
            const itemWidth = 310; // 290px width + 20px margin
            sliderRef.current.scrollTo({
                left: index * itemWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className={styles.backgroundContainer} aria-labelledby="testimonial">
            <div className={`${styles.testimonial} containerSection`}>
                <SectionSubheader className={styles.testimonialSubheader}>// HOW WE WORK</SectionSubheader>

                <div className={styles.testimonialContent}>
                    <h2 className={styles.testimonialHeading}>Testimonials</h2>
                    <p className={styles.testimonialText}>We've delivered value across diverse industries where precision, compliance, and innovation matter most</p>
                </div>

                {/* Testimonial Carousel */}
                <div className={styles.testimonialCarousel}>
                    <SectionSubheader className={styles.testimonialCounter}>
                        {currentIndex + 1} of {totalTestimonials} //
                    </SectionSubheader>

                    <div className={styles.testimonialSliderContainer}>
                        <div className={styles.testimonialSlider} ref={sliderRef}>

                            {/* First Testimonial */}
                            <div className={styles.testimonialItem}>
                                <div className={styles.testimonialImage}>
                                    <Image src={alhassanJoshua} alt="Joshua Alhassan" />
                                </div>
                                <p className={styles.testimonialText}>TROD Consulting completely transformed our approach to IT and data. Their team understood our business challenges and delivered practical, scalable solutions.</p>

                                <div className={styles.testimonialFooter}>
                                    <p className={styles.testimonialAuthor}>Alhassan Joshua</p>
                                    <p className={styles.testimonialTitle}>Director/ CTO - New Moves</p>
                                    <div className={styles.testimonialSignature}>
                                        <Image src={joshuaSignature} alt="Joshua Signature" />
                                    </div>
                                </div>
                            </div>

                            {/* Second Testimonial */}
                            <div className={styles.testimonialItem}>
                                <div className={styles.testimonialImage}>
                                    <Image src={davidCraig} alt="David Craig" />
                                </div>
                                <p className={styles.testimonialText}>The depth of expertise and professionalism was evident from day one. They became an extension of our team.</p>

                                <div className={styles.testimonialFooter}>
                                    <p className={styles.testimonialAuthor}>David Craig</p>
                                    <p className={styles.testimonialTitle}>CTO, Energy Company</p>
                                    <div className={styles.testimonialSignature}>
                                        <Image src={davidSignature} alt="David Signature" />
                                    </div>
                                </div>
                            </div>

                            {/* Third Testimonial */}
                            <div className={styles.testimonialItem}>
                                <div className={styles.testimonialImage}>
                                    <Image src={alhassanJoshua} alt="Joshua Alhassan" />
                                </div>
                                <p className={styles.testimonialText}>TROD Consulting completely transformed our approach to IT and data. Their team understood our business challenges and delivered practical, scalable solutions.</p>

                                <div className={styles.testimonialFooter}>
                                    <p className={styles.testimonialAuthor}>Joshua Alhassan</p>
                                    <p className={styles.testimonialTitle}>Director/ CTO - New Moves</p>
                                    <div className={styles.testimonialSignature}>
                                        <Image src={joshuaSignature} alt="Joshua Signature" />
                                    </div>
                                </div>
                            </div>

                            {/* Fourth Testimonial */}
                            <div className={styles.testimonialItem}>
                                <div className={styles.testimonialImage}>
                                    <Image src={davidCraig} alt="David Craig" />
                                </div>
                                <p className={styles.testimonialText}>Their strategic insights and technical expertise helped us navigate complex challenges with confidence.</p>

                                <div className={styles.testimonialFooter}>
                                    <p className={styles.testimonialAuthor}>Sarah Mitchell</p>
                                    <p className={styles.testimonialTitle}>CEO, Tech Innovations</p>
                                    <div className={styles.testimonialSignature}>
                                        <Image src={davidSignature} alt="Sarah Signature" />
                                    </div>
                                </div>
                            </div>

                            {/* Fifth Testimonial */}
                            <div className={styles.testimonialItem}>
                                <div className={styles.testimonialImage}>
                                    <Image src={alhassanJoshua} alt="Michael Chen" />
                                </div>
                                <p className={styles.testimonialText}>Working with TROD was a game-changer for our digital transformation journey. Highly recommended!</p>

                                <div className={styles.testimonialFooter}>
                                    <p className={styles.testimonialAuthor}>Michael Chen</p>
                                    <p className={styles.testimonialTitle}>Operations Director</p>
                                    <div className={styles.testimonialSignature}>
                                        <Image src={joshuaSignature} alt="Michael Signature" />
                                    </div>
                                </div>
                            </div>

                            {/* Sixth Testimonial */}
                            {/* <div className={styles.testimonialItem}>
                                <div className={styles.testimonialImage}>
                                    <Image src={davidCraig} alt="Emma Rodriguez" />
                                </div>
                                <p className={styles.testimonialText}>The level of attention to detail and commitment to our success exceeded all expectations.</p>

                                <div className={styles.testimonialFooter}>
                                    <p className={styles.testimonialAuthor}>Emma Rodriguez</p>
                                    <p className={styles.testimonialTitle}>VP of Technology</p>
                                    <div className={styles.testimonialSignature}>
                                        <Image src={davidSignature} alt="Emma Signature" />
                                    </div>
                                </div>
                            </div> */}

                            {/* Seventh Testimonial */}
                            {/* <div className={styles.testimonialItem}>
                                <div className={styles.testimonialImage}>
                                    <Image src={alhassanJoshua} alt="James Wilson" />
                                </div>
                                <p className={styles.testimonialText}>TROD's innovative approach to solving our data challenges delivered results beyond our expectations.</p>

                                <div className={styles.testimonialFooter}>
                                    <p className={styles.testimonialAuthor}>James Wilson</p>
                                    <p className={styles.testimonialTitle}>Managing Director</p>
                                    <div className={styles.testimonialSignature}>
                                        <Image src={joshuaSignature} alt="James Signature" />
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <div className={styles.testimonialButtons}>
                            <button 
                                className={`${styles.testimonialButton} ${styles.buttonRight} ${currentIndex < totalTestimonials - 1 ? styles.active : ''}`}
                                onClick={handleNext}
                                disabled={currentIndex >= totalTestimonials - 1}
                            >
                                Next 
                                <Image src={arrowDirectionRight} alt="Arrow Direction Right" />
                            </button>
                            <button 
                                className={`${styles.testimonialButton} ${styles.buttonLeft} ${currentIndex > 0 ? styles.active : ''}`}
                                onClick={handlePrevious}
                                disabled={currentIndex <= 0}
                            >
                                Previous
                                <Image src={arrowDirection} alt="Arrow Direction Left" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}