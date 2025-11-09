"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const whatsappNumber = "6282118364415"; // Ganti dengan nomor WA kamu
  const message = "Halo! Saya ingin menghubungi Anda."; // Pesan default

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:bg-green-600 transition-all z-50"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>
  );
}
