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
