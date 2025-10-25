export default function ContactSection() {
  return (
    <section id="contact" className="text-center px-4 sm:px-0 max-w-6xl mx-auto mb-5">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contactez-nous</h2>
      <p className="text-gray-600 mb-2">📍 1 rue Marguerin, 75014 Paris</p>
      <p className="text-gray-600 mb-4">
        ✉️ <a href="mailto:contact@cmp-bim.com" className="text-blue-600 underline">contact@cmp-bim.com</a>
      </p>
      <a
        href="mailto:contact@cmp-bim.com"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Demander un devis
      </a>
    </section>
  );
}
