
"use client";

import Image from "next/image";

const logos = [
  "EGIS.png", "Vinci.png", "SOLIDEO.png", "ADP.png", "Disney.png",
  "SNCF.png", "Cazal.jpg", "CESI.png", "GTM.jpg", "cabinet-merlin.png",
  "SGP.png", "ASF.png", "dao.png", "segmentis.png", "equans.png", "Cognac-TP.png", "VOP-Paris-2024",
];

export default function PartnerCarousel() {
  const duplicatedLogos = [...logos, ...logos]; // pour la boucle fluide

  return (
    <div className="overflow-hidden w-full py-4 bg-white">
      <div className="animate-marquee flex whitespace-nowrap gap-16">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 flex items-center justify-center">
            <Image
              src={`/logos/${logo}`}
              alt={`Logo ${logo}`}
              width={140}
              height={80}
              className="grayscale hover:grayscale-0 transition duration-300 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

