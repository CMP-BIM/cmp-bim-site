
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// const services = [
//   "Management BIM : Convention, PEB, CCTP, DOE numérique",
//   "Coordination 3D dans un environnement collaboratif",
//   "Modélisation 3D de projets complexes",
//   "Intégration de données attributaires",
//   "Production 2D & coordination technique",
//   "Animations immersives Twinmotion",
//   "Formations BIM (VRD, aménagement urbain…)",
// ];

// export default function ServicesSection() {
//   return (
//     <section id="prestations" className="px-4 sm:px-0 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-semibold text-center mb-8">Nos prestations</h2>
//       <div className="grid gap-6 sm:grid-cols-2">
//         {services.map((service, index) => (
//           <Card key={index} className="bg-muted/30">
//             <CardContent className="p-4">
//               <Badge variant="outline" className="mb-2">{`Service ${index + 1}`}</Badge>
//               <p>{service}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// const services = [
//   {
//     title: "Management BIM",
//     description: "Convention, PEB, CCTP, DOE numérique",
//     longDescription:
//       "Nous assurons la rédaction complète des documents BIM, la structuration des maquettes et la cohérence des livrables tout au long du projet.",
//   },
//   {
//     title: "Coordination 3D",
//     description: "Travail collaboratif dans un environnement partagé",
//   },
//   {
//     title: "Modélisation 3D",
//     description: "Représentation précise de projets complexes",
//     longDescription:
//       "Nous modélisons les ouvrages à partir de plans, croquis ou nuages de points avec précision pour tous les corps d'état.",
//   },
//   {
//     title: "Intégration de données",
//     description: "Ajout de propriétés intelligentes dans les maquettes",
//   },
//   {
//     title: "Production 2D & coordination",
//     description: "Plans techniques à partir des modèles 3D",
//   },
//   {
//     title: "Animations Twinmotion",
//     description: "Création de rendus animés immersifs",
//     longDescription:
//       "Nous réalisons des animations réalistes et interactives pour visualiser vos projets sous un autre angle.",
//   },
//   {
//     title: "Formations BIM",
//     description: "VRD, aménagement urbain, et autres spécialités",
//   },
// ];

// export default function ServicesSection() {
//   const [expanded, setExpanded] = useState<number | null>(null);

//   const toggleDescription = (index: number) => {
//     setExpanded(expanded === index ? null : index);
//   };

//   return (
//     <section id="prestations" className="px-4 sm:px-0 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-semibold text-center mb-8">Nos prestations</h2>
//       <div className="grid gap-6 sm:grid-cols-2">
//         {services.map((service, index) => (
//           <Card key={index} className="bg-muted/30">
//             <CardContent className="p-4 space-y-2">
//               <Badge variant="outline">{service.title}</Badge>
//               <p className="text-sm">{service.description}</p>
//               {expanded === index && service.longDescription && (
//                 <p className="text-muted-foreground text-sm">{service.longDescription}</p>
//               )}
//               {service.longDescription && (
//                 <Button
//                   variant="link"
//                   className="text-xs px-0"
//                   onClick={() => toggleDescription(index)}
//                 >
//                   {expanded === index ? "Voir moins" : "Voir plus"}
//                 </Button>
//               )}
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

// Exemple avec titres + descriptions
const services = [
  {
    title: "Management BIM : Convention, PEB, CCTP, DOE numérique",
    description:
      "Rédaction de conventions, mise en place de PEB, CCTP et constitution du DOE numérique complet pour vos projets. Accompagnement personnalisé.",
  },
  {
    title: "Coordination 3D dans un environnement collaboratif",
    description:
      "Coordination entre corps d'état dans un environnement collaboratif. Optimisation des maquettes numériques pour la synthèse technique.",
  },
  {
    title: "Modélisation 3D de projets complexes",
    description:
      "Création de maquettes numériques complexes en respectant vos contraintes techniques et esthétiques. Formats compatibles standards BIM.",
  },
  {
    title: "Intégration de données attributaires",
    description:
      "Ajout structuré de données attributaires aux maquettes. Exploitation facilitée pour le suivi et la maintenance.",
  },
  {
    title: "Production 2D & coordination technique",
    description:
      "Plans techniques 2D issus de la maquette, avec contrôle qualité. Collaboration avec les différents intervenants assurée.",
  },
  {
    title: "Animations immersives Twinmotion",
    description:
      "Création d’animations immersives avec Twinmotion. Mise en valeur de vos projets auprès des clients et partenaires.",
  },
  {
    title: "Formations BIM (VRD, aménagement urbain…)",
    description:
      "Formations sur mesure pour vos équipes en BIM appliqué à la VRD et l’aménagement urbain. Supports personnalisés et suivi pédagogique.",
  },
];

export default function ServicesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <section id="prestations" className="px-4 sm:px-0 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Nos prestations</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => {
          const isLong = service.description.length > 150;
          const isExpanded = expanded === index;

          return (
            <Card key={index} className="bg-muted/30 transition-all">
              <CardContent className="p-4 space-y-2">
                <Badge variant="outline">{service.title}</Badge>
                <p
                  className={clsx("transition-all", {
                    "line-clamp-3": isLong && !isExpanded,
                  })}
                >
                  {service.description}
                </p>

                {isLong && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(index)}
                  >
                    {isExpanded ? "Voir moins" : "Voir plus"}
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
