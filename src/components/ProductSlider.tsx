import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  { id: 1, name: "KOFFER 99/38", description: "Schlichte Lackfront in Hochglanz oder Supermatt für puristisches Design.", image: "/images/koffer.jpg" },
  { id: 2, name: "KRETA", description: "Rechteckiger Griffausschnitt für ergonomische Handhabung mit massiver Abdeckplatte.", image: "/images/kreta.jpg" },
  { id: 3, name: "OSLO", description: "Eckiger Griffausschnitt mit Glas-Einleger für modernen Kontrast.", image: "/images/oslo.jpg" },
  { id: 4, name: "PADUA", description: "Lackierte Front mit integrierter Griffleiste und sanft laufenden Vollauszügen.", image: "/images/padua.jpg" },
  { id: 5, name: "ALUMINIUMGRIFFLEISTE", description: "Durchgehende, flexible Griffleiste in Edelstahloptik oder lackiert.", image: "/images/aluminiumgriffleiste.jpg" },
  { id: 6, name: "FÖHR", description: "Moderne Rahmenfront mit sanfter Farbgebung für Landhausstil.", image: "/images/foehr.jpg" },
  { id: 7, name: "MALMÖ", description: "Flächige Rahmenfront mit eleganter Facette in Hochglanz oder Supermatt.", image: "/images/malmoe.jpg" },
  { id: 8, name: "GROOVE", description: "Senkrechte Nuten für eine geradlinige, moderne Optik mit Push-To-Open.", image: "/images/groove.jpg" },
  { id: 9, name: "METALLOPTIK", description: "Effektlackoberfläche mit echten Metallpigmenten für edlen Charakter.", image: "/images/metalloptik.jpg" },
  { id: 10, name: "STONE VENEER", description: "Echtes Steinfurnier aus Schiefergestein mit einzigartiger Oberflächenstruktur.", image: "/images/stone-veneer.jpg" }
];




export const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const slidesPerView = isMobile ? 1 : 2;

  const next = () => {
    setCurrentIndex((current) => 
      (current + slidesPerView >= products.length ? 0 : current + slidesPerView)
    );
  };

  const prev = () => {
    setCurrentIndex((current) => 
      (current - slidesPerView < 0 ? Math.max(0, products.length - slidesPerView) : current - slidesPerView)
    );
  };

  return (
    <section className="py-20 bg-white" id="produkte">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className=" text-center mb-12 ">Produkte</h2>
        <div className="relative">
          <div className="flex gap-4 md:gap-8">
            {products
              .slice(currentIndex, currentIndex + slidesPerView)
              .map((product) => (
                <div key={product.id} className="flex-1 animate-fade-in">
                  <div className="bg-white shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className=""
                    />
                    <div className="p-6 md:p-8 text-center">
                      <h3 className=" mb-2">{product.name}</h3>
                      <p className=" mb-4">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};