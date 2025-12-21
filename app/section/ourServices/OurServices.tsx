'use client';


import SectionSubheader from "@/app/components/SectionSubheader";
import styles from "./OurServices.module.css";
import Heading from "@/app/components/Heading";
import Image from "next/image";

// Import all icons
import serviceIconOne from '@/public/serviceIcon1.svg';
import serviceIconTwo from '@/public/serviceIcon2.svg';
import serviceIconThree from '@/public/serviceIcon3.svg'
import featureIconOne from '@/public/featureIconOne.svg';
import featureIconTwo from '@/public/featureIconTwo.svg';
import featureIconThree from '@/public/featureIconThree.svg';
import featureIconFour from '@/public/featureIconFour.svg';
import featureIconFive from '@/public/featureIconFive.svg';
import featureIcon6 from '@/public/featureIcon6.svg';
import featureIcon7 from '@/public/featureIcon7.svg';
import featureIcon8 from '@/public/featureIcon8.svg';

import threat from '@/public/threat.svg'
import identity from '@/public/indentity.svg'
import security from '@/public/security.svg'
import awareness from '@/public/awareness.svg'
import privillege from '@/public/privillege.svg'
import secure from '@/public/secure.svg'
import data from '@/public/data.svg'
import business from '@/public/business.svg'
import predictive from '@/public/predictive.svg'
import report from '@/public/report.svg'

const icons = {
  serviceIconOne,
  serviceIconTwo,
  serviceIconThree,
  featureIconOne,
  featureIconTwo,
  featureIconThree,
  featureIconFour,
  featureIconFive,
  featureIconSix: featureIcon6,
  featureIconSeven: featureIcon7,
  featureIconEight: featureIcon8,
  threat,
  identity,
  security,
  awareness,
  privillege,
  secure,
  data,
  business,
  predictive,
  report,
} as const;

interface ServiceFeature {
  id: string;
  text: string;
  icon: keyof typeof icons;
}

