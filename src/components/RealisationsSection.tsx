'use client';
import RealisationCard from './RealisationCard';

const realisationList = [
  {
    title: "Village des Athlètes (Maquettes 3D)",
    folder: "Village_des_Athletes_-_VOP",
    description: "Modélisation, coordination phase étude et intégration attributaire. Evaluation des offres, coordination des maquettes phase EXE et constitution DOE BIM.",
    images: [
      'Annotation_2025-05-16 _1.png', 'Annotation_2025-05-16_2.png', 'Annotation_2025-05-16_3.png',
      'Annotation_2025-05-16_4.png', 'Annotation_2025-05-16_5.png', 'Annotation_2025-05-16_6.png',
      'Annotation_2025-05-16_7.png', 'Annotation_2025-05-16_8.png', 'Annotation_2025-05-16_9.png',
      'Annotation_2025-05-16_10.png', 'Annotation_2025-05-16_11.png', 'vop_attributs_1.png', 'vop_attributs_2.png'
    ]
  },
  {
    title: "Autoroute A680",
    folder: "A680",
    description: "Modélisation, coordination et intégration attributaire pour le projet autoroutier A680.",
    images: ['5.png','4.png', '3.png', '1.png', '6.png','2.png']
  },
  {
    title: "Terminal 4 – Aéroport de Paris",
    folder: "ADP_-_T4",
    description: "Management BIM, production des maquettes par métier et coordination générale.",
    images: ['Annotation_2025-05-16_2.png','Annotation_2025-05-16_4.png', 'Annotation_2025-05-16_1.png',   'Annotation_2025-05-16_5.png', 'Annotation_2025-05-16_3.png',]
  },
  {
    title: "Elancourt – Village Olympique",
    folder: "Elancourt_-_VOP",
    description: "Coordination technique et modélisation du site d'Elancourt en fonction des phases projets (projet et héritage).",
    images: ['elancourt 1.png','elancourt 4.png', 'elancourt 5.png','elancourt 8.png', 'elancourt 10.png', 'elancourt 9.png', 'elancourt 2.png',  'elancourt 7.png','elancourt 6.png', 
        // 'elancourt 3.png',  
       ]
  },
  {
    title: "Gare de Villeneuve Saint Georges - Villeneuve DEMAIN",
    folder: "VILLENEUVE_DEMAIN",
    description: "Modélisation et coordination à l’échelle de l’aménagement urbain, avec intégration des données attributaires conformément à la convention BIM du projet.",
    images: ['Annotation_4.png', 'Annotation_1.png', 'Annotation_5.png','Annotation_6.png','Annotation_3.png',  'Annotation_2.png'   ]
  },
  {
    title: "Quartier Baillet",
    folder: "QUERTIER_BAILLET",
    description: "Management BIM, modélisation, coordination et intégration attributaire.",
    images: [ 'Annotation_2025-05-17_4.png', 'Annotation_2025-05-17_5.png', 'Annotation_2025-05-17_6.png', 'Annotation_2025-05-17_7.png',  'Annotation_2025-05-17_2.png', 'Annotation_2025-05-17_1.png', 'Annotation_2025-05-17_8.png',   
      //  'Annotation_2025-05-17_3.png',  'Annotation_2025-05-17_9.png'
      ]
  },
  {
    title: "Village des Athlètes (Plans 2D)",
    folder: "Village_des_Athletes_-_VOP_2D",
    description: "Production de plans 2D : synthèse réseaux, nivellement, coupe, giration, profil en long…",
    images: [  'VA_2d-1.png','VA_2d-9.png', 'VA_2d-5.png','VA_2d-6.png', 'VA_2d-7.png','VA_2d-3.png',  'VA_2d-8.png',  'VA_2d-4.png', 'VA_2d-2.png']
  }
];

export default function RealisationsSection() {
  return (
    <section id="realisations" className="px-4 sm:px-0 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Réalisations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {realisationList.map((realisation, index) => {
          const isLastAndOdd = index === realisationList.length - 1 && realisationList.length % 3 !== 0;
          
          return (
            <div 
              key={realisation.title}
              className={`w-full ${
                isLastAndOdd ? 'lg:col-start-2' : ''
              }`}
            >
              <RealisationCard {...realisation} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
