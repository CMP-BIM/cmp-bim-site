import Image from "next/image";
import PartnerCarousel  from './components/PartnerCarousel';
import RealisationCard from './components/RealisationCard';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      {/* <div>
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Votre expert BIM pour l’aménagement urbain</h1>
            <p className="mb-6">
              CMP BIM accompagne les grands projets d’infrastructure et d’aménagement avec son expertise en production BIM, coordination 3D, et modélisation.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Contactez-nous
            </a>
          </div> */}
  <div className="scroll-smooth font-sans">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
        <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-blue-600">CMP BIM</h1>
          <ul className="flex gap-6 text-gray-700 font-medium text-sm">
            <li><a href="#accueil" className="hover:text-blue-600">Accueil</a></li>
            <li><a href="#a-propos" className="hover:text-blue-600">À propos</a></li>
            <li><a href="#prestations" className="hover:text-blue-600">Prestations</a></li>
            <li><a href="#realisations" className="hover:text-blue-600">Références</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="pt-24 pb-16 px-4 max-w-6xl mx-auto space-y-32">

        {/* ACCUEIL */}
        {/* <section id="accueil" className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Votre expert BIM & Coordination 3D</h2>
          <p className="text-lg text-gray-600">
            Spécialiste en modélisation, coordination BIM et formation pour l’aménagement urbain et les projets d'infrastructure.
          </p>
        </section> */}
        <section
          id="accueil"
          className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Votre expert BIM & Coordination 3D
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
            Spécialiste en modélisation, coordination BIM et formation pour l’aménagement urbain et les projets d'infrastructure.
          </p>
        </section>
        {/* À PROPOS */}
        {/* <section id="a-propos">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">À propos</h2>
          <p className="text-gray-700 mb-4">
            CMP BIM accompagne les projets complexes grâce à une expertise en modélisation, coordination et formation BIM. Nos solutions s’intègrent dans les projets emblématiques comme la Ligne 15, le Village Olympique ou encore Roissy T4.
          </p>
          <div className="text-sm text-gray-600 space-y-1">
            <p><strong>Adresse :</strong> 60 Rue François Ier, 75008 Paris</p>
            <p><strong>Email :</strong> <a href="mailto:cmp.bim@outlook.fr" className="text-blue-600 underline">cmp.bim@outlook.fr</a></p>
            <p><strong>Logiciels :</strong> AutoCAD, Revit, Navisworks, Mensura, SketchUp, Trimble Connect</p>
            <p><strong>Matériel :</strong> Ordinateurs HP (modèle à confirmer)</p>
          </div>
        </section> */}
        <section
          id="a-propos"
          className="bg-gray-50 py-16 px-6 text-gray-800"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">À propos</h2>
              <p className="text-gray-700 text-center mb-6">
                CMP BIM accompagne les projets complexes grâce à une expertise en modélisation, coordination et formation BIM.
                Nos solutions sont intégrées dans des projets emblématiques tels que la Ligne 15, le Village Olympique ou Roissy T4.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-600">
                <div>
                  <p><span className="font-medium">📍 Adresse :</span><br />60 Rue François Ier, 75008 Paris</p>
                </div>
                <div>
                  <p><span className="font-medium">✉️ Email :</span><br /><a href="mailto:cmp.bim@outlook.fr" className="text-blue-600 underline">cmp.bim@outlook.fr</a></p>
                </div>
                <div>
                  <p><span className="font-medium">🛠️ Logiciels :</span><br />AutoCAD, Revit, Navisworks, Mensura, SketchUp, Trimble Connect</p>
                </div>
                <div>
                  <p><span className="font-medium">💻 Matériel :</span><br />Ordinateurs HP (modèle à confirmer)</p>
                </div>
              </div>
            </div>
          </section>

        {/* PRESTATIONS */}
        {/* <section id="prestations">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Nos prestations</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Management BIM : Convention, PEB, CCTP, DOE numérique</li>
            <li>Coordination 3D dans un environnement collaboratif</li>
            <li>Modélisation 3D de projets complexes</li>
            <li>Intégration de données attributaires</li>
            <li>Plans 2D & coordination technique</li>
            <li>Animations immersives Twinmotion</li>
            <li>Formations BIM (aménagement urbain, VRD...)</li>
          </ul>
        </section> */}
        <section
          id="prestations"
          className="py-16 px-6 bg-white text-gray-900"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Nos prestations</h2>
            <ul className="grid gap-4 sm:grid-cols-2 text-left text-gray-700 list-disc list-inside">
              <li><strong>Management BIM</strong> : Convention, PEB, CCTP, DOE numérique</li>
              <li><strong>Coordination 3D</strong> dans un environnement collaboratif</li>
              <li><strong>Modélisation 3D</strong> de projets complexes</li>
              <li><strong>Intégration de données</strong> attributaires</li>
              <li><strong>Production 2D</strong> & coordination technique</li>
              <li><strong>Animations Twinmotion</strong> immersives</li>
              <li><strong>Formations BIM</strong> (VRD, aménagement urbain…)</li>
            </ul>
          </div>
        </section>

        {/* RÉALISATIONS */}
        {/* <section id="realisations">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Réalisations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Image src="/images/ligne15.jpg" alt="Ligne 15" width={400} height={300} className="rounded-lg shadow" />
            <Image src="/images/village-olympique.jpg" alt="Village Olympique" width={400} height={300} className="rounded-lg shadow" />
            <Image src="/images/terminal4.jpg" alt="Terminal 4" width={400} height={300} className="rounded-lg shadow" />
          </div>
        </section> */}
        <section id="realisations">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Réalisations</h2>
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

        {/* PARTENAIRES */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 text-center pb-10">Ils nous font confiance</h2>
          <PartnerCarousel />
        </section>


        {/* CONTACT */}
        <section id="contact" className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-gray-600 mb-2">📍 60 Rue François Ier, 75008 Paris</p>
          <p className="text-gray-600 mb-4">✉️ <a href="mailto:cmp.bim@outlook.fr" className="text-blue-600 underline">cmp.bim@outlook.fr</a></p>
          <a href="mailto:cmp.bim@outlook.fr" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Demander un devis
          </a>
        </section>

      </main>
    </div>


      </main>
      
    </div>
  );
}
