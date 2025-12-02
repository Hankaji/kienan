import { HeroSection } from "@/components/hero-section";
import JobCard from "./_components/job-card";
import { JobCardProps } from "./_components/job-card";

export default function Services() {
  return (
    <>
      <HeroSection title="Dịch Vụ Cung Cấp" desc="Chuyên nghiệp tận tâm - nâng tầm giá trị" />
      <ApartmentmanagementSection />
      <JobSection />
    </>
  )
}

function ApartmentmanagementSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content Block */}
          <div className="space-y-6" style={{ opacity: 1, transform: 'none' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Dịch Vụ Quản Lý Vận Hành Nhà Chung Cư
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed p-8 border border-gray-200 rounded-2xl shadow-sm bg-white/50 backdrop-blur-sm">
              <p className="text-base">
                Chúng tôi xây dựng quy chuẩn dịch vụ dựa trên một tinh thần: <strong className="text-gray-900">{"\""}Tòa nhà vận hành ổn định, Tài chính minh bạch, dịch vụ đáng sống{"\""}</strong>
              </p>
              <p className="text-base">
                Chúng tôi tiên phong cung cấp những giải pháp chuyên nghiệp nhưng gần gũi. Tất cả các nhân viên đều làm việc theo quy trình chặt chẽ và thái độ tận tâm.
              </p>
            </div>
          </div>

          {/* Image Block */}
          <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg" style={{ opacity: 1, transform: 'none' }}>
            {/* <Image */}
            {/*   alt="Dịch vụ quản lý tòa nhà chuyên nghiệp" */}
            {/*   width={600} */}
            {/*   height={400} */}
            {/*   decoding="async" */}
            {/*   // data-nimg="1" // Removed the Next.js/image specific attribute */}
            {/*   className="w-full h-full object-cover" */}
            {/*   // style={{ color: 'transparent' }} // Removed the Next.js/image specific style */}
            {/*   src="/services-page.jpg" // Use the source path directly */}
            {/* /> */}
          </div>

        </div>
      </div>
    </section>
  )
}

const jobs: JobCardProps[] = [
  {
    title: "NHÂN SỰ",
    description: ["Tuyển dụng, xây dựng sổ tay nhân viên và đào tạo"],
    iconSrc: "/img/lao-cong.jpg",
  },

];

function JobSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Tuyển Dụng & Dịch Vụ
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, i) => (
            <JobCard key={i} {...job} />
          ))}
        </div>
      </div>
    </section>
  )
}
