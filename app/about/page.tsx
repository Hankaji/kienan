import HistoryTimeline from "./_components/time-line-events";
import CoreValuesSection from "./_components/core-value-section";
import Header from "./_components/header";
import AboutSection from "./_components/about-section";
import MissionVisionSection from "./_components/mission-vision";

export default function Recruitment() {
  return (
    <div className="pt-[65px]">
      {/* <HeroSection noVideo header="Về chúng tôi" title="KIEN AN INVESTMENT JSC" desc="Khởi nghiệp - Kiến quốc" /> */}
      <Header />
      <AboutSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <HistoryTimeline />
    </div>
  )
}



