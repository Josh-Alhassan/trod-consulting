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
    londonstock: require('@/public/images/lseg.png').default,
    capita: require('@/public/logos/logo6.svg').default,
    hsbc: require('@/public/logos/logo1.svg').default,
  },
  images: {
    newham: require('@/public/caseStudy/newhamImage.png').default,
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
  // description: string;
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
    id: 'newham',
    title: 'IT Modernisation for the London Borough of Newham ',
    // description: 'London Borough of Newham partnered with TROD Consulting to support a major IT modernisation programme, enabling the successful rollout of Windows 11, Microsoft 365, and a large-scale cloud migration following the disaggregation from a shared service.',
    logo: assets.logos.newham,
    image: assets.images.newham,
    outcomes: [
      { icon: assets.icons.upgrade, text: 'Seamless in-place upgrades of Windows 11 and Microsoft 365 apps across all compatible devices with minimal user disruption', alt: 'Upgrade' },
      { icon: assets.icons.hardware, text: 'Delivered large-scale digital change with minimal disruption to critical services, maintaining operational continuity throughout deployment', alt: 'Hardware' },
      { icon: assets.icons.deployment, text: 'Identified and mitigated key dependency and compatibility risks, preventing service outages during migration', alt: 'Deployment' },
      { icon: assets.icons.cloud, text: 'Produced clear, actionable discovery outputs that informed prioritisation, risk management, and delivery sequencing', alt: 'Cloud' },
      { icon: assets.icons.cloud, text: 'Strengthened stakeholder confidence through transparent communication of risk, impact, and mitigation strategies', alt: 'Cloud' }
    ],
    testimony: 'London Borough of Newham partnered with TROD Consulting to support a major IT modernisation programme, enabling the successful rollout of Windows 11, Microsoft 365, and a large-scale cloud migration following the disaggregation from a shared service.',
    location: 'LONDON BOROUGH OF NEWHAM'
  },
  {
    id: 'birmingham',
    title: 'Route Change & Cost Digitisation for Birmingham City Council',
    // description: 'Birmingham City Council partnered with TROD Consulting to streamline route change processes, improve data accuracy, and enhance collaboration across teams.',
    logo: assets.logos.birmingham,
    image: assets.images.birmingham,
    outcomes: [
      { icon: assets.icons.storage, text: 'Centralised all route change data in a single SharePoint system', alt: 'Storage' },
      { icon: assets.icons.automation, text: 'Ensured accurate, consistent data entry with Power Apps automation', alt: 'Automation' },
      { icon: assets.icons.calculations, text: 'Automated cost changes calculations for real-time visibility', alt: 'Calculation' },
      { icon: assets.icons.workProcess, text: 'Reduced manual workload and costly errors through process automation', alt: 'Work Process' }
    ],
    testimony: 'TROD Consulting supported the recovery of a high-risk public service of the Borough by redesigning processes and implementing an interim digital CRM solution, improving control, transparency, and trust.',
    location: 'BIRMINGHAM CITY COUNCIL'
  },
  {
    id: 'LSEG',
    title: 'Strengthening Cybersecurity for LSEG',
    // description: 'LSEG partnered with TROD Consulting to enhance its security posture, streamline vulnerability management, and improve operational visibility across its IT environment.',
    logo: assets.logos.londonstock,
    image: assets.images.londonstockExchange,
    outcomes: [
      { icon: assets.icons.assets, text: 'Identified and prioritised vulnerabilities across all IT assets', alt: 'Assets' },
      { icon: assets.icons.monitor, text: 'Reduced potential breaches through proactive threat monitoring', alt: 'Monitor' },
      { icon: assets.icons.patchProcess, text: 'Automated vulnerability and patch management processes', alt: 'Patch Process' },
      { icon: assets.icons.workProcess, text: 'Delivered real-time security insights through advanced dashboards', alt: 'Work Process' },
      { icon: assets.icons.risk, text: 'Improved overall risk management and operational efficiency', alt: 'Risk' },
      // { icon: assets.icons.monitor, text: 'Improved overall risk management and operational efficiency', alt: 'Platform' },
    ],
    testimony: 'TROD Consulting Led assurance and service transition for the enterprise rollout of vulnerability and compliance management services, assessed delivery readiness and enabled secure transition of critical security capabilities into BAU',
    location: 'LONDON STOCK EXCHANGE GROUP'
  },
  {
    id: 'capita',
    title: 'Transforming Cyber Resilience for Capita',
    // description: 'Capita worked with TROD Consulting to deploy advanced security technologies that strengthened its threat detection, data protection, and compliance posture.',
    logo: assets.logos.capita,
    image: assets.images.capita,
    outcomes: [
      { icon: assets.icons.rapidResponse, text: 'Real-time monitoring and rapid response with Qualys ', alt: 'Assets' },
      { icon: assets.icons.digitalGuardian, text: 'Enterprise-wide data loss prevention using Digital Guardian', alt: 'Digital Gaurdian' },
      { icon: assets.icons.scan, text: 'Continuous vulnerability scanning via Qualys', alt: 'Scan Process' },
      { icon: assets.icons.defense, text: 'Improved cyber-resilience maturity and proactive defence', alt: 'Defence' },
      { icon: assets.icons.operations, text: 'Automated compliance checks and streamlined operations by 45%', alt: 'Operations' }
    ],
    testimony: 'Capita partnered with TROD Consulting to identify risks and improvement actions to enable the successful deployment of SIEM, DLP, and vulnerability management tools.',
    location: 'CAPITA'
  },
  {
    id: 'hsbc',
    title: 'GSOC Technology Integration for HSBC',
    // description:'HSBC partnered with TROD Consulting to enhance its global Security Operations Centre capabilities without disrupting existing systems.',
    logo: assets.logos.hsbc,
    image: assets.images.hsbc,
    outcomes: [
      { icon: assets.icons.seamless, text: 'Seamless integration of new SOC technologies with zero disruption', alt: 'Seamless Safety' },
      { icon: assets.icons.safety, text: '50% improvement in real-time threat detection and visibility', alt: 'Safety' },
      { icon: assets.icons.detection, text: 'Deployment of advanced threat detection tools against cyberattacks and data breaches', alt: 'Detection' },
      { icon: assets.icons.protection, text: 'Strong stakeholder collaboration for smooth implementation', alt: 'Protection' },
      { icon: assets.icons.visibility, text: 'Faster incident response through upgraded automation', alt: 'Visibility' },
      { icon: assets.icons.compliance, text: 'Fully compliant, scalable solutions supporting HSBC’s global footprint', alt: 'Compliance' },
      { icon: assets.icons.automation, text: 'Development of comprehensive training programs to upskill SOC personnel', alt: 'Compliance' }
    ],
    testimony: 'We assessed the impact and readiness for new security technologies within the Global Security Operations Centre to enable safe integration and transition of enhanced monitoring capabilities into BAU.',
    location: 'HSBC'
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
    <section id="studies" className={styles.backgroundContainer} aria-labelledby="case-studies-heading">
      <div className={`${styles.caseStudy} containerSection`}>
        <SectionSubheader>// Case Study</SectionSubheader>

        <div className={styles.caseStudyContent}>
          <div className={styles.caseStudyTextContainer}>
            <Heading className={styles.caseStudyHeading} id="case-studies-heading">
              {currentStudy.title}
            </Heading>
            {/* <p className={styles.caseStudyText}>{currentStudy.description}</p> */}
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