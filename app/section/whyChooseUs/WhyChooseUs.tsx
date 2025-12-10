import styles from "./WhyChooseUs.module.css"
import SectionSubheader from "@/app/components/SectionSubheader";
import Image from "next/image";

import chooseUs from "@/public/images/chooseUs.svg"
import Heading from "@/app/components/Heading";
import Link from "next/link";

import provenResult from '@/public/gridOne.svg'
import capability from '@/public/gridTwo.svg'
import expert from '@/public/gridThree.svg'
import perspective from '@/public/gridFour.svg'

export default function WhyChooseUs() {
    return (
        <section className={styles.backgroundContainer} aria-label="Why Choose Us">
            <div className={` ${styles.chooseUsSection} containerSection`}>
                {/* <SectionSubheader className={styles.serviceSubheader}>
                    Why Choose Us
                </SectionSubheader> */}

                <div className={styles.chooseUsImageWrapper}>
                    <Image src={chooseUs} alt="Choose Us Image" />
                </div>

                <div className={styles.chooseUsWrapper}>

                    {/* Why choose us Typography */}
                    <div className={styles.chooseUsTypography}>
                        <Heading>Why Choose Us</Heading>
                        <p>We design solutions that work for you, not the market average.</p>

                        <Link className={styles.bookCallLink} href="/about">Book a call today!</Link>
                    </div>

                    {/* Choose Us points */}
                    <div className={styles.chooseUsPoints}>
                        <div className={styles.pointGrid}>
                            <div className={`${styles.point} ${styles.point1}`}>
                                <Image src={provenResult} alt="Choose Us Image" />
                                <h4 className={styles.pointTitle}>Proven Results</h4>
                            </div>

                            <p className={styles.pointDescription}><strong>15+ years</strong> of measurable impact and trusted partnerships.</p>
                        </div>

                        <div className={styles.pointGrid}>
                            <div className={`${styles.point} ${styles.point2}`}>
                                <Image src={capability} alt="Choose Us Image" />

                                <h4 className={styles.pointTitle}>End-to-End Capability</h4>
                            </div>

                            <p className={styles.pointDescription}>From strategy to implementation, under one roof.</p>
                        </div>

                        <div className={styles.pointGrid}>
                            <div className={`${styles.point} ${styles.point3}`}>
                                <Image src={expert} alt="Choose Us Image" />

                                <h4 className={styles.pointTitle}>Certified Experts</h4>
                            </div>
                            <p className={styles.pointDescription}>Experienced consultants across business, IT, data, and cybersecurity.</p>
                        </div>

                        <div className={styles.pointGrid}>
                            <div className={`${styles.point} ${styles.point4}`}>
                                <Image src={perspective} alt="Choose Us Image" />

                                <h4 className={styles.pointTitle}>Global Perspective</h4>
                            </div>

                            <p className={styles.pointDescription}>Easily scale your financial operations as your business grows.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}