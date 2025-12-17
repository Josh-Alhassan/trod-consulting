import React from 'react';
import styles from '../AboutUs.module.css';

interface ImageWithTextProps {
  text: string;
  className?: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ 
  text, 
  className = '' 
}) => {
  return (
    <div className={`${styles.imageLeft} ${className}`}>
      <p className={styles.imageText}>{text}</p>
    </div>
  );
};

export default ImageWithText;
