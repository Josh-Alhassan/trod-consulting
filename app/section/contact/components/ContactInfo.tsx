import React from 'react';
import Image from 'next/image';
import SectionSubheader from '@/app/components/SectionSubheader';
import styles from '../Contact.module.css';
import x from '@/public/socials/x.svg';
import facebook from '@/public/socials/facebook.svg';
import email from '@/public/socials/email.svg';
import phone from '@/public/socials/phone.svg';

const ContactInfo = () => (
  <div className={styles.contactDetails}>
    <SectionSubheader className={styles.contactSubheading}>// Contact</SectionSubheader>

    <div className={styles.contactHeader}>
      <h1 className={styles.contactHeading}>Contact Us</h1>
      <p className={styles.contactText}>
        Let’s Shape the Future of Your Business — Together. We’ve delivered value across diverse industries where precision, compliance, and innovation matter most
      </p>
    </div>

    <div className={styles.contactFooter}>
      <ContactInfoItem 
        title="Office" 
        content="London, UK" 
      />
      
      <ContactInfoItem 
        title="COMPANY PROFILE" 
        content={
          <a href="./directory/yourfile.pdf" download="newfilename" className={styles.contactMaintitle}>
            Download Profile
          </a>
        } 
      />
      
      <ContactInfoItem title="FOLLOW US">
        <nav>
          <ul className={styles.contactSocials}>
            <SocialLink href="#" icon={x} alt="X (Twitter)" />
            <SocialLink href="#" icon={facebook} alt="Facebook" />
            <SocialLink href="mailto:contact@example.com" icon={email} alt="Email" />
            <SocialLink href="tel:+1234567890" icon={phone} alt="Phone" />
          </ul>
        </nav>
      </ContactInfoItem>
    </div>
  </div>
);

const ContactInfoItem = ({ 
  title, 
  content,
  children 
}: { 
  title: string; 
  content?: React.ReactNode;
  children?: React.ReactNode;
}) => (
  <div className={styles.contactFooterProfile}>
    <SectionSubheader className={styles.contactsubTitle}>// {title}</SectionSubheader>
    {content ? (
      typeof content === 'string' ? (
        <h2 className={styles.contactMaintitle}>{content}</h2>
      ) : (
        content
      )
    ) : (
      children
    )}
  </div>
);

const SocialLink = ({ href, icon, alt }: { href: string; icon: any; alt: string }) => (
  <li>
    <a href={href} aria-label={alt}>
      <Image src={icon} alt={alt} width={15} height={15} />
    </a>
  </li>
);

export default ContactInfo;
