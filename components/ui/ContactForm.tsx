"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "6282118364415"; // WhatsApp internasional (62)
    const text = encodeURIComponent(
      `Halo, saya ${name} (${email}) ingin mengirim pesan:\n\n${message}`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6" id="contact">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Form Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Hubungi Kami</h2>
          <p className="text-gray-600 mb-6">
            Isi form ini dan kami akan segera menghubungi Anda melalui WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Pesan Anda"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />

            <button
              type="submit"
              className="w-[200px] bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Kirim Pesan
            </button>
          </form>
        </motion.div>

        {/* Map Lokasi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.437099537633!2d106.90533441477236!3d-6.374682695337373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb0239dfbd0f%3A0xa1fa7c9f0b27c3d4!2sYour%20Location!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            className="min-h-[400px] w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
