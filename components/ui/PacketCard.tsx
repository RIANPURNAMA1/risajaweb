"use client";
import { motion } from "framer-motion";

export default function PacketCard() {
  const packages = [
    {
      name: "Basic",
      price: "Rp1.000.000",
      desc: "Landing page sederhana & responsif",
      highlight: false,
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    },
    {
      name: "Professional",
      price: "Rp2.500.000",
      desc: "Website bisnis profesional dengan SEO",
      highlight: true,
      icon: "https://cdn-icons-png.flaticon.com/512/1010/1010396.png",
    },
    {
      name: "Enterprise",
      price: "Rp5.000.000",
      desc: "Sistem web custom sesuai kebutuhan perusahaan",
      highlight: false,
      icon: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
    },
  ];

  // Fungsi untuk membuka WhatsApp dengan pesan
  const handleWhatsapp = (pkgName: string) => {
    const phoneNumber = "6282118364415"; // Ganti dengan nomor WhatsApp Anda
    const text = encodeURIComponent(
      `Halo, saya ingin memilih paket *${pkgName}* dari RianDev.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {packages.map((pkg, i) => (
        <motion.div
          key={pkg.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          className={`relative rounded-3xl p-8 flex flex-col items-center text-center transition-transform duration-300
            ${pkg.highlight 
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-2xl scale-105" 
              : "bg-white text-gray-800 shadow-lg hover:shadow-2xl hover:scale-105"
            }`}
        >
          {pkg.highlight && (
            <div className="absolute -top-4 px-3 py-1 rounded-full bg-yellow-400 text-white text-sm font-semibold">
              POPULER
            </div>
          )}

          {/* Paket Icon */}
          <div className="w-24 h-24 mb-4 flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400 rounded-full shadow-md">
            <img
              src={pkg.icon}
              alt={pkg.name}
              className="w-12 h-12 object-contain"
            />
          </div>

          <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
          <p className={`text-3xl font-extrabold mb-4 ${pkg.highlight ? "text-white" : "text-blue-600"}`}>
            {pkg.price}
          </p>
          <p className={`text-sm mb-6 ${pkg.highlight ? "text-white/90" : "text-gray-600"}`}>
            {pkg.desc}
          </p>

          {/* Tombol CTA */}
          <button
            onClick={() => handleWhatsapp(pkg.name)}
            className={`px-6 py-3 rounded-full cursor-pointer font-semibold w-full transition
              ${pkg.highlight ? "bg-white text-blue-600 hover:bg-white/90" : "bg-blue-600 text-white hover:bg-blue-700"}`}
          >
            Pilih Paket
          </button>
        </motion.div>
      ))}
    </div>
  );
}
