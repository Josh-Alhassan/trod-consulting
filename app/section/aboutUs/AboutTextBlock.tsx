import { FC } from 'react';
import SectionSubheader from '@/app/components/SectionSubheader';
import styles from './AboutTextBlock.module.css';

interface AboutTextBlockProps {
  /**
   * Optional custom class name for the container
   */
  className?: string;
  /**
   * Optional custom title text
   * @default 'Who We Are'
   */
  title?: string;
  /**
   * Optional description text
   * @default 'A UK-based business and technology consulting and advisory firm helping organisations navigate transformation, digitalisation, and operational excellence.'
   */
  description?: string;
}

/**
 * A reusable about text block component with a subheader, heading, and description.
 * 
 * @component
 * @example
 * ```tsx
 * <AboutTextBlock 
 *   title="Our Mission"
 *   description="Delivering exceptional technology solutions..."
 * />
 * ```
 */
const AboutTextBlock: FC<AboutTextBlockProps> = ({
  className = '',
  title = 'Who We Are',
  description = 'A UK-based business and technology consulting and advisory firm helping organisations navigate transformation, digitalisation, and operational excellence.'
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <SectionSubheader className={styles.subHeading}>// About Us</SectionSubheader>
      <h2 className={styles.heading}>
        {title}
      </h2>
      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
};

export default AboutTextBlock;
