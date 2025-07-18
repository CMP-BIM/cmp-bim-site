import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import RealisationsSection from './components/RealisationsSection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';
import CopyEmailButton from "./components/CopyEmailButton";


import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
// import { toast } from "@/components/ui/use-toast";


// export default function Home() {
//   const handleCopyEmail = () => {
//     navigator.clipboard.writeText("cmp.bim@outlook.fr");
//     toast({
//       title: "📋 Email copié",
//       description: "L’adresse cmp.bim@outlook.fr a été copiée dans le presse-papiers.",
//     });
//   };


export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      {/* <main className="pt-24 pb-20 max-w-6xl mx-auto space-y-32 px-4 sm:px-0"> */}
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
      <main>
        {/* SECTION ACCUEIL */}
        <section
          id="accueil"
          className="relative h-screen w-full overflow-hidden text-white"
        >
          {/* Vidéo en arrière-plan */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/video/fond.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>

          {/* Filtre sombre */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Contenu */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Votre expert BIM & Coordination 3D</h1>
            <p className="text-muted text-lg max-w-2xl mt-4">
              Spécialiste en modélisation, coordination BIM et formation pour l’aménagement urbain et les projets d'infrastructure.
            </p>
              {/* <Button className="mt-4">Nous contacter</Button> */}
              <CopyEmailButton  />
            {/* <Button onClick={handleCopyEmail} className="mt-6">
              📋 Copier l’email
            </Button> */}
          </div>
        </section>


        {/* RESTE DU SITE */}

        <Separator  />

        <AboutSection />

        <Separator className='m-10'/>

        <ServicesSection />

        <Separator className='m-10'/>

        <RealisationsSection />

        <PartnersSection />

        <ContactSection />
      </main>
    </div>
  );
}

