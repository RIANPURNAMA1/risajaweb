"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    name: "Landing Page",
    desc: "Desain elegan & konversi tinggi untuk promosi bisnis atau produk Anda.",
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
  },
  {
    name: "Company Profile",
    desc: "Bangun citra profesional bisnis Anda dengan website informatif & menarik.",
    icon: "https://cdn-icons-png.flaticon.com/512/1010/1010396.png",
  },
  {
    name: "Web System",
    desc: "Sistem web custom untuk kebutuhan bisnis seperti kasir, inventori, dan lainnya.",
    icon: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, i) => (
        <motion.div
          key={service.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          className="relative rounded-3xl bg-white/80 backdrop-blur-md p-8 flex flex-col items-center text-center shadow-2xl hover:shadow-3xl hover:scale-105 transition-transform duration-300"
        >
          {/* Icon dengan background circle */}
          <div className="w-24 h-24 mb-4 flex items-center justify-center bg-blue-100 rounded-full">
            <Image
              src={service.icon}
              alt={service.name}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>

          {/* Nama layanan */}
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-blue-700">
            {service.name}
          </h3>

          {/* Deskripsi */}
          <p className="text-gray-600 text-sm md:text-base">
            {service.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
