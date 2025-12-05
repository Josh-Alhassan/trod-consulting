
import AboutTextBlock from "./AboutTextBlock";
import AboutImageLeft from "./AboutImageLeft";
import AboutImageRight from "./AboutImageRight";

export default function AboutUs() {
  return (
    <section className="py-6">
    
        {/* Text Block */}
        <AboutTextBlock />

        {/* Two-column images */}
        <div>
          {/* <AboutImageLeft />
          <AboutImageRight /> */}
        </div>
    </section>
  );
}
