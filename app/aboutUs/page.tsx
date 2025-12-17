import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import AboutTrod from "../section/aboutTrod/AboutTrod";
import CaseStudy from "../section/caseStudy/CaseStudy";
import Contact from "../section/contact/Contact";
import CoreValue from "../section/coreValue/CoreValue";
import Testimonials from "../section/testimonials/Testimonials";
import TrodConsulting from "../section/trodConsulting/TrodConsulting";
import WorkShow from "../section/workShow/WorkShow";


export default function AboutUs() {
    return (
        <section>
            <Navigation />
            <TrodConsulting />
            <AboutTrod />
            <CoreValue />
            <WorkShow />
            <CaseStudy />
            <Testimonials />
            <Contact />

        </section>
    )
}