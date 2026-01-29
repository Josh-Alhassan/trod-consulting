'use client';

import { useState, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';
import SectionSubheader from "@/app/components/SectionSubheader";

// Assets
import davidSignature from '@/public/testimonials/davidSignature.svg';
import joshuaSignature from '@/public/testimonials/joshuaSignature.svg';
import birminghamCity from '@/public/caseStudy/birminghamCity.png';
import hsbc from '@/public/caseStudy/HSBC.png';
import capita from '@/public/caseStudy/capitaLondon.png'
import newham from '@/public/caseStudy/newhamImage.png'
import arrowDirection from '@/public/arr-direction.svg';
import arrowDirectionRight from '@/public/arr-direction-right.svg';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  image: any;
  signature: any;
  alt: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Birmingham City Council',
    role: 'Sport Association',
    company: '',
    text: 'TROD Consulting completely transformed our approach to IT and data. Their team understood our business challenges and delivered practical, scalable solutions.',
    image: birminghamCity,
    signature: joshuaSignature,
    alt: 'Birmingham City FC'
  },
  {
    id: '2',
    name: 'HSBC',
    role: 'Banking Industry',
    company: 'Financial Services',
    text: 'The depth of expertise and professionalism was evident from day one. They became an extension of our team.',
    image: hsbc,
    signature: davidSignature,
    alt: 'HSBC'
  },
  {
    id: '3',
    name: 'Capita',
    role: 'Business Process',
    company: 'Outsourcing',
    text: 'Their strategic insights and technical expertise helped us navigate complex challenges with confidence.',
    image: capita,
    signature: davidSignature,
    alt: 'Capita'
  },
  {
    id: '4',
    name: 'Newham',
    role: 'Logistics &',
    company: 'Transportation',
    text: 'Working with TROD was a game-changer for our digital transformation journey. Highly recommended!',
    image: newham,
    signature: joshuaSignature,
    alt: 'Newham'
  }
];

const ITEM_WIDTH = 310; // 290px width + 20px margin

interface TestimonialItemProps {
  testimonial: Testimonial;
}

const TestimonialItem = ({ testimonial }: TestimonialItemProps) => (
  <article className={styles.testimonialItem}>
    <div className={styles.testimonialImage}>
      <Image 
        src={testimonial.image} 
        alt={testimonial.alt}
        width={80}
        height={80}
        priority={false}
        className={styles.testimonialAvatar}
      />
    </div>
    <p className={styles.testimonialText}>{testimonial.text}</p>
    <footer className={styles.testimonialFooter}>
      <p className={styles.testimonialAuthor}>{testimonial.name}</p>
      <p className={styles.testimonialTitle}>
        {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
      </p>
      <div className={styles.testimonialSignature}>
        <Image 
          src={testimonial.signature} 
          alt={`${testimonial.name}'s signature`}
          width={120}
          height={40}
        />
      </div>
    </footer>
  </article>
);

const NavigationButton = ({ 
  direction, 
  onClick, 
  disabled 
}: { 
  direction: 'prev' | 'next'; 
  onClick: () => void; 
  disabled: boolean;
}) => {
  const isNext = direction === 'next';
  const buttonClass = isNext ? styles.buttonRight : styles.buttonLeft;
  const buttonText = isNext ? 'Next' : 'Previous';
  const icon = isNext ? arrowDirectionRight : arrowDirection;
  const altText = isNext ? 'Next testimonial' : 'Previous testimonial';

  return (
    <button 
      className={`${styles.testimonialButton} ${buttonClass} ${!disabled ? styles.active : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={altText}
    >
      {!isNext && buttonText}
      <Image 
        src={icon} 
        alt="" 
        width={16} 
        height={16} 
        aria-hidden="true"
      />
      {isNext && buttonText}
    </button>
  );
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const totalTestimonials = TESTIMONIALS.length;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex >= totalTestimonials - 1;

  const scrollToIndex = useCallback((index: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * ITEM_WIDTH,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleNext = useCallback(() => {
    if (!isLast) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  }, [currentIndex, isLast, scrollToIndex]);

  const handlePrevious = useCallback(() => {
    if (!isFirst) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  }, [currentIndex, isFirst, scrollToIndex]);

  const memoizedTestimonials = useMemo(() => (
    TESTIMONIALS.map((testimonial) => (
      <TestimonialItem 
        key={testimonial.id} 
        testimonial={testimonial} 
      />
    ))
  ), []);

  return (
    <section 
      className={styles.backgroundContainer} 
      aria-label="Client testimonials"
    >
      <div className={`${styles.testimonial} containerSection`}>
        <SectionSubheader className={styles.testimonialSubheader}>
          // HOW WE WORK
        </SectionSubheader>

        <header className={styles.testimonialContent}>
          <h2 className={styles.testimonialHeading}>
            Testimonials
          </h2>
          <p className={styles.testimonialText}>
            We've delivered value across diverse industries where precision, compliance, and innovation matter most
          </p>
        </header>

        <div className={styles.testimonialCarousel}>
          <SectionSubheader className={styles.testimonialCounter}>
            {currentIndex + 1} of {totalTestimonials} //
          </SectionSubheader>

          <div className={styles.testimonialSliderContainer}>
            <div 
              className={styles.testimonialSlider} 
              ref={sliderRef}
              role="list"
              aria-live="polite"
            >
              {memoizedTestimonials}
            </div>

            <div className={styles.testimonialButtons}>
              <NavigationButton 
                direction="prev"
                onClick={handlePrevious}
                disabled={isFirst}
              />
              <NavigationButton 
                direction="next"
                onClick={handleNext}
                disabled={isLast}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}