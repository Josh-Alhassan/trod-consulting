import React from 'react';
import Image from 'next/image';
import styles from '../AboutUs.module.css';

import securityShield1 from "@/public/images/1.svg";
import securityShield2 from "@/public/images/2.svg";
import securityShield3 from "@/public/images/3.svg";

const SecurityShieldDisplay: React.FC = () => {
  return (
    <div className={styles.imageRight}>
      <div className={styles.shieldContainer}>
        <Image 
          className={`${styles.securityShield} ${styles.shield1}`} 
          src={securityShield1} 
          alt="Security Shield" 
          width={100}  // Added for Next.js Image optimization
          height={100} // Added for Next.js Image optimization
        />
        <Image 
          className={`${styles.securityShield} ${styles.shield2}`} 
          src={securityShield2} 
          alt="Security Shield" 
          width={100}
          height={100}
        />
        <Image 
          className={`${styles.securityShield} ${styles.shield3}`} 
          src={securityShield3} 
          alt="Security Shield" 
          width={100}
          height={100}
        />
      </div>
      <p className={styles.cybersecurityText}>
        We're obsessed with cybersecurity
      </p>
    </div>
  );
};

export default SecurityShieldDisplay;
