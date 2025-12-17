import SectionHeader from "@/app/components/SectionHeader"
import SectionSubheader from "@/app/components/SectionSubheader"
import Image from "next/image"
import styles from './CoreValue.module.css'

import clarity from '@/public/coreValues/clariry.svg'
import innovation from '@/public/coreValues/innovation.svg'
import integrity from '@/public/coreValues/intergrity.svg'
import excellence from '@/public/coreValues/excellence.svg'
import collaboration from '@/public/coreValues/collaboration.svg'
import improvement from '@/public/coreValues/improvement.svg'

type CoreValueItem = {
  id: string
  icon: string
  alt: string
  title: string
  description: string
}

const coreValues: CoreValueItem[] = [
  {
    id: 'client-centrality',
    icon: clarity,
    alt: 'Clarity',
    title: 'Client-Centrality',
    description: 'We prioritise our clients in every decision-making process, ensuring that solutions are customized to address their specific needs and provide measurable value.'
  },
  {
    id: 'innovation',
    icon: innovation,
    alt: 'Innovation',
    title: 'Innovation',
    description: 'We actively incorporate emerging technologies and engage in creative thinking to formulate forward-thinking strategies that facilitate transformation and promote sustainable growth.'
  },
  {
    id: 'integrity',
    icon: integrity,
    alt: 'Integrity',
    title: 'Integrity',
    description: 'We maintain the highest ethical standards, cultivating trust through transparency, accountability, and honesty in all our professional engagements.'
  },
  {
    id: 'excellence',
    icon: excellence,
    alt: 'Excellence',
    title: 'Excellence',
    description: 'We pursue exceptional quality in every project by integrating expertise with precision to surpass expectations and achieve a lasting impact.'
  },
  {
    id: 'collaboration',
    icon: collaboration,
    alt: 'Collaboration',
    title: 'Collaboration',
    description: 'We recognise the significance of partnership, collaborating closely with clients, stakeholders, and teams to jointly create solutions that lead to success.'
  },
  {
    id: 'continuous-improvement',
    icon: improvement,
    alt: 'Continuous Improvement',
    title: 'Continuous Improvement',
    description: 'We are dedicated to ongoing learning, adaptation, and evolution, ensuring that our methodologies and services remain relevant, effective, and prepared for future challenges.'
  }
]


export default function CoreValue() {
    return (
        <section className={styles.backgroundContainer}>
            <div className={`${styles.containerSection} containerSection`}>
                <SectionSubheader className={styles.corevaluesubTitle}>
                    // Core Value
                </SectionSubheader>
                <SectionHeader
                    id="core-value"
                    title="Our Core Value"
                    description="We've delivered value across diverse industries where precision, compliance, and innovation matter most"
                    className={styles.corevalueContent}
                    headingClassName={styles.coreValueHeading}
                    descriptionClassName={styles.coreValueText}
                />

                <div className={styles.gridContainer}>
                    {coreValues.map((value) => (
                        <div key={value.id} className={styles.gridItem}>
                            <Image 
                                src={value.icon} 
                                alt={value.alt} 
                                className={styles.gridItemImage} 
                            />
                            <div className={styles.gridItemContent}>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}