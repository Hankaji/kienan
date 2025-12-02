'use client'
import { HeroSection } from "@/components/hero-section"
import Image from "next/image";
import JobDescriptionCard, { JobDescriptionCardProps } from "./_components/job-description-card";

export default function Recruitment() {
  return (
    <>
      <HeroSection title="Tuyển Dụng" desc="Gia nhập đội ngũ Kiến An - Nơi tài năng được tỏa sáng" />
      <RecruitmentBanner />
      <JobOppotunities />
    </>
  )
}

export function RecruitmentBanner() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative w-full h-auto">
          <Image
            src="/bg-recruitment.png"
            alt="Tuyển dụng Kiến An"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function JobOppotunities() {

  const jobList: JobDescriptionCardProps[] = [
    {
      title: "Quản Lý Vận Hành Bất Động Sản",
      description: "Tìm kiếm ứng viên có kinh nghiệm trong quản lý và vận hành bất động sản, khách sạn hoặc lưu trú.",
      department: "Vận Hành",
      location: "Hà Nội",
      type: "Toàn thời gian",
    },
    {
      title: "Nhân Viên Quản Lý Khách Sạn",
      description: "Cần tuyển nhân viên có kinh nghiệm trong quản lý khách sạn, resort hoặc các cơ sở lưu trú.",
      department: "Dịch Vụ",
      location: "Hà Nội",
      type: "Toàn thời gian",
    },
    {
      title: "Chuyên Viên Chăm Sóc Khách Hàng",
      description: "Tìm kiếm ứng viên năng động, có kỹ năng giao tiếp tốt và nhiệt tình trong công việc.",
      department: "Dịch Vụ Khách Hàng",
      location: "Hà Nội",
      type: "Toàn thời gian",
    },
    {
      title: "Chuyên Viên Kỹ Thuật",
      description: "Chuyên viên kỹ thuật có tay nghề tốt, xử lí tốt các tình huống trong công việc",
      department: "Kỹ Thuật",
      location: "Hà Nội",
      type: "Toàn thời gian",
    },
    {
      title: "Nhân Viên Vệ Sinh",
      description: "Nhân viên vệ sinh chăm chỉ chịu khó không ngại việc",
      department: "Dịch Vụ",
      location: "Hà Nội",
      type: "Toàn thời gian",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-playfair font-bold">Cơ Hội Nghề Nghiệp</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">Kiến An luôn tìm kiếm những tài năng xuất sắc để cùng phát triển và tạo nên những giá trị bền vững.</p>
        </div>
        <div className="space-y-6">
          {jobList.map((job, index) => (
            <JobDescriptionCard
              key={index}
              {...job}
              onApply={() => console.log(`Applied to ${job.title}`)}
            />
          ))}

        </div>
        <NoPositionFound />
      </div>
    </section>
  )
}

export function NoPositionFound() {
  return (
    <div
      className="mt-16 text-center space-y-4 bg-secondary p-8 rounded-xl border border-border"
      style={{ opacity: 1, transform: "none" }}
    >
      <h3 className="text-2xl font-playfair font-bold">
        Không Tìm Thấy Vị Trí Phù Hợp?
      </h3>

      <p className="text-muted">
        Hãy gửi CV của bạn về email{" "}
        <a
          href="mailto:kienansystem@gmail.com"
          className="text-primary font-semibold"
        >
          kienansystem@gmail.com
        </a>
        <br />
        Chúng tôi sẽ liên hệ khi có vị trí phù hợp với bạn.
      </p>
    </div>
  );
}

