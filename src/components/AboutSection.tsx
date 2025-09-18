import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="a-propos" className="px-4 sm:px-0 max-w-6xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-center mb-8">À propos</h2>
      <Card className="bg-muted/50 shadow-sm">
        <CardContent className="p-6 space-y-6 text-sm text-gray-800">
          <div className="space-y-4 leading-relaxed">
            <p>
              <strong>CMP BIM</strong> accompagne les projets complexes grâce à une expertise en modélisation, coordination et formation BIM.
              Nos solutions sont intégrées dans des projets emblématiques tels que le <strong>Village Olympique</strong>, la <strong>Ligne 15 du Grand Paris</strong>,
              le <strong>Terminal 4 de l’aéroport Charles de Gaulle</strong> ou encore l'<strong>autoroute A680</strong> avec l'élargissement à 2×2 voies et la construction d’un nouvel échangeur.
            </p>
            <p>
              Spécialisés en <strong>aménagement urbain</strong> et <strong>infrastructures linéaires</strong>, nous intervenons aux côtés des maîtres d’ouvrage, bureaux d’études et entreprises pour
              structurer la donnée, fiabiliser les livrables et optimiser la collaboration à chaque étape du projet.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <p className="font-semibold">📍 Adresse :</p>
              <p>1 rue Marguerin, 75014 Paris</p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">✉️ Email :</p>
              <a href="mailto:cmp.bim@outlook.fr" className="underline text-blue-600">
                cmp.bim@outlook.fr
              </a>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">🛠 Logiciels :</p>
              <ul className="grid grid-cols-2 gap-1 text-sm list-disc list-inside pl-2">
                <li>Mensura</li>
                <li>Covadis</li>
                <li>Autocad / Autoturn</li>
                <li>Revit</li>
                <li>Trimble connect</li>
                <li>Twinmotion</li>
                <li>Sketchup</li>
                <li>Navisworks</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">💻 Matériel :</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm list-disc list-inside pl-2">
                <li>HP ZBook Studio G8</li>
                <li>Écran externe 27"</li>
                <li>Traceur HP DesignJet T630</li>
                <li>Imprimante laser multifonction</li>
                <li>Tablette Wacom Intuos / XP-Pen Deco</li>
                <li>Scanner de documents A4/A3</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
