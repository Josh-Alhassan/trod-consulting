import React from 'react';
import styles from './TrustedBy.module.css';

interface TrustedByProps {
  /**
   * Additional CSS class name to apply to the container
   */
  className?: string;
  
  /**
   * Main heading text
   * @default "Trusted in finance, trading institutions, energy, utility, insurance, and healthcare for over a decade."
   */
  title?: string;
  
  /**
   * Subtitle text
   * @default "Regardless of size, from small startups to large corporations."
   */
  subtitle?: string;
}

/**
 * TrustedBy component displays a section highlighting the trust from various industries.
 * It's a key marketing component used to build credibility.
 */
const TrustedBy: React.FC<TrustedByProps> = ({
  className = '',
  title = 'Trusted in finance, trading institutions, energy, utility, insurance, and healthcare for over a decade.',
  subtitle = 'Regardless of size, from small startups to large corporations.',
}) => {
  return (
    <section 
      className={`${styles.trustedByContainer} ${className}`}
      aria-label="Trusted by leading industries"
    >
      <h2 
        className={styles.trustedByTitle}
        data-testid="trusted-by-title"
      >
        {title}
      </h2>
      
      <p 
        className={styles.trustedByText}
        data-testid="trusted-by-subtitle"
      >
        {subtitle}
      </p>
    </section>
  );
};

export default React.memo(TrustedBy);