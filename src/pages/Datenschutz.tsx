
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Datenschutz = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Datenschutzhinweise</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verantwortlicher</h3>
              <p className="mb-4">
                Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutz-Grundverordnung (DSGVO), ist:
              </p>
              <p className="mb-6"><strong>Moritz Lienert</strong></p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ihre Betroffenenrechte</h3>
              <p className="mb-4">
                Unter den angegebenen Kontaktdaten können Sie gemäß EU-Datenschutz-Grundverordnung (DSGVO) jederzeit folgende Rechte ausüben:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)</li>
                <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO)</li>
              </ul>
              <p className="mb-4">
                Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
              </p>
              <p className="mb-6">
                Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verarbeitungstätigkeiten</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Erfassung allgemeiner Informationen beim Besuch unserer Website</h4>
              <p className="mb-6">Art und Zweck der Verarbeitung:</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Änderung unserer Datenschutzerklärung</h3>
              <p className="mb-6">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fragen zum Datenschutz</h3>
              <p className="mb-6">
                Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an den oben genannten Verantwortlichen.
              </p>

              <p className="text-sm text-gray-600">
                Urheberrechtliche Hinweise: Diese Datenschutzerklärung wurde mit Hilfe der activeMind AG erstellt – den Experten für externe Datenschutzbeauftragte (Version #2024-10-25).
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
