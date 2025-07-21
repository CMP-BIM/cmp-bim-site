// 'use client';
// import { useEffect, useState } from 'react';

// const values = [
//   { label: "Engagement", desc: "Nous nous impliquons pleinement dans chaque mission." },
//   { label: "Réactivité", desc: "Nos réponses sont rapides et adaptées aux besoins du projet." },
//   { label: "Adaptation", desc: "Chaque client est unique, nous adaptons nos méthodes." },
//   { label: "Autonomie", desc: "Notre équipe travaille en toute confiance et efficacité." },
//   { label: "Pédagogie", desc: "Nous partageons notre savoir pour faire progresser vos équipes." },
//   { label: "Transparence", desc: "Des échanges clairs, des méthodes lisibles, des livrables fiables." },
// ];

// export default function ValuesSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [previousIndex, setPreviousIndex] = useState<number | null>(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPreviousIndex(currentIndex);
//       setCurrentIndex((prev) => (prev + 1) % values.length);
//     }, 4000); // chaque 4s
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <section id="valeurs" className="py-24 px-4 sm:px-0 max-w-4xl mx-auto text-center relative overflow-hidden">
//       <h2 className="text-2xl font-semibold text-gray-900 mb-12">Nos valeurs</h2>
//       <div className="relative h-48 sm:h-56 md:h-64">
//         {/* Ancienne valeur (en sortie) */}
//         {previousIndex !== null && (
//           <div
//             key={`prev-${previousIndex}`}
//             className="absolute inset-0 flex flex-col justify-center items-center animate-fade-out text-center pointer-events-none"
//           >
//             <p className="text-xl font-semibold text-blue-600">{values[previousIndex].label}</p>
//             <p className="text-sm text-gray-600 mt-1 max-w-md">{values[previousIndex].desc}</p>
//           </div>
//         )}

//         {/* Nouvelle valeur (en entrée) */}
//         <div
//           key={`current-${currentIndex}`}
//           className="absolute inset-0 flex flex-col justify-center items-center animate-fade-in text-center pointer-events-none"
//         >
//           <p className="text-xl font-semibold text-blue-600">{values[currentIndex].label}</p>
//           <p className="text-sm text-gray-600 mt-1 max-w-md">{values[currentIndex].desc}</p>
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client';
// import { useEffect, useState } from 'react';

// const values = [
//   { label: "Engagement", desc: "Nous nous impliquons pleinement dans chaque mission." },
//   { label: "Réactivité", desc: "Nos réponses sont rapides et adaptées aux besoins du projet." },
//   { label: "Adaptation", desc: "Chaque client est unique, nous adaptons nos méthodes." },
//   { label: "Autonomie", desc: "Notre équipe travaille en toute confiance et efficacité." },
//   { label: "Pédagogie", desc: "Nous partageons notre savoir pour faire progresser vos équipes." },
//   { label: "Transparence", desc: "Des échanges clairs, des méthodes lisibles, des livrables fiables." },
// ];

// export default function ValuesSection() {
//   const [visibleIndex, setVisibleIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setVisibleIndex((prev) => (prev + 1) % values.length);
//     }, 4000); // 4s par valeur
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="valeurs" className="py-20 px-4 sm:px-0 max-w-4xl mx-auto text-center relative overflow-hidden">
//       <h2 className="text-2xl font-semibold text-gray-900 mb-12">Nos valeurs</h2>

//       <div className="relative h-48 sm:h-56 md:h-64">
//         {values.map((value, index) => {
//           const isCurrent = index === visibleIndex;
//           const isNext = index === (visibleIndex + 1) % values.length;

//           return (
//             <div
//               key={index}
//               className={`
//                 absolute inset-0 flex flex-col items-center justify-center transition-all duration-[2000ms] ease-in-out
//                 ${isCurrent ? 'opacity-100 scale-100 z-20' : isNext ? 'opacity-30 scale-75 z-10' : 'opacity-0 scale-50 z-0'}
//               `}
//             >
//               <p className="text-2xl font-bold text-blue-600">{value.label}</p>
//               <p className="text-base text-gray-600 mt-2">{value.desc}</p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

'use client';
import { useEffect, useState } from 'react';

const values = [
  { label: "Engagement", desc: "Nous nous impliquons pleinement dans chaque mission." },
  { label: "Réactivité", desc: "Nos réponses sont rapides et adaptées aux besoins du projet." },
  { label: "Adaptation", desc: "Chaque client est unique, nous adaptons nos méthodes." },
  { label: "Autonomie", desc: "Notre équipe travaille en toute confiance et efficacité." },
  { label: "Pédagogie", desc: "Nous partageons notre savoir pour faire progresser vos équipes." },
  { label: "Transparence", desc: "Des échanges clairs, des méthodes lisibles, des livrables fiables." },
];

export default function ValuesSection() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // lance disparition
      setTimeout(() => {
        setVisibleIndex((prev) => (prev + 1) % values.length); // change valeur
        setFade(true); // réapparition
      }, 500); // temps de fade-out
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="valeurs" className="py-20 px-4 sm:px-0 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-semibold text-gray-900 mb-12">Nos valeurs</h2>

      <div className="transition-all duration-500 ease-in-out">
        <div className={`transition-all duration-500 ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <p className="text-3xl font-bold text-blue-600">{values[visibleIndex].label}</p>
          <p className="text-lg text-gray-600 mt-3">{values[visibleIndex].desc}</p>
        </div>
      </div>
    </section>
  );
}
