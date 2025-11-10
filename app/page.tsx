"use client";
import CTASection from "@/components/ui/CTASection";
import FAQSection from "@/components/ui/FAQSection";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Navbar from "@/components/ui/Navbar";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import JoinPartnerSection from "@/components/ui/JoinPartnerSection";
import { motion } from "framer-motion";
import Image from "next/image";
import ServiceCards from "@/components/ui/ServiceCards";
import HeroSection from "@/components/ui/HeroSection";
import PacketCard from "@/components/ui/PacketCard";
import Footer from "@/components/ui/Footer";
import ContactForm from "@/components/ui/ContactForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white text-gray-800">
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* Services Section */}
      <section className="w-full max-w-6xl px-6 py-20 text-center" id="features">
        <h2 className="text-3xl font-bold mb-6">Layanan Pembuatan Website</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Nikmati berbagai pilihan layanan mulai dari landing page, company profile, hingga sistem berbasis web yang disesuaikan dengan kebutuhan Anda.
        </p>
        <ServiceCards />
      </section>

      <JoinPartnerSection />

      {/* Pricing Section */}
      <section className="w-full max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Paket Harga Terjangkau</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Kami menawarkan berbagai paket harga sesuai kebutuhan Anda, mulai dari website personal hingga bisnis berskala besar.
        </p>
        <PacketCard />
        <TestimonialCarousel />
      </section>
      <section className="w-full">
        <CTASection />
        <FAQSection />
        <ContactForm />
        <FloatingWhatsApp />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
