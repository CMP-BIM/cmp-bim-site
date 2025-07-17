import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import RealisationsSection from './components/RealisationsSection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="pt-24 pb-20 max-w-6xl mx-auto space-y-32 px-4 sm:px-0">
        {/* Accueil */}
        {/* <section id="accueil" className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Votre expert BIM & Coordination 3D
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Spécialiste en modélisation, coordination BIM et formation pour l’aménagement urbain et les projets d'infrastructure.
          </p>
          <Button className="mt-4">Nous contacter</Button>
        </section> */}
        
        <section
          id="accueil"
          className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden"
        >
          {/* Vidéo en arrière-plan */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/try-bg.mp4" type="video/mp4" />
            Votre navigateur ne prend pas en charge la vidéo.
          </video>

          {/* Filtre noir semi-transparent */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

          {/* Contenu texte au-dessus */}
          <div className="relative z-20 px-4 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Votre expert BIM & Coordination 3D
            </h1>
            <p className="text-gray-200 text-lg mt-4">
              Spécialiste en modélisation, coordination BIM et formation pour l’aménagement urbain et les projets d'infrastructure.
            </p>
            <Button className="mt-6">Nous contacter</Button>
          </div>
        </section>



        <Separator />

        <AboutSection />

        <Separator />

        <ServicesSection />

        <Separator />

        <RealisationsSection />

        <PartnersSection />

        <ContactSection />
      </main>
    </div>
  );
}

