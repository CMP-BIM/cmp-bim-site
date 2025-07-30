import PartnerCarousel from './PartnerCarousel';

export default function PartnersSection() {
  return (
    <section className="space-y-6 px-4 sm:px-0 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 text-center pb-10 mt-10">Ils nous font confiance</h2>
      <PartnerCarousel />
    </section>
  );
}
