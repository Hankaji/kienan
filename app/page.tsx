'use client'
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Playfair } from "next/font/google";
import Image from "next/image";
import News from "./_components/news";

const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["vietnamese", "latin"]
})

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="inset-0 w-dvw h-dvh object-cover"
          src="/video.mp4"
        />

        <AboutUsCard />

        <OurServices />

        <News />
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
    <section className="py-20 bg-white">
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
    </section>
  )
}

