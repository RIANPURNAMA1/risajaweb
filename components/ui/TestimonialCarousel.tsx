"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Rian Purnama",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Next.js benar-benar powerful! Gambar dioptimasi otomatis dan performa situs meningkat pesat.",
  },
  {
    name: "Siti Rahmawati",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Desain lebih cepat dan mudah dengan Tailwind! Carousel ini tampil halus dan elegan di semua perangkat.",
  },
  {
    name: "Andi Saputra",
    role: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
    text: "Integrasi API di Next.js sangat sederhana. Carousel ini memberikan tampilan modern yang profesional.",
  },
  {
    name: "Dewi Lestari",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Gabungan Next.js, Framer Motion, dan Embla sangat membantu membuat UI interaktif dengan performa tinggi.",
  },
  {
    name: "Budi Santoso",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Presentasi tim jadi makin keren dengan carousel ini! Desain bersih dan profesional.",
  },
];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Apa Kata Mereka?
        </motion.h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-gray-600 italic mb-4 text-center">
                    “{t.text}”
                  </p>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {t.name}
                    </h3>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🔘 Navigasi titik bawah */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.slice(0, 3).map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                selectedIndex === i ? "bg-blue-600 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
