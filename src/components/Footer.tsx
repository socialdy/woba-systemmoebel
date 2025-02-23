import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#333] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <a href="https://kuechenstudio-bergheim.at" className="hover:underline hover:text-white">
              <img
                src="/images/me_logo.png" // Ersetze dies durch den tatsächlichen Pfad zu deinem Logo
                alt="Küchenstudio Bergheim Logo"
                className="h-16 mb-3" // Passe die Größe des Logos an
              />
            </a>
            <p>
              Hochwertige Einbauküchen von Beeck, innovative Küchengeräte von Miele sowie exklusive Arbeitsplatten und stilvolle Ausstattung – alles für Ihre Traumküche.
            </p>
          </div>
          <div>
            <h3 className="mb-4">Quicklinks</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://kuechenstudio-bergheim.at/kuechen" className="hover:underline hover:text-white">
                  Küchen
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at/abverkauf" className="hover:underline hover:text-white">
                  Abverkauf
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at/ausstattung" className="hover:underline hover:text-white">
                  Ausstattung
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at/bad" className="hover:underline hover:text-white">
                  Bad
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>Lamprechtshausener Bundesstraße 1</li>
              <li>5101 Bergheim</li>
              <li>
                <a href="tel:+43 662 452535" className="hover:underline hover:text-white">
                  +43 662 452535
                </a>
              </li>
              <li>
                <a href="mailto:me@kuechenstudio-bergheim.at" className="hover:underline hover:text-white">
                  me@kuechenstudio-bergheim.at
                </a>
              </li>
              <li>
                <a href="https://kuechenstudio-bergheim.at" className="hover:underline hover:text-white">
                  www.kuechenstudio-bergheim.at
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Öffnungszeiten</h4>
            <ul className="space-y-3">
              <li>Mo – Fr: 10:00 – 17:00 Uhr</li>
              <li>Sa – So: Geschlossen</li>
            </ul>
          </div>
        </div>

        {/* Rechtliche Links */}
        <div className="mt-16 pt-8 border-t border-white text-center">
          <ul className="space-y-3">
            <li>
              <a href="https://kuechenstudio-bergheim.at/impressum" className="hover:underline hover:text-white">
                Impressum
              </a>
            </li>
            <li>
              <a href="https://kuechenstudio-bergheim.at/datenschutz" className="hover:underline hover:text-white">
                Datenschutz
              </a>
            </li>
            <li>
              <a href="https://kuechenstudio-bergheim.at/agb" className="hover:underline hover:text-white">
                AGB
              </a>
            </li>
          </ul>
          <p className="mt-6">© 2025 Küchenstudio Bergheim. Alle Rechte vorbehalten.</p>
          <p className="text-sm mt-2">Developed by <a className="font-semibold hover:underline hover:text-white" href="https://socialdynamics.agency">Social Dynamics</a></p>
        </div>
      </div>
    </footer>
  );
};
