"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 py-4">
        <h1 className="text-xl font-bold text-blue-600">CMP BIM</h1>

        {/* Desktop navigation */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium text-sm">
          <li><a href="#accueil" className="hover:text-blue-600">Accueil</a></li>
          <li><a href="#a-propos" className="hover:text-blue-600">À propos</a></li>
          <li><a href="#prestations" className="hover:text-blue-600">Prestations</a></li>
          <li><a href="#realisations" className="hover:text-blue-600">Références</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Hamburger menu */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu mobile"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-6">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium text-base">
            <li><a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a></li>
            <li><a href="#a-propos" onClick={() => setMenuOpen(false)}>À propos</a></li>
            <li><a href="#prestations" onClick={() => setMenuOpen(false)}>Prestations</a></li>
            <li><a href="#realisations" onClick={() => setMenuOpen(false)}>Références</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
