'use client'
import { HeroSection } from "@/components/hero-section";
import JobCard from "./_components/job-card";
import { JobCardProps } from "./_components/job-card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

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
            <Image
              alt="Dịch vụ quản lý tòa nhà chuyên nghiệp"
              width={600}
              height={400}
              decoding="async"
              className="w-full h-full object-cover"
              src="/services-page.jpg"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

const preparePhase: JobCardProps[] = [
  {
    title: "NHÂN SỰ",
    description: ["Tuyển dụng, xây dựng sổ tay nhân viên và đào tạo"],
    iconSrc: "/pm/pm-icon1.jpg",
  },
  {
    title: "TÀI CHÍNH",
    description: [
      "Thiết lập ngân sách tiền khai trương và vận hành",
      "Xây dựng quy trình, biểu mẫu tài chính"
    ],
    iconSrc: "/pm/pm-icon2.jpg",
  },
  {
    title: "BÀN GIAO HỆ THỐNG M&E",
    description: [
      "Tham dự các đợt kiểm tra, chạy thử hệ thống và báo cáo",
      "Lập kế hoạch vận hành hệ thống kỹ thuật của dự án",
    ],
    iconSrc: "/pm/pm-icon3.jpg",
  },
  {
    title: "QUY TRÌNH",
    description: [
      "Thiết lập quy trình tiêu chuẩn, nội quy tòa nhà và sổ tay cư dân",
      "Lập kế hoạch quản lý rủi ro",
    ],
    iconSrc: "/pm/pm-icon4.jpg",
  },
  {
    title: "NHÀ THẦU DỊCH VỤ",
    description: [
      "Đánh giá nhà thầu và ký kết các hợp đồng dịch vụ",
    ],
    iconSrc: "/pm/pm-icon5.jpg",
  },
  {
    title: "SỬA CHỮA CẢI TẠO",
    description: [
      "Cung cấp biểu mẫu và hướng dẫn đăng ký",
      "Giám sát thi công thiết kế mặt bằng, sửa chữa đảm bảo quy định",
    ],
    iconSrc: "/pm/pm-icon6.jpg",
  },
  {
    title: "QUẢN LÝ NĂNG LƯỢNG",
    description: [
      "Đề xuất vị trí lắp đặt thêm đồng hồ đo lường năng lượng",
      "Thiết lập KPI để tiết kiệm năng lượng",
    ],
    iconSrc: "/pm/pm-icon2.jpg",
  },
  {
    title: "QUẢN LÝ TIỆN ÍCH",
    description: [
      "Xây dựng nội quy, lập kế hoạch quản lý vận hành các hoạt động tiện ích",
    ],
    iconSrc: "/pm/pm-icon8.jpg",
  },
];

const operationPhase: JobCardProps[] = [
  {
    title: "VẬN HÀNH",
    description: ["Giám sát việc vận hành hàng ngày",
      "Quản lý nhân viên và tiêu chuẩn dịch vụ"],
    iconSrc: "/pm/pm-icon1.jpg",
  },
  {
    title: "CƯ DÂN/\nKHÁCH THUÊ",
    description: [
      "Quản lý khách hàng và hợp đồng",
      "Tiếp nhận và xử lý yêu cầu hàng ngày",
      "Hỗ trợ đăng ký tạm trú với chính quyền địa phương"
    ],
    iconSrc: "/pm/pm-icon2.jpg",
  },
  {
    title: "BẢO TRÌ\nBẢO DƯỠNG",
    description: [
      "Quản lý các điều khoản và điều kiện của hợp đồng bảo hành/bảo trì",
      "Kiểm soát hiệu quả tiêu thụ năng lượng",
    ],
    iconSrc: "/pm/pm-icon3.jpg",
  },
  {
    title: "QUẢN LÝ\nTÀI CHÍNH",
    description: ["Quản lý và kiểm soát các vấn đề liên quan đến tài chính"],
    iconSrc: "/pm/pm-icon4.jpg",
  },
  {
    title: "QUẢN LÝ\nNHÀ THẦU DỊCH VỤ",
    description: [
      "Giám sát và theo dõi tất cả các nhà cung cấp dịch vụ",
    ],
    iconSrc: "/pm/pm-icon5.jpg",
  },
  {
    title: "AN TOÀN\nLAO ĐỘNG",
    description: [
      "Thiết lập kế hoạch sơ tán và PCCC",
      "Xây dựng kế hoạch quản lý rủi ro",
    ],
    iconSrc: "/pm/pm-icon6.jpg",
  },
  {
    title: "BÁO CÁO",
    description: [
      "Thực hiện các báo cáo tài chính (doanh thu - lợi nhuận, khoản phải trả, khoản phải thu…)",
    ],
    iconSrc: "/pm/pm-icon2.jpg",
  },
  {
    title: "QUẢN LÝ TIỆN ÍCH",
    description: [
      "Quản lý tài sản, trang thiết bị và thực hiện bảo dưỡng định kỳ",
      "Quản lý/xử lý các yêu cầu của khách hàng"
    ],
    iconSrc: "/pm/pm-icon8.jpg",
  },
];


function JobSection() {
  const [phase, setPhase] = useState<"pre" | "operation">("pre");

  const isPre = phase === "pre";

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Tuyển Dụng & Dịch Vụ
        </h2>

        <div className="flex justify-center gap-8 mb-12">
          <Button
            variant="ghost"
            onClick={() => setPhase("pre")}
            className="relative px-6 py-3 text-lg font-semibold transition-colors duration-300 group"
          >
            <span
              className={`transition-colors duration-300 ${isPre ? "text-red-600" : "text-gray-600 group-hover:text-red-600"
                }`}
            >
              GIAI ĐOẠN TIỀN KHAI TRƯƠNG
            </span>

            {/* underline */}
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300"
              style={{ width: isPre ? "100%" : "0%" }}
            />
          </Button>

          <Button
            variant="ghost"
            onClick={() => setPhase("operation")}
            className="relative px-6 py-3 text-lg font-semibold transition-colors duration-300 group"
          >
            <span
              className={`transition-colors duration-300 ${!isPre ? "text-red-600" : "text-gray-600 group-hover:text-red-600"
                }`}
            >
              GIAI ĐOẠN VẬN HÀNH
            </span>

            {/* underline */}
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300"
              style={{ width: !isPre ? "100%" : "0%" }}
            />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {phase === "pre" ? preparePhase.map((job, i) => (
            <JobCard key={i} {...job} />
          )) : operationPhase.map((job, i) => (
            <JobCard key={i} {...job} />
          ))}
        </div>
      </div>
    </section>
  )
}
