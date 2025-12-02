import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { HeroSection } from '@/components/hero-section';
import ContactForm from './_components/contact-form';
import ScrollReveal from '@/components/scroll-reveal';

export default function Recruitment() {
  return (
    <>
      <HeroSection title="Liên Hệ Chúng Tôi" desc="Chúng tôi luôn sẵn sàng lắng nghe bạn" />
      <ContactGrid />
    </>
  )
}

interface ContactItem {
  icon: React.ElementType;
  title: string;
  content: string;
}

const contactData: ContactItem[] = [
  {
    icon: Phone,
    title: "Điện Thoại",
    content: "0918449598",
  },
  {
    icon: Mail,
    title: "Email",
    content: "Kienansystem@gmail.com",
  },
  {
    icon: MapPin,
    title: "Địa Chỉ",
    content: "VPLT Số T3 - 13.08 Sảnh SOHO - Heritage West Lake, 677 Lạc Long Quân, Phường Tây Hồ, Hà Nội",
  },
];

function ContactGrid() {
  return (
    <section className='pt-20 pb-20'>
      <div className='max-w-4xl mx-auto px-4'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactData.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                key={index}
                className="text-center h-full p-6 border border-border rounded-xl hover:shadow-lg transition-shadow bg-white"
              >
                {/* Icon Container */}
                <div className="mb-4 flex justify-center text-primary">
                  <item.icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="font-bold mb-2 text-gray-900">
                  {item.title}
                </h3>

                {/* Content */}
                <p className="text-primary text-sm font-medium">
                  {item.content}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <ContactForm />
        </ScrollReveal>
      </div>
    </section>
  );
};

