import { ReactNode } from "react";
import { LucideHeart, LucideShield, LucideAward } from "lucide-react";

interface CoreValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function CoreValueCard({ icon, title, description }: CoreValueCardProps) {
  return (
    <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
      <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function CoreValuesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto"></div>
        </div>

        {/* Grid of values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CoreValueCard
            icon={<LucideHeart size={32} />}
            title="Tận tâm"
            description="Phục vụ khách hàng bằng cả trái tim và sự nhiệt huyết."
          />
          <CoreValueCard
            icon={<LucideShield size={32} />}
            title="Chuyên nghiệp"
            description="Quy trình làm việc chuẩn mực, hiệu quả và minh bạch."
          />
          <CoreValueCard
            icon={<LucideAward size={32} />}
            title="Hiệu quả"
            description="Mang lại giá trị thực tế và bền vững cho khách hàng."
          />
        </div>
      </div>
    </section>
  );
}

