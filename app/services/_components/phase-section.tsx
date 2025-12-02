'use client'
import { useState } from "react";
import JobCard, { JobCardProps } from "./job-card";
import { Button } from "@/components/ui/button";

const preparePhase: JobCardProps[] = [
  {
    title: "NHÂN SỰ",
    description: ["Tuyển dụng, xây dựng sổ tay nhân viên và đào tạo"],
    iconSrc: "/pm/pm-icon1.jpg",
    onHoverIconSrc: "/pm/pm-icon1-1.jpg",
  },
  {
    title: "TÀI CHÍNH",
    description: [
      "Thiết lập ngân sách tiền khai trương và vận hành",
      "Xây dựng quy trình, biểu mẫu tài chính"
    ],
    iconSrc: "/pm/pm-icon2.jpg",
    onHoverIconSrc: "/pm/pm-icon2-1.jpg",
  },
  {
    title: "BÀN GIAO HỆ THỐNG M&E",
    description: [
      "Tham dự các đợt kiểm tra, chạy thử hệ thống và báo cáo",
      "Lập kế hoạch vận hành hệ thống kỹ thuật của dự án",
    ],
    iconSrc: "/pm/pm-icon3.jpg",
    onHoverIconSrc: "/pm/pm-icon3-1.jpg",
  },
  {
    title: "QUY TRÌNH",
    description: [
      "Thiết lập quy trình tiêu chuẩn, nội quy tòa nhà và sổ tay cư dân",
      "Lập kế hoạch quản lý rủi ro",
    ],
    iconSrc: "/pm/pm-icon4.jpg",
    onHoverIconSrc: "/pm/pm-icon4-1.jpg",
  },
  {
    title: "NHÀ THẦU DỊCH VỤ",
    description: [
      "Đánh giá nhà thầu và ký kết các hợp đồng dịch vụ",
    ],
    iconSrc: "/pm/pm-icon5.jpg",
    onHoverIconSrc: "/pm/pm-icon5-1.jpg",
  },
  {
    title: "SỬA CHỮA CẢI TẠO",
    description: [
      "Cung cấp biểu mẫu và hướng dẫn đăng ký",
      "Giám sát thi công thiết kế mặt bằng, sửa chữa đảm bảo quy định",
    ],
    iconSrc: "/pm/pm-icon6.jpg",
    onHoverIconSrc: "/pm/pm-icon6-1.jpg",
  },
  {
    title: "QUẢN LÝ NĂNG LƯỢNG",
    description: [
      "Đề xuất vị trí lắp đặt thêm đồng hồ đo lường năng lượng",
      "Thiết lập KPI để tiết kiệm năng lượng",
    ],
    iconSrc: "/pm/pm-icon7.jpg",
    onHoverIconSrc: "/pm/pm-icon7-1.jpg",
  },
  {
    title: "QUẢN LÝ TIỆN ÍCH",
    description: [
      "Xây dựng nội quy, lập kế hoạch quản lý vận hành các hoạt động tiện ích",
    ],
    iconSrc: "/pm/pm-icon8.jpg",
    onHoverIconSrc: "/pm/pm-icon8-1.jpg",
  },
];

const operationPhase: JobCardProps[] = [
  {
    title: "VẬN HÀNH",
    description: ["Giám sát việc vận hành hàng ngày",
      "Quản lý nhân viên và tiêu chuẩn dịch vụ"],
    iconSrc: "/pm/pm-icon1.jpg",
    onHoverIconSrc: "/pm/pm-icon1-1.jpg",
  },
  {
    title: "CƯ DÂN/\nKHÁCH THUÊ",
    description: [
      "Quản lý khách hàng và hợp đồng",
      "Tiếp nhận và xử lý yêu cầu hàng ngày",
      "Hỗ trợ đăng ký tạm trú với chính quyền địa phương"
    ],
    iconSrc: "/pm/pm-icon2.jpg",
    onHoverIconSrc: "/pm/pm-icon1-1.jpg",
  },
  {
    title: "BẢO TRÌ\nBẢO DƯỠNG",
    description: [
      "Quản lý các điều khoản và điều kiện của hợp đồng bảo hành/bảo trì",
      "Kiểm soát hiệu quả tiêu thụ năng lượng",
    ],
    iconSrc: "/pm/pm-icon3.jpg",
    onHoverIconSrc: "/pm/pm-icon1-1.jpg",
  },
  {
    title: "QUẢN LÝ\nTÀI CHÍNH",
    description: ["Quản lý và kiểm soát các vấn đề liên quan đến tài chính"],
    iconSrc: "/pm/pm-icon4.jpg",
    onHoverIconSrc: "/pm/pm-icon1-1.jpg",
  },
  {
    title: "QUẢN LÝ\nNHÀ THẦU DỊCH VỤ",
    description: [
      "Giám sát và theo dõi tất cả các nhà cung cấp dịch vụ",
    ],
    iconSrc: "/pm/pm-icon5.jpg",
    onHoverIconSrc: "/pm/pm-icon1-1.jpg",
  },
  {
    title: "AN TOÀN\nLAO ĐỘNG",
    description: [
      "Thiết lập kế hoạch sơ tán và PCCC",
      "Xây dựng kế hoạch quản lý rủi ro",
    ],
    iconSrc: "/pm/pm-icon6.jpg",
    onHoverIconSrc: "/pm/pm-icon1-1.jpg",
  },
  {
    title: "BÁO CÁO",
    description: [
      "Thực hiện các báo cáo tài chính (doanh thu - lợi nhuận, khoản phải trả, khoản phải thu…)",
    ],
    iconSrc: "/pm/pm-icon2.jpg",
    onHoverIconSrc: "/pm/pm-icon1-1.jpg",
  },
  {
    title: "QUẢN LÝ TIỆN ÍCH",
    description: [
      "Quản lý tài sản, trang thiết bị và thực hiện bảo dưỡng định kỳ",
      "Quản lý/xử lý các yêu cầu của khách hàng"
    ],
    iconSrc: "/pm/pm-icon8.jpg",
    onHoverIconSrc: "/pm/pm-icon1-1.jpg",
  },
];


export default function PhasesSection() {
  const [phase, setPhase] = useState<"pre" | "operation">("pre");

  const isPre = phase === "pre";

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Tuyển Dụng & Dịch Vụ
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8 md:mb-12 px-4 md:px-0">
          <Button
            variant="ghost"
            onClick={() => setPhase("pre")}
            className="relative w-full md:w-auto px-6 py-3 text-base md:text-lg font-semibold transition-colors duration-300 group"
          >
            <span
              className={`transition-colors duration-300 ${isPre ? "text-red-600" : "text-gray-600 group-hover:text-red-600"
                }`}
            >
              GIAI ĐOẠN TIỀN KHAI TRƯƠNG
            </span>

            {/* Underline */}
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300"
              style={{ width: isPre ? "100%" : "0%" }}
            />
          </Button>

          <Button
            variant="ghost"
            onClick={() => setPhase("operation")}
            className="relative w-full md:w-auto px-6 py-3 text-base md:text-lg font-semibold transition-colors duration-300 group"
          >
            <span
              className={`transition-colors duration-300 ${!isPre ? "text-red-600" : "text-gray-600 group-hover:text-red-600"
                }`}
            >
              GIAI ĐOẠN VẬN HÀNH
            </span>

            {/* Underline */}
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
