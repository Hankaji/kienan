import ScrollReveal from "@/components/scroll-reveal";

export default function Header() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent opacity-50"></div>

      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Subtitle */}
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Về chúng tôi
            </span>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              KIEN AN INVESTMENT JSC
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed">
              Khởi nghiệp - Kiến quốc
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
