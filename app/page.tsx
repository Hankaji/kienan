'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import YouTubeModal from "@/components/youtube-modal";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Playfair } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["vietnamese", "latin"]
})

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col">
        {/* Video */}
        {/* <Skeleton className="w-dvw h-dvh bg-red-500" /> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="inset-0 w-dvw h-dvh object-cover"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen-Recording-2023-11-23-at-11.06.19-Ktsc7opohTZXD1skm3MNVcihII7xI4.mp4"
        />

        {/* About us */}
        <AboutUsCard />

        {/* Services */}
        <section className="py-20 bg-white">
          <OurServices />
        </section>

        {/* News */}
        <section className="py-20 bg-white">
          <News />
        </section>
      </main>
    </div>
  );
}

function AboutUsCard() {
  return (
    <section className="relative py-20 min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bg-about-us.jpg"
            alt="Background About Us"
            fill
            className="object-cover object-right"
            priority
          />
        </div>

        {/* Gradient overlay left-to-right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-lg">

            {/* Header Section */}
            <div>
              <span className={cn("inline-block px-4 py-2 border border-slate-400 rounded-full text-slate-600 font-medium text-sm mb-4")}>
                VỀ CHÚNG TÔI
              </span>
              <h2 className={cn(playfair.className, "text-2xl lg:text-3xl font-playfair font-bold text-slate-900 mb-2")}>
                CÔNG TY CỔ PHẦN ĐẦU TƯ PHÁT TRIỂN DỊCH VỤ
              </h2>
              <h2 className={cn(playfair.className, "text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6")}>
                KIẾN AN
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                <strong>Kiến An Service</strong> là đơn vị cung cấp giải pháp toàn diện
                cho khách hàng, chuẩn mực trong lĩnh vực quản lý, vận hành bất động sản,
                quản lý khách sạn và lưu trú.
              </p>
              <p>
                Kiến An cam kết là đơn vị có năng lực vận hành tiên phong, luôn sẵn sàng
                cung cấp các dịch vụ tối ưu, thuận tiện và hài hòa cho cộng đồng cư dân.
              </p>

              <div className="border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded">
                <p className="text-primary font-semibold italic">
                  {"\""}Không có 2 tài sản, khách hàng nào giống nhau{"\""}
                </p>
              </div>

              <p className="text-sm">
                Đó là lý do chúng tôi cung cấp các giải pháp quản lý, vận hành phù hợp
                để đáp ứng nhu cầu riêng của quý vị
              </p>
            </div>

            {/* Action Button */}
            <Button className="">
              Tìm hiểu thêm
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="w-full" />
        </div >
      </div >
    </section>
  )
}

function OurServices() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="mb-10">
        <span className="inline-block px-4 py-2 border border-gray-400 rounded-full text-gray-600 font-medium text-xs uppercase tracking-widest">Dịch vụ cung cấp</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="space-y-5 text-gray-700 text-base leading-loose">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Dịch Vụ Quản Lý Vận Hành Nhà Chung Cư</h2>
            <p>Chúng tôi xây dựng quy chuẩn dịch vụ dựa trên một tinh thần: <strong className="text-gray-900">{"\""}Tòa nhà vận hành ổn định, Tài chính minh bạch, dịch vụ đáng sống{"\""}</strong></p>
            <p>Chúng tôi tiên phong cung cấp những giải pháp chuyên nghiệp nhưng gần gũi. Tất cả các nhân viên đều làm việc theo quy trình chặt chẽ và thái độ tận tâm.</p>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative h-72 lg:h-[420px] rounded-lg overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-all duration-300">
          <Image alt="Dịch vụ quản lý tòa nhà chuyên nghiệp" loading="lazy" width={600} height={400} decoding="async" data-nimg="1" className="w-full h-full object-cover" src="/images/services-building.jpg" />
        </div>
      </div>
    </div>
  )
}

function News() {
  const router = useRouter()

  const news = [
    {
      id: 1,
      category: "TIN CỘNG ĐỒNG",
      year: 2024,
      header: "\"Khách sạn VIP\" cho người kém may mắn",
      desc: "Hơn cả một khách sạn thiện nguyện, có thể gọi đây là một góc nhỏ yêu thương, nơi những người kém may mắn được chia sẻ cả vật chất lẫn tinh thần.",
      imgSrc: "/bg-new-3.jpg",
      customerRender: <YouTubeModal
        trigger={({ open }) => {
          return <Button variant="link" onClick={open}>Xem thêm <ChevronRight /> </Button>
        }}
      />
    },
    {
      id: 2,
      category: "TIN CỘNG ĐỒNG",
      year: 2024,
      header: "Phóng sự Nhà sáng lập Kiến An Resident",
      desc: "",
      imgSrc: "/bg-new-2.png",
      onClick: () => router.push("https://portal.vtc.gov.vn/chitiet/63200-netviet-stories-23-11-2019.html")
    }
  ]

  const newsWithoutImage = [
    {
      id: 1,
      category: "VIỆN KINH TẾ & VĂN HÓA",
      year: 2020,
      header: "Kiến An được vinh danh đề cử vào danh sách TOP 20 dịch vụ chất lượng vàng vì quyền lợi người tiêu dùng năm 2020",
      desc: "Kiến An vinh dự được VIỆN KINH TẾ & VĂN HÓA tổ chức đề cử vào danh sách TOP 20 dịch vụ chất lượng vàng vì quyền lợi người tiêu dùng năm 2020. Đây là sự ghi nhận cho những nỗ lực không ngừng của Kiến An trong việc cung cấp dịch vụ quản lý tòa nhà chất lượng cao."
    },
    {
      id: 2,
      category: "VIỆN KINH TẾ & VĂN HÓA",
      year: 2020,
      header: "CEO Kiến An - Nguyễn Thành Nguyên được đề cử TOP 10 doanh nhân trẻ xuất sắc Đất Việt năm 2020",
      desc: "Ông Nguyễn Thành Nguyên - CEO Kiến An vinh dự được đề cử vào danh sách TOP 10 doanh nhân trẻ xuất sắc Đất Việt năm 2020. Đây là sự ghi nhận cho tầm nhìn chiến lược và khả năng lãnh đạo xuất sắc trong việc phát triển công ty."
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-16">Tin tức nổi bật</h2>

      <div className="space-y-12">
        {news.map(news => {
          return (
            <div key={news.id} className="border-l-4 border-[#FF6B35] pl-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="flex flex-col gap-4 items-start">
                  <div className="flex items-center gap-3">
                    <span className="text-[#FF6B35] font-bold text-sm">{news.category}</span>
                    <span className="text-gray-500 text-sm">{news.year}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">{news.header}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {news.desc}
                  </p>
                  {news.customerRender ? news.customerRender : <Button variant="link" onClick={news.onClick}>Xem thêm <ChevronRight /> </Button>}
                </div>
                <Image alt="&quot;Khách sạn VIP&quot; cho người kém may mắn" loading="lazy"
                  width={600} height={400}
                  decoding="async" data-nimg="1"
                  className="w-full rounded-lg shadow-md object-cover" src={news.imgSrc} />
              </div>
            </div>
          )
        })}
        {newsWithoutImage.map(news => {
          return (
            <div key={news.id} className="border-l-4 border-[#FF6B35] pl-6 py-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#FF6B35] font-bold text-sm">{news.category}</span>
                  <span className="text-gray-500 text-sm">{news.year}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">{news.header}</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {news.desc}
                </p>
                {/* <Button variant="link">Xem thêm <ChevronRight /> </Button> */}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
