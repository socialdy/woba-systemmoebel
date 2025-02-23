import { Check } from "lucide-react";

export const AboutSection = () => {
  const benefits = [
    "Maßgeschneiderte Badmöbelsysteme für Neubau, Sanierung und Umbau.",
    "Individuelle Gestaltungsmöglichkeiten – maßvariabel nach den Gegebenheiten des Kunden.",
    "Umfangreiches Frontensortiment und grenzenlose Farbauswahl.",
    "Moderne Fertigungsanlagen, die eine präzise Anpassung an die örtlichen Gegebenheiten ermöglichen.",
  ];

  return (
    <section className="py-20 bg-white ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <a href="https://www.woba-systemmoebel.de/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/images/woba_logo.svg" 
                alt="WOBA Logo" 
                className=" h-full w-auto" 
              />
            </a>
          </div>
          <div className="animate-fade-in">
            <h2 className="mb-6">Warum WOBA Badmöbel?</h2>
            <p className="mb-8">
              WOBA kombiniert langjährige Erfahrung mit modernster Technik. Ihr Anspruch ist es, höchste Präzision, Qualität und Flexibilität zu bieten – von maßgeschneiderten Einzelstücken bis hin zur Serienfertigung.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
