import SectionSubheader from '@/app/components/SectionSubheader';
import styles from './WorkShow.module.css';
import Heading from '@/app/components/Heading';
import Image from 'next/image';

// Industry data array
const industryItems = [
  {
    id: 1,
    title: 'Banking & Financial Services',
    image: '/bankingFinance.svg',
    bgClass: styles.workShowItem1,
    alt: 'Banking & Finance icon'
  },
  {
    id: 2,
    title: 'Insurance & Fintech',
    image: '/insuranceFintech.svg',
    bgClass: styles.workShowItem2,
    alt: 'Insurance & Fintech icon'
  },
  {
    id: 3,
    title: 'Energy, Oil & Gas',
    image: '/energyOil.svg',
    bgClass: styles.workShowItem3,
    alt: 'Energy, Oil & Gas icon'
  },
  {
    id: 4,
    title: 'Healthcare',
    image: '/healthCare.svg',
    bgClass: styles.workShowItem4,
    alt: 'Healthcare icon'
  },
  {
    id: 5,
    title: 'Local Authority',
    image: '/publicSector.svg',
    bgClass: styles.workShowItem5,
    alt: 'Local Authority icon'
  }
] as const;

interface IndustryItemProps {
  item: typeof industryItems[number];
  index: number;
}

const IndustryItem = ({ item, index }: IndustryItemProps) => (
  <article 
    className={`${styles.workShowItem} ${item.bgClass}`}
    aria-labelledby={`industry-${item.id}`}
  >
    <Image 
      src={item.image} 
      alt={item.alt}
      width={64}
      height={64}
      priority={index === 0}
      loading={index === 0 ? 'eager' : 'lazy'}
      className={styles.industryIcon}
    />
    <h3 id={`industry-${item.id}`} className={styles.industryTitle}>
      {item.title}
    </h3>
  </article>
);

export default function WorkShow() {
  return (
    <section className={styles.backgroundContainer} aria-labelledby="work-show-heading">
      <div className={`${styles.workShow} containerSection`}>
        <SectionSubheader>// WORK SHOW</SectionSubheader>

        <header className={styles.workShowContent}>
          <Heading className={styles.workShowHeading} id="work-show-heading">
            Industries we have served
          </Heading>
          <p className={styles.workShowText}>
            We've delivered value across diverse industries where precision, compliance, and innovation matter most
          </p>
        </header>

        <div className={styles.workShowGrid} role="list" aria-label="List of industries">
          {industryItems.map((item, index) => (
            <IndustryItem 
              key={item.id} 
              item={item} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}