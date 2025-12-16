'use client';

import { useState } from 'react';
import SectionSubheader from "@/app/components/SectionSubheader";
import styles from './CaseStudy.module.css';
import Heading from "@/app/components/Heading";
import arrowDirection from '@/public/arr-direction.svg';
import Image from "next/image";

// Import all assets
const assets = {
  logos: {
    newham: require('@/public/caseStudy/newhamLogo.png').default,
    birmingham: require('@/public/logos/logo5.svg').default,
    londonstock: require('@/public/logos/logo4.svg').default,
    capita: require('@/public/logos/logo6.svg').default,
    hsbc: require('@/public/logos/logo1.svg').default,
  },
  images: {
    newnham: require('@/public/caseStudy/newhamImage.png').default,
    birmingham: require('@/public/caseStudy/birminghamCity.png').default,
    londonstockExchange: require('@/public/caseStudy/londonStockExchange.png').default,
    capita: require('@/public/caseStudy/capitaLondon.png').default,
    hsbc: require('@/public/caseStudy/HSBC.png').default,
  },
  icons: {
    // phase 1
    upgrade: require('@/public/caseStudy/upgrade.svg').default,
    hardware: require('@/public/caseStudy/hardware.svg').default,
    deployment: require('@/public/caseStudy/deployment.svg').default,
    cloud: require('@/public/caseStudy/cloud.svg').default,
    storage: require('@/public/caseStudy/storage.svg').default,
    automation: require('@/public/caseStudy/automation.svg').default,
    calculations: require('@/public/caseStudy/calculation.svg').default,
    workProcess: require('@/public/caseStudy/workProcess.svg').default,
    // phase 2
    assets: require('@/public/caseStudy/assets.svg').default,
    monitor: require('@/public/caseStudy/monitor.svg').default,
    patchProcess: require('@/public/caseStudy/patchProcess.svg').default,
    realTime: require('@/public/caseStudy/workProcess.svg').default,    
    risk: require('@/public/caseStudy/risk.svg').default,
    // phase 3
    rapidResponse: require('@/public/caseStudy/rapidResponse.svg').default,
    digitalGuardian: require('@/public/caseStudy/digitalGuardian.svg').default,
    scan: require('@/public/caseStudy/scan.svg').default,
    defense: require('@/public/caseStudy/defense.svg').default,
    operations: require('@/public/caseStudy/workProcess.svg').default,

    // phase 4
    seamless: require('@/public/caseStudy/rapidResponse.svg').default,
    safety: require('@/public/caseStudy/digitalGuardian.svg').default,
    detection: require('@/public/caseStudy/scan.svg').default,
    protection: require('@/public/caseStudy/defense.svg').default,
    visibility: require('@/public/caseStudy/workProcess.svg').default,
    compliance: require('@/public/caseStudy/workProcess.svg').default,
  }
};

