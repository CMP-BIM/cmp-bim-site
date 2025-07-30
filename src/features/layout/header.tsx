"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Couleurs adaptatives basées sur le scroll
  const textColor = useTransform(scrollY, [0, 800], ["rgba(255,255,255,0.8)", "rgba(55,65,81,0.8)"]);
  const textColorHover = useTransform(scrollY, [0, 800], ["rgba(255,255,255,1)", "rgba(55,65,81,1)"]);
  const buttonBg = useTransform(scrollY, [0, 800], ["rgba(255,255,255,0.1)", "rgba(59,130,246,0.1)"]);
  const buttonBgHover = useTransform(scrollY, [0, 800], ["rgba(255,255,255,0.2)", "rgba(59,130,246,0.2)"]);

  return (
    <motion.header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          backdropFilter: useTransform(scrollY, [0, 800], ["blur(0px)", "blur(20px)"]),
          backgroundColor: useTransform(scrollY, [0, 800], ["rgba(0,0,0,0)", "rgba(255,255,255,0.1)"]),
          height: useTransform(scrollY, [0, 800], ["80px", "70px"])
        }}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4 h-full">
        {/* Logo moderne */}
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            CMP BIM
          </h1>
        </motion.div>

        {/* Desktop navigation moderne */}
        <ul className="hidden md:flex items-center gap-8">
          {[
            { href: "#accueil", label: "Accueil" },
            { href: "#a-propos", label: "À propos" },
            { href: "#prestations", label: "Prestations" },
            { href: "#realisations", label: "Références" },
            { href: "#contact", label: "Contact" }
          ].map((item) => (
            <li key={item.href}>
              <motion.a
                href={item.href}
                className="relative font-medium text-sm transition-colors group"
                style={{ color: textColor }}
                whileHover={{ y: -2, color: textColorHover.get() }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Hamburger menu moderne */}
        <motion.button
          className="md:hidden p-2 rounded-lg backdrop-blur-sm transition-colors"
          style={{ 
            backgroundColor: buttonBg,
            color: textColor 
          }}
          whileHover={{ backgroundColor: buttonBgHover.get() }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu mobile"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.div>
        </motion.button>
      </nav>

      {/* Mobile dropdown moderne */}
      <motion.div
        initial={{ opacity: 0, y: -20, height: 0 }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          y: menuOpen ? 0 : -20,
          height: menuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-white/20"
      >
        <div className="px-6 py-6">
          <ul className="flex flex-col gap-4">
            {[
              { href: "#accueil", label: "Accueil" },
              { href: "#a-propos", label: "À propos" },
              { href: "#prestations", label: "Prestations" },
              { href: "#realisations", label: "Références" },
              { href: "#contact", label: "Contact" }
            ].map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: menuOpen ? 1 : 0,
                  x: menuOpen ? 0 : -20
                }}
                transition={{
                  duration: 0.3,
                  delay: menuOpen ? index * 0.1 : 0
                }}
              >
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200 border-l-4 border-transparent hover:border-blue-500"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.header>
  );
}
