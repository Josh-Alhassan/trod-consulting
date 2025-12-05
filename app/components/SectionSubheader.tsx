import { ReactNode } from 'react';
import styles from './SectionSubheader.module.css';

interface SectionSubheaderProps {
  children: ReactNode;
  className?: string;
}

export default function SectionSubheader({ children, className = '' }: SectionSubheaderProps) {
  return (
    <p className={`${styles.subheader} ${className}`}>
      {children}
    </p>
  );
}
