import React from 'react';
import Heading from '@/app/components/Heading';
import styles from './TrodConsulting.module.css';

const TrodConsulting: React.FC = () => {
  const sectionId = 'trod-consulting';
  const headingText = 'About TROD Consulting';
  const descriptionText = 'We combine strategy, technology, and innovation to help organizations unlock growth, enhance efficiency, and thrive in a connected world.';
  
  return (
    <section 
      className={styles.backgroundContainer} 
      aria-labelledby={sectionId}
    >
      <div className={`${styles.trodConsulting} containerSection`}>
        <div className={styles.trodConsultingContent}>
          <Heading 
            id={sectionId}
            className={styles.trodHeading}
          >
            {headingText}
          </Heading>
          <p className={styles.trodText}>
            {descriptionText}
          </p>
        </div>   
      </div>
    </section>  
  );
};

export default TrodConsulting;