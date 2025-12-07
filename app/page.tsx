// import Image from "next/image";

import Navigation from "./components/Navigation"
import Hero from "./section/hero/Hero"
import AboutUs from "./section/aboutUs/AboutUs"
import OurServices from "./section/ourServices/OurServices"

export default function Home() {
  return (
    <>
      <Navigation />
        <Hero />
        <AboutUs />
        <OurServices />
    </>
  );
}
