
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  "Management BIM : Convention, PEB, CCTP, DOE numérique",
  "Coordination 3D dans un environnement collaboratif",
  "Modélisation 3D de projets complexes",
  "Intégration de données attributaires",
  "Production 2D & coordination technique",
  "Animations immersives Twinmotion",
  "Formations BIM (VRD, aménagement urbain…)",
];

export default function ServicesSection() {
  return (
    <section id="prestations" className="px-4 sm:px-0 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Nos prestations</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => (
          <Card key={index} className="bg-muted/30">
            <CardContent className="p-4">
              <Badge variant="outline" className="mb-2">{`Service ${index + 1}`}</Badge>
              <p>{service}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
