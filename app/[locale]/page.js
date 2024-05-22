import { useTranslations } from "next-intl";
import Baner from "./Components/Baner";
import Easysteps from "./Components/Easysteps";
import DeferSectionOne from "./Components/DeferSectionOne";
import AmazingFeatures from "./Components/AmazingFeatures";
import WhyJonEasy from "./Components/WhyJonEasy";
import SectionOne from "./Components/SectionOne";
import SectionTwoo from "./Components/SectionTwoo";
import SectionFoor from "./Components/SectionFoor";
import SectionFive from "./Components/SectionFive";
import Features from "./Components/Features";
import Contact from "./Components/Contact";

export default function Index() {
  return (
    <div className="w-full overflow-hidden">
      <Baner />
      <Easysteps />
      <DeferSectionOne />
      <AmazingFeatures />
      <WhyJonEasy />
      <SectionOne />
      <SectionTwoo />
      <SectionFoor />
      <SectionFive />
      <Features />
      <Contact />
    </div>
  );
}