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
    return (
        <section className={styles.backgroundContainer} aria-labelledby="testimonial">
            <div className={`${styles.testimonial} containerSection`}>
                <SectionSubheader className={styles.testimonialSubheader}>// HOW WE WORK</SectionSubheader>

                <div className={styles.testimonialContent}>
                    <h2 className={styles.testimonialHeading}>Testimonials</h2>
                    <p className={styles.testimonialText}>We’ve delivered value across diverse industries where precision, compliance, and innovation matter most</p>
                </div>

                {/* Testimonial Carousel */}
                <div className={styles.testimonialCarousel}>
                    <SectionSubheader className={styles.testimonialCounter}>1 of 7 //</SectionSubheader>

                    <div className={styles.testimonialSliderContainer}>
                        <div className={styles.testimonialSlider}>

                            {/* First Testimonial */}
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

                            {/* Second Testimonial */}
                            <div className={styles.testimonialItem}>
                                <div className={styles.testimonialImage}>
                                    <Image src={davidCraig} alt="David Craig" />
                                </div>
                                <p className={styles.testimonialText}>TROD Consulting completely transformed our approach to IT and data. Their team understood our business challenges and delivered practical, scalable solutions.</p>

                                <div className={styles.testimonialFooter}>
                                    <p className={styles.testimonialAuthor}>David Craig</p>
                                    <p className={styles.testimonialTitle}>Director/ CTO - New Moves</p>
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
                        </div>

                        <div className={styles.testimonialButtons}>
                            <button className={`${styles.testimonialButton} ${styles.buttonRight} active`}>
                                Next 
                                <Image src={arrowDirectionRight} alt="Arrow Direction" /></button>
                            <button className={`${styles.testimonialButton} ${styles.buttonLeft}`}>
                                Previous
                                <Image src={arrowDirection} alt="Arrow Direction" /></button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
