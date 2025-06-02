
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="container mx-auto px-6 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Zurück zur Startseite
        </Link>

        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Angaben gemäss OR Art. 957</h2>
              <div className="space-y-2">
                <p><strong>Lienert Consulting</strong></p>
                <p>Musterstrasse 123</p>
                <p>8001 Zürich</p>
                <p>Schweiz</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
              <div className="space-y-2">
                <p><strong>E-Mail:</strong> info@lienertconsulting.ch</p>
                <p><strong>Telefon:</strong> +41 44 123 45 67</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vertretungsberechtigte Person</h2>
              <p>Max Lienert, Geschäftsführer</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handelsregister</h2>
              <div className="space-y-2">
                <p><strong>Handelsregister:</strong> Handelsregister des Kantons Zürich</p>
                <p><strong>CHE-Nummer:</strong> CHE-123.456.789</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Mehrwertsteuernummer</h2>
              <p>CHE-123.456.789 MWST</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftungsausschluss</h2>
              <div className="space-y-4">
                <p>
                  Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, 
                  Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
                </p>
                <p>
                  Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, 
                  welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten 
                  Informationen, durch Missbrauch der Verbindung oder durch technische Störungen 
                  entstanden sind, werden ausgeschlossen.
                </p>
                <p>
                  Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, 
                  Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, 
                  zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftung für Links</h2>
              <p>
                Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. 
                Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die 
                Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Urheberrechte</h2>
              <p>
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien 
                auf der Website gehören ausschliesslich der Firma Lienert Consulting oder den speziell 
                genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche 
                Zustimmung der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
