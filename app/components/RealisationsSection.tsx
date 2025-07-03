import RealisationCard from './RealisationCard';

export default function RealisationsSection() {
  return (
    <section id="realisations" className="px-4 sm:px-0 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Réalisations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             <RealisationCard
              title="Autoroute A680"
              folder="A680"
              description="Modélisation et coordination 3D pour le projet autoroutier A680."
              images={['1.png', '2.png', '3.png', '4.png', '5.png', '6.png']}
            />
            <RealisationCard
              title="Terminal 4 – ADP"
              folder="ADP_-_T4"
              description="Études BIM du Terminal 4 de l'aéroport Roissy-CDG pour ADP."
              images={['Annotation_2025-05-16_1.png', 'Annotation_2025-05-16_2.png', 'Annotation_2025-05-16_3.png', 'Annotation_2025-05-16_4.png', 'Annotation_2025-05-16_5.png']}
            />
            <RealisationCard
              title="Elancourt – VOP"
              folder="Elancourt_-_VOP"
              description="Coordination technique et modélisation du site d'Elancourt."
              images={['elancourt 1.png', 'elancourt 2.png', 'elancourt 3.png', 'elancourt 4.png', 'elancourt 5.png'
                , 'elancourt 6.png', 'elancourt 7.png', 'elancourt 8.png', 'elancourt 9.png', 'elancourt 10.png'
              ]}
            />
            <RealisationCard
              title="Quartier Baillet"
              folder="QUERTIER_BAILLET"
              description="Production BIM pour l'aménagement du Quartier Baillet."
              images={['Annotation_2025-05-17_1.png', 'Annotation_2025-05-17_2.png', 'Annotation_2025-05-17_3.png'
                , 'Annotation_2025-05-17_4.png', 'Annotation_2025-05-17_5.png', 'Annotation_2025-05-17_6.png'
                , 'Annotation_2025-05-17_7.png', 'Annotation_2025-05-17_8.png', 'Annotation_2025-05-17_9.png'
              ]}
            />
            <RealisationCard
              title="Village des Athlètes"
              folder="Village_des_Athletes_-_VOP"
              description="Contribution au projet olympique du Village des Athlètes."
              images={['Annotation_2025-05-16 _1.png', 'Annotation_2025-05-16_2.png', 'Annotation_2025-05-16_3.png'
                , 'Annotation_2025-05-16_4.png', 'Annotation_2025-05-16_5.png', 'Annotation_2025-05-16_6.png'
                , 'Annotation_2025-05-16_7.png', 'Annotation_2025-05-16_8.png', 'Annotation_2025-05-16_9.png'
                , 'Annotation_2025-05-16_10.png', 'Annotation_2025-05-16_11.png', 'vop_attributs_1.png', 'vop_attributs_2.png'
              ]}
            />
            <RealisationCard
              title="Villeneuve DEMAIN"
              folder="VILLENEUVE_DEMAIN"
              description="Accompagnement global BIM du projet urbain Villeneuve DEMAIN."
              images={['Annotation_1.png', 'Annotation_2.png', 'Annotation_3.png'
                , 'Annotation_4.png', 'Annotation_5.png', 'Annotation_6.png'
              ]}
            /> 
      </div>
    </section>
  );
}
