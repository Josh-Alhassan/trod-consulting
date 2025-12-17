'use client'

import { useState } from 'react';
import styles from './Contact.module.css';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import BottomSheet from './components/BottomSheet';

const Contact = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const toggleBottomSheet = () => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };

  return (
    <section className={styles.backgroundContainer} aria-labelledby="contact-heading">
      <div className={`${styles.contact} containerSection`}>
        <div className={styles.contactSection}>
          <ContactInfo />
          <ContactForm />
        </div>

        <div className={styles.copyRight}>
          <h3 className={styles.copyrightTitle}>
            Copyright © 2025 TROD Consulting Ltd • All Rights Reserved.
          </h3>
          <p className={styles.copyrightText}>
            All rights reserved. Unauthorized use is strictly prohibited.
          </p>
        </div>

        <BottomSheet 
          isOpen={isBottomSheetOpen} 
          onClose={toggleBottomSheet} 
        />
      </div>
    </section>
  );
};

export default Contact;