import ScrollReveal from "@/components/scroll-reveal";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <ScrollReveal delay={0.1}>
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
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal delay={0.2}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/services-building.jpg"
                alt="Kiến An Building"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
