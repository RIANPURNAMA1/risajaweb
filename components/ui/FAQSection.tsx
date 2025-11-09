"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "Apa layanan utama yang kami tawarkan?", answer: "Kami menyediakan layanan pengembangan website, aplikasi mobile, dan sistem berbasis AI." },
  { question: "Apakah bisa konsultasi gratis?", answer: "Ya, Anda bisa melakukan konsultasi awal secara gratis melalui form kontak kami." },
  { question: "Bagaimana sistem pembayarannya?", answer: "Kami mendukung sistem pembayaran bertahap dengan kontrak kerja yang transparan." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Pertanyaan yang Sering Diajukan</h2>
        <div className="space-y-6 text-left">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-lg font-semibold text-gray-800"
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2"
                >
                  <ChevronDown size={24} />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-600 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
