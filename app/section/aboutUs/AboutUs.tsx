
import Image from "next/image";

import AboutTextBlock from "./AboutTextBlock";
import AboutImageLeft from "./AboutImageLeft";
import AboutImageRight from "./AboutImageRight";
import ImageWithText from "./components/ImageWithText";
import SecurityShieldDisplay from "./components/SecurityShieldDisplay";
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

          <ImageWithText 
            text="We partner with forward-thinking businesses to turn complexity into clarity — crafting strategies that deliver measurable, lasting impact." 
          />
          <SecurityShieldDisplay />
        </div>
      </div>

    </section>
  );
}
