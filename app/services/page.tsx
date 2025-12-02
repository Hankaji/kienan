'use client'
import { HeroSection } from "@/components/hero-section";
import ApartmentmanagementSection from "./_components/apartment-management-section";
import PhasesSection from "./_components/phase-section";

export default function Services() {
  return (
    <>
      <HeroSection title="Dịch Vụ Cung Cấp" desc="Chuyên nghiệp tận tâm - nâng tầm giá trị" />
      <ApartmentmanagementSection />
      <PhasesSection />
    </>
  )
}



