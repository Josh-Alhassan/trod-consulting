import { ReactNode } from 'react';
import styles from './SectionSubheader.module.css';

interface SectionSubheaderProps {
  children: ReactNode;
  className?: string;
}

export default function SectionSubheader({ children, className = '' }: SectionSubheaderProps) {
  return (
    <h3 className={`${styles.subheader} ${className}`}>
      {children}
    </h3>
  );
}
