import ScrollReveal from "@/components/scroll-reveal";
import { Award, LucideIcon, Target } from "lucide-react";

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

export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {items.map((item, index) => (
            <ScrollReveal direction={index == 0 ? "left" : "right"} key={index}>
              <div
                className="bg-gray-800 p-10 h-full rounded-2xl border border-gray-700 hover:border-orange-500 transition-colors duration-300"
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
