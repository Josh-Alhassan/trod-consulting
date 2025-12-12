
import Image from "next/image";

import AboutTextBlock from "./AboutTextBlock";
import AboutImageLeft from "./AboutImageLeft";
import AboutImageRight from "./AboutImageRight";

import securityShield1 from "@/public/images/1.svg";
import securityShield2 from "@/public/images/2.svg";
import securityShield3 from "@/public/images/3.svg";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={styles.backgroundContainer} aria-label="About Us">
      <div className={`${styles.container} containerSection`}>

        {/* Text Block */}
        <AboutTextBlock />

        {/* Two-column images */}
        <div className={styles.imageContainer}>
          {/* <AboutImageLeft />
            <AboutImageRight /> */}

          <div className={styles.imageLeft}>
            <p className={styles.imageText}>We partner with forward-thinking businesses to turn complexity into clarity — crafting strategies that deliver measurable, lasting impact.</p>
          </div>
          <div className={styles.imageRight}>
            <div className={styles.shieldContainer}>
              <Image className={`${styles.securityShield} ${styles.shield1}`} src={securityShield1} alt="Security Shield" />
              <Image className={`${styles.securityShield} ${styles.shield2}`} src={securityShield2} alt="Security Shield" />
              <Image className={`${styles.securityShield} ${styles.shield3}`} src={securityShield3} alt="Security Shield" />

            </div>

            <p className={styles.cybersecurityText}>We ‘re
              obsessed with
              cybersecurity</p>
          </div>
        </div>
      </div>

    </section>
  );
}
