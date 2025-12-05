// import Image from "next/image";

import Navigation from "./components/Navigation"
import Hero from "./section/hero/Hero"
import AboutUs from "./section/aboutUs/AboutUs"

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Hero />
        <AboutUs />
      </div>
    
    </>
  );
}
