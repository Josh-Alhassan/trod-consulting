import React from 'react';
import Link from 'next/link';
import SectionSubheader from '@/app/components/SectionSubheader';
import styles from '../Contact.module.css';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose }) => (
  <>
    <div 
      className={`${styles.outOfFlowIcon} ${isOpen ? styles.active : ''}`}
      onClick={onClose}
      role="button"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      tabIndex={0}
    >
      <svg 
        width="15" 
        height="15" 
        viewBox="0 0 22 15" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={styles.arrowIcon}
      >
        <path 
          d="M21.6029 11.3293C22.2207 12.0925 22.1049 13.2139 21.3444 13.8339C20.5839 14.4539 19.4666 14.3377 18.8488 13.5745L11 3.87946L3.15123 13.5745C2.53338 14.3377 1.41604 14.4539 0.655563 13.8339C-0.104859 13.2139 -0.220671 12.0925 0.397056 11.3293L8.66832 1.11254C9.86901 -0.37057 12.131 -0.37057 13.3317 1.11254L21.6029 11.3293Z" 
          fill="currentColor" 
        />
      </svg>
    </div>

    <div className={`${styles.bottomSheet} ${isOpen ? styles.bottomSheetOpen : ''}`}>
      <div className={styles.bottomSheetContent}>
        <SectionSubheader className={styles.contactsubTitle}>// Quick Links</SectionSubheader>
        <nav className={styles.bottomSheetNav}>
          <Link href="/" className={styles.navLink} onClick={onClose}>Home</Link>
          <Link href="/services" className={styles.navLink} onClick={onClose}>Services</Link>
          <Link href="/industries" className={styles.navLink} onClick={onClose}>Industries</Link>
          <Link href="/insight" className={styles.navLink} onClick={onClose}>Insight</Link>
          <Link href="/contact" className={styles.navLink} onClick={onClose}>Contact</Link>
        </nav>
      </div>
    </div>
  </>
);

export default BottomSheet;