interface ServiceCardProps {
  title: string;
  description: string;
  features: ServiceFeature[][];
  icon: keyof typeof icons;
  index: number;
  totalServices: number;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ServiceCard = ({
  title,
  description,
  features,
  icon,
  index,
  totalServices,
  buttonText = 'Get in touch',
  onButtonClick = () => {},
}: ServiceCardProps) => {
  const IconComponent = icons[icon];
  
  return (
    <div className={`${styles.container} containerSection`}>
      <div className={styles.serviceContent}>
        <SectionSubheader className={styles.serviceSubheader}>
          // Our Services
        </SectionSubheader>
        <Heading level="h2" className={styles.serviceHeading}>
          {title}
        </Heading>

        <div className={styles.serviceContentWrapper}>
          <div className={styles.serviceHeader}>
            <div className={styles.serviceImage}>
              <Image 
                src={IconComponent} 
                alt="" 
                width={48} 
                height={48}
                className={styles.serviceIcon}
              />
            </div>
            <SectionSubheader className={styles.servicePagination}>
              {index + 1} of {totalServices} //
            </SectionSubheader>
          </div>

          <div className={styles.serviceBody}>
            <p className={styles.serviceBodyText}>{description}</p>

            <div className={styles.serviceFeaturesWrapper}>
              {features.map((featureGroup, groupIndex) => (
                <div key={`feature-group-${groupIndex}`} className={styles.serviceFeatures}>
                  {featureGroup.map((feature) => {
                    const FeatureIcon = icons[feature.icon];
                    return (
                      <div key={feature.id} className={styles.serviceFeatureItem}>
                        <div className={styles.serviceFeatureIcon}>
                          <Image 
                            src={icons[feature.icon]} 
                            alt="" 
                            width={20} 
                            height={20}
                            className={styles.featureIcon}
                            aria-hidden="true"
                          />
                        </div>
                        <p className={styles.serviceFeatureText}>{feature.text}</p>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button 
        className={`${styles.serviceButton} ${index > 0 ? styles.serviceButton2 : ''}`}
        onClick={onButtonClick}
        aria-label={`Contact us about ${title}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

const OurServices = () => {
  const services: Array<{
  id: string;
  title: string;
  description: string;
  icon: keyof typeof icons;
  features: ServiceFeature[][];
}> = [
    {
      id: 'business-consulting',
      title: 'Strategic business consulting',
      description: 'We help businesses redefine their direction, streamline operations, and capture new growth opportunities through data-driven strategies and performance transformation.',
      icon: 'serviceIconOne',
      features: [
        [
          {
            id: 'business-transformation',
            text: 'Business Transformation & Change Management',
            icon: 'featureIconOne',
          },
          {
            id: 'operational-efficiency',
            text: 'Operational Efficiency & Process Optimisation',
            icon: 'featureIconTwo',
          },
        ],
        [
          {
            id: 'org-design',
            text: 'Organisational Design & Strategy Execution',
            icon: 'featureIconThree',
          },
          {
            id: 'customer-experience',
            text: 'Customer Experience Strategy',
            icon: 'featureIconFour',
          },
        ],
      ],
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation & Technology Advisory',
      description: 'We bridge the gap between business and technology — helping you implement scalable, secure, and future-ready digital ecosystems. Our Expertise Includes:',
      icon: 'serviceIconTwo',
      features: [
        [
          {
            id: 'cloud-infra',
            text: 'Cloud Infrastructure & Migration (AWS, Azure, GCP)',
            icon: 'featureIconFive',
          },
          {
            id: 'enterprise-integration',
            text: 'Enterprise Systems Integration',
            icon: 'featureIconSix',
          },
        ],
        [
          {
            id: 'it-architecture',
            text: 'IT Architecture & Process Automation',
            icon: 'featureIconSeven',
          },
          {
            id: 'software-evaluation',
            text: 'Software Evaluation & Vendor Management',
            icon: 'featureIconEight',
          },
        ],
      ],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Risk Management',
      description: 'Your business is only as strong as your security posture. We protect your digital assets with end-to-end cybersecurity frameworks and compliance-driven solutions.',
      icon: 'serviceIconThree',
      features: [
        [
          {
            id: 'vulnerability',
            text: 'Vulnerability & Threat Management',
            icon: 'threat',
          },
          {
            id: 'identity',
            text: 'Identity and Access Management',
            icon: 'identity',
          },
        ],
        [
          {
            id: 'security-compliance',
            text: 'Security Compliance (FCA, PCI DSS v4, GDPR)',
            icon: 'security',
          },
          {
            id: 'awareness-training',
            text: 'Awareness & Training for Teams',
            icon: 'awareness',
          },
        ],
        [
          {
            id: 'privilege-access-management',
            text: 'Privilege Access Management',
            icon: 'privillege',
          },
          {
            id: 'ci-cd',
            text: 'Secure CI/CD Pipelines',
            icon: 'secure',
          },
        ]
      ],
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Business Intelligence',
      description: 'Turn data into decisions. We design analytics frameworks that reveal opportunities, predict trends, and measure success.',
      icon: 'serviceIconTwo',
      features: [
        [
          {
            id: 'data-strategy',
            text: 'Data Strategy & Architecture',
            icon: 'data',
          },
          {
            id: 'predictive-analytics',
            text: 'Custom Reporting & Data Visualization',
            icon: 'report',
          },
        ],
        [
          {
            id: 'it-architecture',
            text: 'Business Intelligence Dashboards',
            icon: 'business',
          },
          {
            id: 'predictive-model',
            text: 'Predictive Analytics & Machine Learning Models',
            icon: 'predictive',
          },
          // {
          //   id: 'software-evaluation',
          //   text: 'Software Evaluation & Vendor Management',
          //   icon: featureIcon8,
          // }
        ],
      ],
    },
  ];

  const handleContactClick = (serviceTitle: string) => {
    // Implement contact logic here
    console.log(`Contact about: ${serviceTitle}`);
  };

  return (
    <section id="services" className={styles.backgroundContainer} aria-label="Our Services">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          features={service.features}
          icon={service.icon as keyof typeof icons}
          index={index}
          totalServices={services.length}
          onButtonClick={() => handleContactClick(service.title)}
        />
      ))}
    </section>
  );
};

export default OurServices;