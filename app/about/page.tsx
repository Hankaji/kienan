import { HeroSection } from "@/components/hero-section";
import { Award, LucideIcon, Target } from "lucide-react";
import Image from "next/image";
import HistoryTimeline from "./_components/time-line-events";
import CoreValuesSection from "./_components/core-value-section";

export default function Recruitment() {
  return (
    <>
      <HeroSection noVideo header="Về chúng tôi" title="KIEN AN INVESTMENT JSC" desc="Khởi nghiệp - Kiến quốc" />
      <AboutSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <HistoryTimeline />
    </>
  )
}

function AboutSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              CÔNG TY CỔ PHẦN ĐẦU TƯ PHÁT TRIỂN DỊCH VỤ KIẾN AN
            </h2>
            <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Bằng khát vọng tiên phong và chiến lược đầu tư - phát triển bền vững. Kiến An định hướng phát triển trở thành 1 tập đoàn hàng đầu khu vực.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Không ngừng đổi mới để kiến tạo nên hệ sinh thái các sản phẩm, dịch vụ đẳng cấp. Góp phần nâng cao chất lượng cuộc sống của người Việt và nâng tầm vị thế của thương hiệu Việt trên trường quốc tế.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/services-building.jpg"
              alt="Kiến An Building"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface MissionVisionItem {
  title: string;
  icon: LucideIcon;
  quote?: string;
  description: string;
}

const items: MissionVisionItem[] = [
  {
    title: "Sứ mệnh",
    icon: Target,
    quote: '"Chuyên Nghiệp tận tâm - Nâng tầm giá trị"',
    description: "Kiến An Service cam kết mang đến dịch vụ quản lý vận hành chuẩn mực, tận tâm, góp phần gia tăng giá trị cho từng bất động sản."
  },
  {
    title: "Tầm nhìn",
    icon: Award,
    description: "Kiến An Service trở thành đơn vị vận hành tòa nhà đáng tin nhất, nơi mỗi công trình được quản lý chuẩn mực, minh bạch và nâng tầm giá trị sống cho cư dân."
  }
];

function MissionVisionSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-10 rounded-2xl border border-gray-700 hover:border-orange-500 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <item.icon className="text-white w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

              {item.quote && (
                <p className="text-gray-300 text-lg italic mb-4">
                  {item.quote}
                </p>
              )}

              {/* Description */}
              <p className={item.quote ? "text-gray-400 leading-relaxed" : "text-gray-300 text-lg leading-relaxed"}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

