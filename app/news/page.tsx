import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function News() {
  const news = [
    {
      id: 1,
      category: "",
      header: "\"Khách sạn VIP\" cho người kém may mắn",
      desc: "Hơn cả một khách sạn thiện nguyện, có thể gọi đây là một góc nhỏ yêu thương, nơi những người kém may mắn được chia sẻ cả vật chất lẫn tinh thần."
    },
    {
      id: 2,
      category: "",
      header: "Phóng sự Nhà sáng lập Kiến An Resident",
      desc: ""
    },
    {
      id: 3,
      category: "30 Tháng 09, 2019",
      header: "Phóng sự Nhà sáng lập Kiến An Resident",
      desc: ""
    }
  ]

  const newsWithoutImage = [
    {
      id: 1,
      category: "15 Tháng 09, 2019",
      header: "Nhà lưu trú nghĩa tình với người nghèo ở Cần Thơ",
      desc: ""
    },
    {
      id: 2,
      category: "",
      header: "\"Khách sạn\" 1.500 đồng/ngày cho người nghèo",
      desc: "Với vật giá ngày càng leo thang nhưng ở TP Cần Thơ có một ngôi nhà cho thuê chỗ ở chuyên phục vụ người vô gia cư, người già, người nghèo, người khuyết tật… với giá chỉ 1.500 đồng/ngày."
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
                    {/* <Image alt="&quot;Khách sạn VIP&quot; cho người kém may mắn" loading="lazy" width="600" height="400" decoding="async" data-nimg="1" className="w-full rounded-lg shadow-md object-cover" src="/bg-new-3.jpg?t=1" /> */}
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
