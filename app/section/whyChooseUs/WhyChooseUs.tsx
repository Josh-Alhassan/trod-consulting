import Image from "next/image";
import Link from "next/link";
import styles from "./WhyChooseUs.module.css";
import Heading from "@/app/components/Heading";

// Assets
import chooseUs from "@/public/images/chooseUs.svg";
import provenResult from '@/public/gridOne.svg';
import capability from '@/public/gridTwo.svg';
import expert from '@/public/gridThree.svg';
import perspective from '@/public/gridFour.svg';

interface PointProps {
  icon: any;
  title: string;
  description: string | React.ReactNode;
  className?: string;
  iconAlt: string;
}

const points: Omit<PointProps, 'className'>[] = [
  {
    icon: provenResult,
    title: "Proven Results",
    description: <><strong>15+ years</strong> of measurable impact and trusted partnerships.</>,
    iconAlt: "Proven results icon"
  },
  {
    icon: capability,
    title: "End-to-End Capability",
    description: "From strategy to implementation, under one roof.",
    iconAlt: "Capability icon"
  },
  {
    icon: expert,
    title: "Certified Experts",
    description: "Experienced consultants across business, IT, data, and cybersecurity.",
    iconAlt: "Expertise icon"
  },
  {
    icon: perspective,
    title: "Global Perspective",
    description: "Easily scale your financial operations as your business grows.",
    iconAlt: "Global perspective icon"
  }
];

const Point = ({ icon, title, description, className = '', iconAlt }: PointProps) => (
  <div className={`${styles.pointGrid} ${className}`}>
    <div className={`${styles.point} ${className ? styles[`point${className}`] : ''}`}>
      <Image 
        src={icon} 
        alt={iconAlt} 
        width={48} 
        height={48} 
        className={styles.pointIcon}
      />
      <h4 className={styles.pointTitle}>{title}</h4>
    </div>
    <p className={styles.pointDescription}>{description}</p>
  </div>
);

export default function WhyChooseUs() {
  return (
    <section className={styles.backgroundContainer} aria-label="Why Choose Us">
      <div className={`${styles.chooseUsSection} containerSection`}>
        <div className={styles.chooseUsImageWrapper}>
          <Image 
            src={chooseUs} 
            alt="Illustration showing our team collaboration" 
            width={500}
            height={400}
            priority
          />
        </div>

        <div className={styles.chooseUsWrapper}>
          <div className={styles.chooseUsTypography}>
            <Heading level="h2">Why Choose Us</Heading>
            <p>We design solutions that work for you, not the market average.</p>
            <Link className={styles.bookCallLink} href="/about">
              Book a call today!
            </Link>
          </div>

          <div className={styles.chooseUsPoints}>
            {points.map((point, index) => (
              <Point
                key={point.title}
                {...point}
                className={`point${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}