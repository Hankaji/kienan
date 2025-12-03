import Image from "next/image"

interface HeroSectionProps {
  header?: string
  title: string
  desc?: string
  noVideo?: boolean
}

export function HeroSection({ header, title, desc, noVideo }: HeroSectionProps) {
  return (
    <section className="h-96 flex items-center justify-center relative overflow-hidden">
      {/* Background video */}
      {!noVideo && <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.mp4"
      />}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div
          className="space-y-4"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
            {/* Dịch Vụ Cung Cấp */}
            {header}
          </span>
          <h1 className="text-5xl sm:text-6xl font-playfair font-bold text-white">
            {/* Dịch Vụ Cung Cấp */}
            {title}
          </h1>
          <p className="text-lg text-white/90 px-4">
            {/* Chuyên nghiệp tận tâm - nâng tầm giá trị */}
            {desc}
          </p>
        </div>
      </div>
    </section>
  )
}



