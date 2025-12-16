// import Image from "next/image";

import Navigation from "./components/Navigation"
import Hero from "./section/hero/Hero"
import AboutUs from "./section/aboutUs/AboutUs"
import OurServices from "./section/ourServices/OurServices"
import WhyChooseUs from "./section/whyChooseUs/WhyChooseUs";
import OurApproach from "./section/ourApproach/OurApproach";
import WorkShow from "./section/workShow/WorkShow";
import CaseStudy from "./section/caseStudy/CaseStudy";
import Testimonials from "./section/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Navigation />
        <Hero />
        <AboutUs />
        <OurServices />
        <WhyChooseUs />
        <OurApproach />
        <WorkShow />
        <CaseStudy />
        <Testimonials />
    </>
  );
}
