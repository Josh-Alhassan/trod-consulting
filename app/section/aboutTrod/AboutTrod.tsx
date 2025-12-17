import SectionSubheader from '@/app/components/SectionSubheader'
import SectionHeader from '@/app/components/SectionHeader'
import styles from './AboutTrod.module.css'
import Heading from '@/app/components/Heading'

import Image from 'next/image'
import serviceIcon1 from '@/public/serviceIcon1.svg'
import trodBadge from '@/public/trodBagde.svg'
import rocket from '@/public/rocket.svg'
import compass from '@/public/compass.svg'
import SecurityShieldDisplay from '../aboutUs/components/SecurityShieldDisplay'

export default function AboutTrod() {
    return (
        <section 
      className={styles.backgroundContainer} 
      aria-labelledby="about-trod"
    >
      <div className={`${styles.trodConsulting} containerSection`}>
        <SectionSubheader className={styles.trodConsultingsubTitle}>// About Us</SectionSubheader>

        <SectionHeader
          id="about-trod"
          title="About Trod"
          description="A UK-based business and technology consulting and advisory firm helping organisations navigate transformation, digitalisation, and operational excellence."
          className={styles.trodConsultingContent}
          headingClassName={styles.trodHeading}
          descriptionClassName={styles.trodConsultingText}
        />

        <div className={styles.trodConsultingGridContainer}>
            
            {/* Trod History */}
            <div className={`${styles.trodConsultingGridItem} ${styles.trodHistory}`}>
                {/* Trod Badge */}
                <Image className={styles.trodBadge} src={trodBadge} alt='trod Badge' width={70} height={70} />

                <Image src={serviceIcon1} alt='service Icon' width={50} height={50} />
                <p className={styles.gridItemText}>Founded in 2013 and headquartered in London with a brank in Lagos, Nigeria, TROD Consulting empowers public and private organizations to achieve sustainable growth. We integrate data, strategy, and technology to deliver innovative solutions that enhance efficiency and resilience across carious industries, including government, healthcare, finance, energy, and insurance.</p>
            </div>

            {/* Our mission */}
            <div className={`${styles.trodConsultingGridItem} ${styles.ourMission} ${styles.whiteBackground}`}>
                <SectionSubheader className={styles.trodConsultingsubTitle}>// Our Mission</SectionSubheader>

                <div className={styles.ourMissionContent}>
                    <Image src={rocket} alt='Rocket Icon' width={50} height={50} />

                    <p className={styles.ourMissionText}>At TROD Consulting, our mission is to empower public and private organisations to achieve sustainable growth through the integration of data, strategy, and technology. We simplify complexity to enable informed decision-making, foster resilience, and create measurable impact.</p>
                </div>
            </div>

            {/* Our mission 2 */}
            <div className={`${styles.trodConsultingGridItem} ${styles.ourMission} ${styles.blueBackground}`}>
                <SectionSubheader className={`${styles.trodConsultingsubTitle} ${styles.whitesubHeader}`}>// Our Mission</SectionSubheader>

                <div className={styles.ourMissionContent}>
                    <Image src={compass} alt='Compass Icon' width={50} height={50} />

                    <p className={styles.ourMissionText}>We strive to be a trusted leader in data, strategy, and technology consulting, driving sustainable growth and impact across industries. Our vision is for organisations to turn complexity into clarity and confidently embrace innovation for lasting societal value.</p>
                </div>
            </div>

            <SecurityShieldDisplay />

        </div>
      </div>
    </section>
    )
}