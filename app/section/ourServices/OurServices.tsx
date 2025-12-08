import SectionSubheader from "@/app/components/SectionSubheader";
import styles from "./OurServices.module.css";
import Heading from "@/app/components/Heading";
import Image from "next/image";

import serviceIconOne from '@/public/serviceIcon1.svg'
import featureIconOne from '@/public/featureIconOne.svg'
import featureIconTwo from '@/public/featureIconTwo.svg'

const OurServices = () => {
    return (
        <section className={styles.backgroundContainer} >
            <div className={`${styles.container} containerSection`}>

                <div className={styles.serviceContent}>
                    <SectionSubheader className={styles.serviceSubheader}>// Our Services</SectionSubheader>
                    <Heading level="h2" className={styles.serviceHeading}>Strategic business consulting</Heading>

{/* Service content Wrapper */}
                    <div className={styles.serviceContentWrapper}>
                        <div className={styles.serviceHeader}>
                            <Image className={styles.serviceImage} src={serviceIconOne} alt="Service Icon" />
                            <SectionSubheader className={styles.servicePagination} >1 of 4 //</SectionSubheader>
                        </div>

                        {/* Service Body */}
                        <div className={styles.serviceBody}>
                            <p className={styles.serviceBodyText}>We help businesses redefine their direction, streamline operations, and capture new growth opportunities through data-driven strategies and performance transformation.</p>

                            {/* Service Features */}
                            <div className={styles.serviceFeaturesWrapper}>

                                {/* Service Features 1 */}
                                <div className={styles.serviceFeatures}>
                                    <div className={styles.serviceFeature}>
                                        <Image className={styles.featureIcon} src={featureIconOne} alt="Feature Icon" />
                                        <p>Business Transformation & Change Management</p>
                                    </div>
                                    <div className={styles.serviceFeature}>
                                        <Image className={styles.featureIcon} src={featureIconTwo} alt="Service Icon" />
                                        <p>Operational Efficiency & Process Optimisation</p>
                                    </div>
                                </div>

                                {/* Service Features 2 */}
                                <div className={styles.serviceFeatures}>
                                    <div className={styles.serviceFeature}>
                                        <Image className={styles.featureIcon} src={serviceIconOne} alt="Service Icon" />
                                        <p>feature 1</p>
                                    </div>
                                    <div className={styles.serviceFeature}>
                                        <Image className={styles.featureIcon} src={featureIconTwo} alt="Service Icon" />
                                        <p>Operational Efficiency & Process Optimisation</p>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                       
                        
                    </div>

                </div>

                <button className={styles.serviceButton} >Get in touch</button>
            </div>


        </section>
    );
};

export default OurServices;