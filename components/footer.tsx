import Link from "next/link"
import Image from "next/image"
import { Facebook, Mail, MapPin, Phone, Youtube } from "lucide-react"

export default function Footer() {
  const companyLinks = [
    { label: "Trang chủ", href: "/" },
    { label: "Về chúng tôi", href: "/about" },
    { label: "Tin tức", href: "/news" },
    { label: "Tuyển dụng", href: "/recruitment" },
    { label: "Chính sách", href: "#" },
  ]

  const serviceLinks = [
    { label: "Quản lý vận hành Bất động sản", href: "#" },
    { label: "Quản trị nguồn nhân lực", href: "#" },
    { label: "Giải pháp Công nghệ", href: "#" },
  ]

  return (
    <footer className="bg-[#F2F2F2] text-gray-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Column 1: Contact Info */}
          <div className="space-y-6">
            <Link className="inline-flex items-center gap-2" href="/">
              <Image
                alt="Kiến An Logo"
                width={120}
                height={40}
                className="object-contain"
                src="/logo.png"
              />
            </Link>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-center">
                <Phone className="w-[18px] h-[18px] text-gray-500 shrink-0" />
                <a href="tel:0918449598" className="hover:text-orange-500 transition-colors">
                  0918449598
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-[18px] h-[18px] text-gray-500 shrink-0" />
                <a href="mailto:Kienansystem@gmail.com" className="hover:text-orange-500 transition-colors">
                  Kienansystem@gmail.com
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin className="w-[18px] h-[18px] text-gray-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  VPLT Số T3 - 13.08 Sảnh SOHO - Heritage West Lake
                  <br />
                  677 Lạc Long Quân, Phường Tây Hồ, Hà Nội, Việt Nam.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-gray-900">Công ty</h4>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-gray-900">Dịch vụ</h4>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-6">
            <h4 className="font-bold text-gray-900">Theo dõi chúng tôi</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/kienanjsc/?locale=vi_VN"
                className="text-gray-500 hover:text-orange-500 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <Link
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