interface CaseStudyItem {
  id: string;
  title: string;
  description: string;
  logo: any;
  image: any;
  outcomes: Array<{
    icon: any;
    text: string;
    alt: string;
  }>;
  testimony: string;
  location: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'newnham',
    title: 'IT Modernisation for Newnham Borough',
    description: 'The London Borough of Newham partnered with TROD Consulting to upgrade its device ecosystem and prepare for a cloud-first environment.',
    logo: assets.logos.newham,
    image: assets.images.newnham,
    outcomes: [
      { icon: assets.icons.upgrade, text: 'Seamless upgrades to Windows 11 and Microsoft 365', alt: 'Upgrade' },
      { icon: assets.icons.hardware, text: 'Strategic replacement of incompatible hardware', alt: 'Hardware' },
      { icon: assets.icons.deployment, text: 'Phased deployments ensuring minimal disruption', alt: 'Deployment' },
      { icon: assets.icons.cloud, text: 'Clear, actionable roadmap for cloud migration', alt: 'Cloud' }
    ],
    testimony: 'The London Borough of Newham partnered with TROD Consulting to upgrade its device ecosystem and prepare for a cloud-first environment.',
    location: 'Newnham Borough'
  },
  {
    id: 'birmingham',
    title: 'Route & Cost Digitalisation for Birmingham City',
    description: 'Birmingham City Council partnered with TROD Consulting to streamline route change processes, improve data accuracy, and enhance collaboration across teams.',
    logo: assets.logos.birmingham,
    image: assets.images.birmingham,
    outcomes: [
      { icon: assets.icons.storage, text: 'Centralized all route change data in a single SharePoint system', alt: 'Storage' },
      { icon: assets.icons.automation, text: 'Ensured accurate, consistent data entry with Power Apps automation', alt: 'Automation' },
      { icon: assets.icons.calculations, text: 'Automated cost calculations for real-time visibility into changes', alt: 'Calculation' },
      { icon: assets.icons.workProcess, text: 'Reduced manual workload and costly errors through process automation', alt: 'Work Process' }
    ],
    testimony: 'TROD Consulting helped us transform a complex, manual process into a seamless digital workflow, saving time and improving decision-making across the board.',
    location: 'Birmingham City Council'
  },
  {
    id: 'LSEG',
    title: 'Strengthening Cybersecurity for LSEG',
    description: 'LSEG partnered with TROD Consulting to enhance its security posture, streamline vulnerability management, and improve operational visibility across its IT environment.',
    logo: assets.logos.londonstock,
    image: assets.images.londonstockExchange,
    outcomes: [
      { icon: assets.icons.assets, text: 'Identified and prioritized vulnerabilities across all IT assets', alt: 'Assets' },
      { icon: assets.icons.monitor, text: 'Reduced potential breaches through proactive threat monitoring', alt: 'Monitor' },
      { icon: assets.icons.patchProcess, text: 'Automated vulnerability and patch management processes', alt: 'Patch Process' },
      { icon: assets.icons.workProcess, text: 'Delivered real-time security insights through advanced dashboards', alt: 'Work Process' },
      { icon: assets.icons.risk, text: 'Improved overall risk management and operational efficiency', alt: 'Risk' }
    ],
    testimony: 'TROD’s professionalism and clarity transformed how we manage technology across the organization.',
    location: 'London Stock Exchange Group'
  },
  {
    id: 'capita',
    title: 'Transforming Cyber Resilience for Capita Plc',
    description: 'Capita worked with TROD Consulting to deploy advanced security technologies that strengthened its threat detection, data protection, and compliance posture.',
    logo: assets.logos.capita,
    image: assets.images.capita,
    outcomes: [
      { icon: assets.icons.rapidResponse, text: 'Real-time monitoring and rapid response with QROC SIEM', alt: 'Assets' },
      { icon: assets.icons.digitalGuardian, text: 'Enterprise-wide data loss prevention using Digital Guardian', alt: 'Digital Gaurdian' },
      { icon: assets.icons.scan, text: 'Continuous vulnerability scanning via Qualys', alt: 'Scan Process' },
      { icon: assets.icons.defense, text: 'Improved cyber-resilience maturity and proactive defence', alt: 'Defense' },
      { icon: assets.icons.operations, text: 'Automated compliance checks and streamlined operations by 45%', alt: 'Operations' }
    ],
    testimony: 'TROD’s professionalism and clarity transformed how we manage technology across the organization.',
    location: 'Capita, London'
  },
  {
    id: 'hsbc',
    title: 'SOC Technology Integration for HSBC',
    description:'HSBC partnered with TROD Consulting to enhance its global Security Operations Centre capabilities without disrupting existing systems.',
    logo: assets.logos.hsbc,
    image: assets.images.hsbc,
    outcomes: [
      { icon: assets.icons.seamless, text: 'Seamless integration of new SOC technologies with zero disruption', alt: 'Seamless Safety' },
      { icon: assets.icons.safety, text: '50% improvement in real-time threat detection and visibility', alt: 'Safety' },
      { icon: assets.icons.detection, text: 'Deployment of advanced threat detection tools against APTs', alt: 'Detection' },
      { icon: assets.icons.protection, text: 'Strong stakeholder collaboration for smooth implementation', alt: 'Protection' },
      { icon: assets.icons.visibility, text: 'Faster incident response through upgraded automation.', alt: 'Visibility' },
      { icon: assets.icons.compliance, text: 'Fully compliant, scalable solutions supporting HSBC’s global footprint.', alt: 'Compliance' }
    ],
    testimony: 'TROD’s professionalism and clarity transformed how we manage technology across the organization.',
    location: 'HSCB London'
  }
];

export default function CaseStudy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStudy = CASE_STUDIES[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  return (
    <section className={styles.backgroundContainer} aria-labelledby="case-studies-heading">
      <div className={`${styles.caseStudy} containerSection`}>
        <SectionSubheader>// Case Study</SectionSubheader>

        <div className={styles.caseStudyContent}>
          <div className={styles.caseStudyTextContainer}>
            <Heading className={styles.caseStudyHeading} id="case-studies-heading">
              {currentStudy.title}
            </Heading>
            <p className={styles.caseStudyText}>{currentStudy.description}</p>
          </div>

          <button 
            onClick={goToNext}
            className={styles.caseStudyNext}
            aria-label="Next case study"
          >
            <span>
              <Image 
                src={arrowDirection} 
                alt="" 
                aria-hidden="true"
                width={20}
                height={20}
              />
            </span> 
            Next
          </button>
        </div>

        <div className={styles.caseStudyOutcomeContainer}>
          <div className={styles.caseStudyOutcome}>
            <SectionSubheader className={styles.caseStudyOutcomeSubheader}>
              // Key Outcomes:
            </SectionSubheader>

            <ul className={styles.caseStudyOutcomeList}>
              {currentStudy.outcomes.map((outcome, index) => (
                <li key={`${currentStudy.id}-outcome-${index}`} className={styles.caseStudyOutcomeItem}>
                  <span>
                    <Image 
                      src={outcome.icon} 
                      alt={outcome.alt} 
                      width={24}
                      height={24}
                      aria-hidden="true"
                    />
                  </span>
                  {outcome.text}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.caseStudyTestimony}>
            <Image 
              src={currentStudy.logo} 
              alt={`${currentStudy.location} logo`} 
              width={120}
              height={40}
            />
            <p className={styles.caseStudyTestimonyText}>{currentStudy.testimony}</p>
          </div>

          <div className={styles.caseStudyOutcomeImage}>
            <Image
              src={currentStudy.image}
              alt={currentStudy.location}
              fill
              className={styles.caseStudyImage}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <p>{currentStudy.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}