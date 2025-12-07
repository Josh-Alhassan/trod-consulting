import SectionSubheader from "@/app/components/SectionSubheader";
import styles from "./OurServices.module.css";
import Heading from "@/app/components/Heading";

const OurServices = () => {
  return (
    <section className={`${styles.container} containerSection`}>
      <SectionSubheader className={styles.serviceSubheader}>// Our Services</SectionSubheader>
      <Heading level="h2" className={styles.serviceHeading}>Strategic business consulting</Heading>
      
    </section>
  );
};

export default OurServices;