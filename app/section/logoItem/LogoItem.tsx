import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './LogoItem.module.css';

// Import logos with type safety
import hsbcLogo from '@/public/logos/logo1.svg';
import legalLogo from '@/public/logos/logo2.svg';
import newhamLogo from '@/public/logos/logo3.svg';
import lsexhangeLogo from '@/public/logos/logo4.svg';
import birminghamLogo from '@/public/logos/logo5.svg';
import capitaLogo from '@/public/logos/logo6.svg';

interface LogoItem {
  id: string;
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}

const LOGOS: LogoItem[] = [
  { id: 'hsbc', src: hsbcLogo, alt: 'HSBC Bank' },
  { id: 'legal', src: legalLogo, alt: 'Legal & General' },
  { id: 'newham', src: newhamLogo, alt: 'London Borough of Newham' },
  { id: 'lsexchange', src: lsexhangeLogo, alt: 'London Stock Exchange' },
  { id: 'birmingham', src: birminghamLogo, alt: 'Birmingham City Council' },
  { id: 'capita', src: capitaLogo, alt: 'Capita' },
];

interface LogoItemProps {
  /**
   * Additional class name for the container
   */
  className?: string;
  
  /**
   * Custom logo items to display
   */
  logos?: LogoItem[];
  
  /**
   * Enable/disable lazy loading of images
   * @default true
   */
  lazyLoad?: boolean;
}

/**
 * LogoItem component displays a collection of client/partner logos in a responsive grid.
 * It's optimized for performance with lazy loading and proper image dimensions.
 */
const LogoItem: React.FC<LogoItemProps> = ({
  className = '',
  logos = LOGOS,
  lazyLoad = true,
}) => {
  if (!logos || logos.length === 0) {
    console.warn('LogoItem: No logos provided to display');
    return null;
  }

  return (
    <section 
      className={`${styles.logoContainer} ${className}`}
      aria-label="Our trusted partners"
    >
      {logos.map((logo) => (
        <div 
          key={logo.id}
          className={styles.logoWrapper}
          data-testid={`logo-${logo.id}`}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            className={styles.logo}
            width={logo.width || 100}
            height={logo.height || 100}
            loading={lazyLoad ? 'lazy' : 'eager'}
            quality={85}
            aria-hidden={!logo.alt}
            title={logo.alt}
          />
          <span className="sr-only">{logo.alt}</span>
        </div>
      ))}
    </section>
  );
};

// Add display name for better debugging
LogoItem.displayName = 'LogoItem';

export default React.memo(LogoItem);