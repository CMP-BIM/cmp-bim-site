'use client';

import { useState } from "react";

export default function CopyEmailButton() {
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@cmp-bim.com").then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Cache la notif après 3s
    });
  };

  return (
    <div className="relative">
      {/* <button
        onClick={handleCopyEmail}
        className="bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition-all"
      > */}
        <button
        onClick={handleCopyEmail}
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200"
      >
        📋 Copier l’email
      </button>

      {showToast && (
        // <div className="absolute left-1/2 -translate-x-1/2 mt-4 bg-gray-900 text-white text-sm px-4 py-2 rounded shadow-md animate-fade-in-out z-50">
        <div className="absolute left-1/2 -translate-x-1/2 mt-4 bg-black text-white text-sm px-4 py-2 rounded shadow-md animate-fade-in-out z-50">
          Email copié dans le presse-papiers !
        </div>
      )}

      {/* Petite animation fade (optionnelle) */}
      <style jsx>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(10px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        .animate-fade-in-out {
          animation: fade-in-out 3s ease forwards;
        }
      `}</style>
    </div>
  );
}
