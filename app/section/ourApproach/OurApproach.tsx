'use client';
import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import SectionSubheader from "@/app/components/SectionSubheader";
import Heading from "@/app/components/Heading";
import styles from "./ourApproach.module.css";

// Import images
import approach1 from '@/public/approach1.svg';
import approach2 from '@/public/approach2.svg';
import approach3 from '@/public/approach3.svg';
import approach4 from '@/public/approach4.svg';

interface ApproachCardProps {
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
  className?: string;
}

const ApproachCard: FC<ApproachCardProps> = ({ 
  image, 
  alt, 
  title, 
  description, 
  className 
}) => (
  <article className={`${styles.ourApproachBodyCard} ${className || ''}`}>
    <Image 
      src={image} 
      alt={alt} 
      className={styles.ourApproachBodyCardImage}
      aria-hidden="true"
    />
    <h3 className={styles.ourApproachBodyCardHeading}>{title}</h3>
    <p className={styles.ourApproachBodyCardText}>{description}</p>
  </article>
);

const OurApproach: FC = () => {
  const approaches = [
    {
      id: 'discovery',
      image: approach1,
      alt: 'Discovery icon',
      title: 'Discovery',
      description: 'We analyse your business landscape, challenges, and goals.',
      className: styles.ourApproachBodyCard1
    },
    {
      id: 'implement',
      image: approach2,
      alt: 'Implementation icon',
      title: 'Implement',
      description: 'We deliver solutions collaboratively, leveraging the right technology and industry best practices.',
      className: styles.ourApproachBodyCard2
    },
    {
      id: 'design',
      image: approach3,
      alt: 'Design icon',
      title: 'Design',
      description: 'We craft a strategy aligned with your long-term vision.',
      className: styles.ourApproachBodyCard3
    },
    {
      id: 'optimize',
      image: approach4,
      alt: 'Optimization icon',
      title: 'Optimize & Measure',
      description: 'We refine continuously for performance and growth and ensure tangible results; cost savings, efficiency, and ROI.',
      className: styles.ourApproachBodyCard4
    }
  ];

  return (
    <section 
      className={styles.backgroundContainer}
      aria-labelledby="our-approach-heading"
    >
      <div className={`${styles.container} containerSection`}>
        <div className={styles.ourApproachHeaderContainer}>
          <header className={styles.ourApproachHeader}>
            <SectionSubheader>
              // HOW WE WORK
            </SectionSubheader>

            <Heading 
              id="our-approach-heading" 
              className={styles.ourApproachHeading}
            >
              Our Approach
            </Heading>

            <p className={styles.ourApproachText}>
              We believe successful transformation starts with a deep understanding of your organisation, and ends with measurable outcomes.
            </p>
          </header>
        </div>

        <div className={styles.ourApproachBody} role="list">
          <div 
            className={styles.ourApproachBodySVG} 
            aria-hidden="true"
          >
            <svg 
              width={318} 
              height={303} 
              viewBox="0 0 318 303" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="94.7" y="120.4" width="133" height="63" fill="#075BF7"/>
              <g style={{mixBlendMode: 'plus-lighter'}} filter="url(#filter0_f_2_749)">
                <rect x="109.7" y="124.4" width="103" height="56" fill="#075BF7"/>
              </g>
              <g style={{mixBlendMode: 'plus-lighter'}} filter="url(#filter1_f_2_749)">
                <rect x="109.7" y="124.4" width="103" height="56" fill="#075BF7"/>
              </g>
              <g style={{mixBlendMode: 'color-dodge'}} filter="url(#filter2_f_2_749)">
                <rect x="132.7" y="136.4" width="58" height="32" fill="#FFA200"/>
              </g>
              <g style={{mixBlendMode: 'color-dodge'}} filter="url(#filter3_f_2_749)">
                <rect x="89.7" y="121.4" width="58" height="31" fill="#FFA200"/>
              </g>
              <g style={{mixBlendMode: 'color-dodge'}} filter="url(#filter4_f_2_749)">
                <rect x="147.7" y="120.4" width="80" height="31" fill="#00F2FF"/>
              </g>
              <g style={{mixBlendMode: 'color-dodge'}} filter="url(#filter5_f_2_749)">
                <rect x="89.7" y="157.4" width="80" height="31" fill="#00F2FF"/>
              </g>
              <g style={{mixBlendMode: 'screen'}} filter="url(#filter6_f_2_749)">
                <circle cx="159.7" cy="151.4" r="68" fill="#075BF7"/>
              </g>
              <defs>
                <filter id="filter0_f_2_749" x="68.1" y="82.7999" width="186.2" height="139.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="20.8" result="effect1_foregroundBlur_2_749"/>
                </filter>
                <filter id="filter1_f_2_749" x="68.1" y="82.7999" width="186.2" height="139.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="20.8" result="effect1_foregroundBlur_2_749"/>
                </filter>
                <filter id="filter2_f_2_749" x="91.1" y="94.7999" width="141.2" height="115.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="20.8" result="effect1_foregroundBlur_2_749"/>
                </filter>
                <filter id="filter3_f_2_749" x="48.1" y="79.7999" width="141.2" height="114.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="20.8" result="effect1_foregroundBlur_2_749"/>
                </filter>
                <filter id="filter4_f_2_749" x="58" y="30.6999" width="259.4" height="210.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="44.85" result="effect1_foregroundBlur_2_749"/>
                </filter>
                <filter id="filter5_f_2_749" x="1.52588e-05" y="67.6999" width="259.4" height="210.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="44.85" result="effect1_foregroundBlur_2_749"/>
                </filter>
                <filter id="filter6_f_2_749" x="8.30001" y="-9.91821e-05" width="302.8" height="302.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="41.7" result="effect1_foregroundBlur_2_749"/>
                </filter>
              </defs>
              <g style={{mixBlendMode: 'color-dodge'}} filter="url(#filter2_f_2_749)">
                <rect x="132.7" y="136.4" width="58" height="32" fill="#FFA200"/>
              </g>
              <g style={{mixBlendMode: 'color-dodge'}} filter="url(#filter3_f_2_749)">
                <rect x="89.7" y="121.4" width="58" height="31" fill="#FFA200"/>
              </g>
              <g style={{mixBlendMode: 'color-dodge'}} filter="url(#filter4_f_2_749)">
                <rect x="147.7" y="120.4" width="80" height="31" fill="#00F2FF"/>
              </g>
              <g style={{mixBlendMode: 'color-dodge'}} filter="url(#filter5_f_2_749)">
                <rect x="89.7" y="157.4" width="80" height="31" fill="#00F2FF"/>
              </g>
              <g style={{mixBlendMode: 'screen'}} filter="url(#filter6_f_2_749)">
                <circle cx="159.7" cy="151.4" r="68" fill="#075BF7"/>
              </g>
              <defs>
                <filter id="filter0_f_2_749" x="68.1" y="82.7999" width="186.2" height="139.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="20.8" result="effect1_foregroundBlur_2_749"/>
                </filter>
                <filter id="filter1_f_2_749" x="68.1" y="82.7999" width="186.2" height="139.2" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="20.8" result="effect1_foregroundBlur_2_749"/>
                </filter>
              </defs>
            </svg>
          </div>

          {approaches.map((approach) => (
            <ApproachCard
              key={approach.id}
              image={approach.image}
              alt={approach.alt}
              title={approach.title}
              description={approach.description}
              className={approach.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;