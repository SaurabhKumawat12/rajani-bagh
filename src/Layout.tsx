// https://wa.aisensy.com/aaasel
import React, { useState, useEffect } from "react";
import { Menu, X, Instagram, Youtube } from "lucide-react";
import { Icon } from "@iconify/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const btns = document.querySelectorAll(".track-subscribe-btn");
    const handler = () => window.fbq && window.fbq("track", "Subscribe");

    btns.forEach((btn) => btn.addEventListener("click", handler));
    return () =>
      btns.forEach((btn) => btn.removeEventListener("click", handler));
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#121A25]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Left – Logo */}
        <a href="/" className="flex items-center space-x-3 group">
          <h1 className="text-xl md:text-2xl font-extrabold text-[#C7A055] tracking-wide group-hover:opacity-80 transition">
            Rajani Bagh
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {[
            { name: "About", id: "#about" },
            { name: "Testimonials", id: "#testimonials" },
            { name: "FAQ", id: "#faq" },
          ].map((item) => (
            <a
              key={item.id}
              href={item.id}
              onClick={(e) => handleScroll(e, item.id)}
              className="relative text-white/90 hover:text-[#C7A055] font-medium transition group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C7A055] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}

          {/* WhatsApp CTA */}
          <a
            href="https://wa.aisensy.com/aaasel"
            target="_blank"
            rel="noopener noreferrer"
            className="track-subscribe-btn bg-[#25D366] hover:bg-[#20C157] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-green-400/30 transition-transform hover:scale-105 flex items-center gap-2"
          >
            <Icon icon="mdi:whatsapp" width="20" />
            Start Your Journey
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#C7A055]"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#121A25]/95 backdrop-blur-xl shadow-xl px-6 py-6 space-y-6 animate-slideDown border-t border-white/10">
          {[
            { name: "About", id: "#about" },
            { name: "Testimonials", id: "#testimonials" },
            { name: "FAQ", id: "#faq" },
          ].map((item) => (
            <a
              key={item.id}
              href={item.id}
              onClick={(e) => handleScroll(e, item.id)}
              className="block text-white/90 hover:text-[#C7A055] font-medium transition"
            >
              {item.name}
            </a>
          ))}

          <a
            href="https://wa.aisensy.com/aaasel"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20C157] text-white py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            <Icon icon="mdi:whatsapp" width="22" />
            Begin on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-[#0A0F1A] text-white py-16 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#182432] via-transparent to-transparent opacity-80"></div>
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#C7A055]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C7A055]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
        
        {/* Logo */}
        <img
          src="/assets/images/stravix.png"
          alt="StraviX Logo"
          className="w-40 md:w-48 mx-auto mb-6 opacity-90 hover:opacity-100 transition"
        />

        <h3 className="text-xl md:text-2xl font-bold text-[#C7A055] mb-6">
          Connect with Rajani Bagh
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="p-3 rounded-full bg-gradient-to-br from-[#E1306C] to-[#F56040] hover:scale-110 transition shadow-lg"
          >
            <Instagram className="w-6 h-6 text-white" />
          </a>

          <a
            href="https://wa.aisensy.com/aaasel"
            target="_blank"
            className="p-3 rounded-full bg-[#25D366] hover:scale-110 transition shadow-lg"
          >
            <Icon icon="mdi:whatsapp" width="26" className="text-white" />
          </a>
        </div>

        {/* Footer Bottom */}
        <p className="text-sm text-gray-400">
          © 2025 Rajani Bagh | All Rights Reserved.
        </p>
        <p className="text-sm text-[#C7A055] font-semibold mt-1 tracking-wide">
          Built with ❤️ by <span className="text-white">StraviX</span>
        </p>
      </div>
    </footer>
  );
};

export { Header, Footer };
