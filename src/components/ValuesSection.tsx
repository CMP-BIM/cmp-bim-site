

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
