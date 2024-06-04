import Image from "next/image";
import Navbar from "./component/common/navbar";
import Footer from "./component/common/footer";
import Features from "./component/homepage/features";
import Faqsection from "./component/homepage/faq/faqsection";
import Happycustomer from "./component/homepage/happy/happycustomer";
import MemorialPage from "./component/homepage/memorialpage";
import Hero from "./component/homepage/hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MemorialPage
        title="Scan Soul Star"
        num="1"
        desc="Start your journey by scanning the Soul Star with your smartphone.

        "
        pic="https://remember-well.com/cdn/shop/files/step1.png?v=1706651518&width=500"
      />
      <MemorialPage
        title="Set up profile"
        num="2"
        desc="Take a moment to configure the profile."
        pic="https://remember-well.com/cdn/shop/files/mockup_setup-medallion_en.png?v=1711744699&width=500"
      />
      <MemorialPage
        title="Memorial page is active"
        num="3"
        desc="By activating the commemorative page, you give memories a special place."
        pic="https://remember-well.com/cdn/shop/files/mockup_media_en.png?v=1711745031&width=500"
      />
      <Happycustomer />
      <div>
        <Faqsection />
      </div>
      <Features />
      <Footer />
    </div>
  );
}
