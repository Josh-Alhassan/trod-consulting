import { FC, ReactNode } from 'react';
import styles from './Heading.module.css';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  /**
   * The heading level (h1-h6)
   * @default 'h2'
   */
  level?: HeadingLevel;
  /**
   * The text content of the heading
   */
  children: ReactNode;
  /**
   * Optional custom class name
   */
  className?: string;
  /**
   * Optional text color
   * @default 'inherit'
   */
  color?: string;
  /**
   * Optional ID for the heading (useful for anchor links)
   */
  id?: string;
}

/**
 * A reusable, accessible heading component that supports all heading levels (h1-h6).
 * Follows WCAG 2.1 accessibility standards.
 * 
 * @component
 * @example
 * ```tsx
 * <Heading level="h2" color="#333" id="section-title">
 *   About Us
 * </Heading>
 * ```
 */
const Heading: FC<HeadingProps> = ({
  level = 'h2',
  children,
  className = '',
  color = 'inherit',
  id,
  ...props
}) => {
  const Tag = level as keyof JSX.IntrinsicElements;
  
  return (
    <Tag 
      className={`${styles.heading} ${styles[level]} ${className}`}
      style={{ color }}
      id={id}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;
