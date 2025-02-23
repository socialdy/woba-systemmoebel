import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero_bg.jpg')" }}
    >
      {/* Content */}
      <div className="absolute inset-0 bg-black/60 z-0" /> {/* Dunkler Overlay für bessere Lesbarkeit */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <div className="max-w-7xl animate-fade-in">
          <h1 className="mb-4">
            Badmöbel, so einzigartig wie Sie
          </h1>

          <p className="text-white leading-relaxed mb-4">
            Gestalten Sie Ihr Badezimmer mit WOBA – maßgeschneiderte Möbel, die Ihre Wünsche perfekt widerspiegeln.
            <br />
            Perfekt angepasst, in jedem Detail.
          </p>

          <a href="/#beratung">
            <Button className="bg-[#333] hover:bg-[#333] text-white px-6 py-3 mt-2">
              Beratung anfordern
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
