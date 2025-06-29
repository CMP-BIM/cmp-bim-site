'use client';

import { useState } from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  folder: string;
  description: string;
  images: string[];
};

export default function RealisationCard({ title, folder, description, images }: Props) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const closeModal = () => {
    setOpen(false);
    setActiveIndex(0);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative bg-white shadow rounded-lg overflow-hidden">
      <Image
        src={`/Images_projets/${folder}/${images[0]}`}
        alt={title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">{description}</p>
        <button
          onClick={() => setOpen(true)}
          className="mt-4 inline-block text-blue-600 font-medium hover:underline"
        >
          Voir +
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-3xl relative">
            <Image
              src={`/Images_projets/${folder}/${images[activeIndex]}`}
              alt={`${title} ${activeIndex}`}
              width={800}
              height={600}
              className="w-full h-80 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-700 mt-2">{description}</p>
              <div className="flex justify-between mt-4">
                <button onClick={prevImage} className="text-blue-600 hover:underline">← Précédent</button>
                <button onClick={nextImage} className="text-blue-600 hover:underline">Suivant →</button>
              </div>
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-gray-800 rounded-full px-3 py-1 text-sm hover:bg-red-500"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
