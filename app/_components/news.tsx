'use client'
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
    },
    {
      id: 3,
      category: "TIN CỘNG ĐỒNG",
      year: 2019,
      header: "\"Khách sạn\" 1.500 đồng ở Cần Thơ",
      desc: "\"Khách sạn\" cho những hoàn cảnh khó khăn ở quận Ninh Kiều, Thành phố Cần Thơ",
      imgSrc: "/bg-news-5.png",
      customerRender: <YouTubeModal
        videoId="2OET0zDrT6o"
        trigger={({ open }) => {
          return <Button variant="link" onClick={open}>Xem thêm <ChevronRight /> </Button>
        }}
      />
    },
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
    <section className="py-20 bg-white">

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
    </section>
  )
}
