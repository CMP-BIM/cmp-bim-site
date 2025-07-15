
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
    title: "Management BIM",
    description:
      "Rédaction de conventions BIM, protocoles d’échange (PEB), pièces techniques (CCTP) et constitution de DOE numériques pour garantir un cadre méthodologique structuré et conforme aux exigences projet.",
  },
  {
    title: "Coordination 3D dans un environnement collaboratif",
    description:
      "Organisation, gestion et supervision des échanges entre les différents intervenants à l’aide de plateformes collaboratives et de revues de maquette pour anticiper les conflits et fluidifier la conception.",
  },
  {
    title: "Modélisation 3D de projets complexes",
    description:
      "Création de maquettes numériques précises et détaillées pour les réseaux, voiries et ouvrages d’aménagement, dans le respect des contraintes géométriques, techniques et réglementaires.",
  },
  {
    title: "Intégration de données attributaires",
    description:
      "Enrichissement des maquettes avec des données techniques, administratives ou patrimoniales pour répondre aux exigences d’exploitation, de maintenance ou de gestion des actifs.",
  },
  {
    title: "Production 2D & coordination technique",
    description:
      "Production de plans 2D (synthèse réseaux, nivellement, coupe, giration, profil en long). Extraction de plans, coupes et profils à partir des maquettes BIM, avec vérification de leur cohérence et coordination avec les autres disciplines pour garantir des livrables fiables.",
  },
  {
    title: "Animations immersives Twinmotion",
    description:
      "Création de visualisations réalistes et immersives à partir des maquettes BIM pour faciliter la compréhension des projets par les parties prenantes et valoriser les aménagements futurs.",
  },
  {
    title: "Formations BIM (VRD, aménagement urbain…)",
    description:
      "Sessions de formation ciblées sur les outils, méthodes et bonnes pratiques BIM appliqués aux domaines du VRD et de l’aménagement urbain, pour accompagner la montée en compétence des équipes.",
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
                <Badge variant="outline" className="block whitespace-normal text-left">
                  {/* {service.title} */}
                  <p className="text-base sm:text-base font-semibold text-primary">
                  {service.title}
                </p>
                </Badge>
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
                      className="text-sm text-primary hover:text-blue-600 transition-colors"
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
