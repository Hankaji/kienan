'use client'
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import YouTubeModal from "@/components/youtube-modal"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function News() {
  const router = useRouter()

  const news = [
    {
      id: 1,
      category: "",
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
      category: "",
      header: "Phóng sự Nhà sáng lập Kiến An Resident",
      desc: "",
      imgSrc: "/bg-new-2.png",
      onClick: () => router.push("https://portal.vtc.gov.vn/chitiet/63200-netviet-stories-23-11-2019.html")
    },
    {
      id: 3,
      category: "30 Tháng 09, 2019",
      header: "Phóng sự Nhà sáng lập Kiến An Resident",
      desc: "",
      imgSrc: "/bg-new-1.jpg",
      onClick: () => router.push("https://thanhnien.vn/chuyen-tu-te-can-tho-co-khach-san-1500-dong-185887938.htm?gidzl=AGqxRlW0_o8d5J9i-1hz8ICICsxa7AjrF4OpRkD9_dGp43i-l1FmSM8TRJky7w1pR11lEpdfE_nvyW_n8G")
    }
  ]

  const newsWithoutImage = [
    {
      id: 1,
      category: "15 Tháng 09, 2019",
      header: "Nhà lưu trú nghĩa tình với người nghèo ở Cần Thơ",
      desc: "",
      onClick: () => router.push("https://cand.com.vn/tag/Kien-An-Resident-260915")

    },
    {
      id: 2,
      category: "",
      header: "\"Khách sạn\" 1.500 đồng/ngày cho người nghèo",
      desc: "Với vật giá ngày càng leo thang nhưng ở TP Cần Thơ có một ngôi nhà cho thuê chỗ ở chuyên phục vụ người vô gia cư, người già, người nghèo, người khuyết tật… với giá chỉ 1.500 đồng/ngày.",
      onClick: () => router.push("https://nld.com.vn/ban-doc/khach-san-1500-dong-ngay-cho-nguoi-ngheo-20190901091717712.htm?gidzl=M19dNk1EVGrM2cvSu5Hu0rC8R57zLofLJ5niKVe2VrH32cG1fLXnKH87CWIbL25J70em13c0QY9cwa5p3W")
    }
  ]

  return (
    <>
      <HeroSection title="Tin Tức Nổi Bật" desc="Cập nhật các thông tin mới nhất từ Kiến An" />
      <section className="pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-20">
            {news.map(news => {
              return (
                <div key={news.id} className="pl-6 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="flex flex-col gap-4 items-start">
                      <div className="flex items-center gap-3">
                        <span className="text-[#FF6B35] font-bold text-sm">{news.category}</span>
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
                <div key={news.id} className="pl-6 py-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[#FF6B35] font-bold text-sm">{news.category}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">{news.header}</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {news.desc}
                    </p>
                    <Button variant="link">Xem thêm <ChevronRight /> </Button>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>
    </>
  )
}  
