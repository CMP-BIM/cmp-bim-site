// 'use client';

// import Image from 'next/image';
// import { useEffect, useRef } from 'react';

// // const logos = [
// //   'ADP.png', 'ASF.png', 'CABINET_MERLIN.png', 'Cazal.jpg', 'CESI.png',
// //   'Cognac_TP.png', 'Disney.png', 'EGIS.png', 'GTM_SUD_OUEST.jpg',
// //   'SGP.png', 'SNCF.png', 'SOLIDEO.png', 'Vinci_contruction.png', 'VOP_Paris_2024.png',
// // ];
// const logos = [
//   'egis.png', 'vinci.png', 'solideo.png', 'adp.png', 'disney.png',
//   'sncf.png', 'cazal.png', 'cesi.png', 'gtm.png', 'cabinet-merlin.png',
//   'sgp.png', 'asf.png', 'dao.png', 'segmentis.png', 'equans.png',
// ];

// export default function PartnerCarousel() {
//   const carouselRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const carousel = carouselRef.current;
//     console.log("carouselRef:", carousel);

//     if (!carousel) return;

//     let scrollAmount = 0;
//     const scrollStep = 1;
//     const maxScroll = carousel.scrollWidth;
//     // const maxScroll = carousel.scrollWidth / 2;

//     const scroll = () => {
//       if (carousel.scrollLeft >= maxScroll) {
//         carousel.scrollLeft = 0;
//         scrollAmount = 0;
//       } else {
//         scrollAmount += scrollStep;
//         carousel.scrollLeft += scrollStep;
//       }
//     };

//     const interval = setInterval(scroll, 20); // Adjust speed here

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="overflow-hidden relative w-full">
//       <div
//         ref={carouselRef}
//         className="flex w-max animate-none whitespace-nowrap gap-10 px-4 py-4"
//         style={{ scrollBehavior: 'smooth' }}
//       >
//         {[...logos, ...logos].map((logo, index) => (
//           <div key={index} className="flex-shrink-0 w-32 h-20 flex items-center justify-center">
//             <Image
//               src={`/logos/${logo}`}
//               alt={`Logo ${logo}`}
//               width={120}
//               height={60}
//               className="object-contain grayscale hover:grayscale-0 transition"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import Image from "next/image";
// import { useEffect, useRef } from "react";

// const logos = [
//   "egis.png", "vinci.png", "solideo.png", "adp.png", "disney.png",
//   "sncf.png", "cazal.png", "cesi.png", "gtm.png", "cabinet-merlin.png",
//   "sgp.png", "asf.png", "dao.png", "segmentis.png", "equans.png",
// ];

// export default function PartnerCarousel() {
//   const [sliderRef] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     slides: {
//       perView: 4,
//       spacing: 16,
//     },
//     renderMode: "performance",
//     drag: true,
//     breakpoints: {
//       "(max-width: 768px)": {
//         slides: { perView: 2, spacing: 12 },
//       },
//       "(max-width: 480px)": {
//         slides: { perView: 1.5, spacing: 10 },
//       },
//     },
//     created(slider) {
//       let interval: NodeJS.Timeout;
//       const start = () =>
//         (interval = setInterval(() => {
//           if (slider) slider.next();
//         }, 2500));
//       const stop = () => clearInterval(interval);

//       slider.container.addEventListener("mouseover", stop);
//       slider.container.addEventListener("mouseout", start);
//       start();
//     },
//   });

//   return (
//     <div ref={sliderRef} className="keen-slider">
//       {logos.map((logo, index) => (
//         <div
//           key={index}
//           className="keen-slider__slide flex justify-center items-center"
//         >
//           <Image
//             src={`/logos/${logo}`}
//             alt={`Logo ${logo}`}
//             width={140}
//             height={80}
//             className="grayscale hover:grayscale-0 transition duration-300 object-contain"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }


"use client";

import Image from "next/image";

const logos = [
  "EGIS.png", "Vinci.png", "SOLIDEO.png", "ADP.png", "Disney.png",
  "SNCF.png", "Cazal.jpg", "CESI.png", "GTM.png", "cabinet-merlin.png",
  "SGP.png", "ASF.png", "dao.png", "segmentis.png", "equans.png",
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

