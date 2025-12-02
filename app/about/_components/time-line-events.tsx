import ScrollReveal from '@/components/scroll-reveal';
import { ArrowUp, MapPin } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  location: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2025",
    title: "Phát triển hoạt động kinh doanh tại Hà Nội",
    location: "VPLT Số T3 - 13.08 Sảnh SOHO - Heritage West Lake, 677 Lạc Long Quân, Phường Tây Hồ, Hà Nội.",
    description: "Hoạt động tại thị trường Hà Nội với dịch vụ Quản lý vận hành..."
  },
  {
    year: "2020",
    title: "Hoạt động đầu tư",
    location: "Số 7 Ngô Văn Năm, Phường Bến Nghé, Quận 1, TP HCM.",
    description: "Hoạt động đầu tư khách sạn, căn hộ dịch vụ tại Quận 1 và Phú Nhuận TPHCM thông qua công ty thành viên Oriental ART HOTEL."
  },
  {
    year: "2019",
    title: "Mở rộng Chi nhánh Cần Thơ",
    location: "Thành lập chi nhánh Cần Thơ.",
    description: "Hoạt động lĩnh vực đầu tư khách sạn, lưu trú và dịch vụ du lịch."
  },
  {
    year: "2018",
    title: "Thành lập tại TP.HCM",
    location: "166 Nguyễn Công Trứ, Phường Nguyễn Thái Bình, Quận 1, TP HCM.",
    description: "Hoạt động lĩnh vực cho thuê tòa nhà văn phòng, mặt bằng kinh doanh và kho bãi."
  }
];

export default function HistoryTimeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lịch sử hình thành và phát triển
          </h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative pt-4">

          {/* Vertical Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2">
            <ArrowUp className="absolute -top-4 left-1/2 -translate-x-1/2 text-orange-500 w-8 h-8 bg-gray-50" />
          </div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              // Even index (0, 2) = Right Side (in desktop view)
              // Odd index (1, 3) = Left Side (in desktop view)
              const isRightSide = index % 2 === 0;

              return (
                <ScrollReveal key={index}>
                  <div
                    className={`relative flex flex-col md:flex-row gap-8 ${isRightSide ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Central Dot Marker */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 mt-1.5 z-10"></div>

                    {/* Content Card */}
                    <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                      <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${isRightSide ? 'md:text-left' : 'md:text-right'}`}>

                        {/* Year Badge */}
                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-bold rounded-full mb-3">
                          {event.year}
                        </span>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h3>

                        {/* Location / Address */}
                        <div className={`flex items-start gap-2 text-gray-600 text-sm mb-2 justify-start ${isRightSide ? 'md:justify-start' : 'md:justify-end'}`}>
                          {/* Icon logic: For right-aligned text (Left side cards), text comes before icon visually, or we keep icon left? 
                            The original design had subtle shifts. Here we keep it simple: Icon always next to text. */}
                          <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>{event.location}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3 mt-3">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Empty Spacer for the other side of the timeline */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>

                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
