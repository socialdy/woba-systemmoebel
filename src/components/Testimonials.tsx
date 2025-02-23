import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Andreas Müller",
      role: "Innenarchitekt",
      quote: "Die Koffer-Fronten von WOBA haben unsere Designvision perfekt ergänzt. Die schlichte Eleganz und die vielseitigen Kombinationsmöglichkeiten machen sie zu einem Favoriten bei meinen Projekten. Besonders die Hochglanz-Oberfläche verleiht den Möbeln einen modernen, aber gleichzeitig zeitlosen Look.",
    },
    {
      id: 2,
      name: "Simone Hübner",
      role: "Privatkundin",
      quote: "Nach langer Suche nach den perfekten Badmöbeln habe ich mich für die Kreta-Fronten entschieden. Die Fronten passen perfekt zu meinem modernen Badezimmer. Der rechteckige Griffausschnitt ist nicht nur praktisch, sondern verleiht den Möbeln auch eine besondere Eleganz, die ich bei anderen Herstellern nicht gefunden habe.",
    },
    {
      id: 3,
      name: "Tobias Lange",
      role: "Schreinermeister",
      quote: "Ich arbeite seit Jahren mit WOBA-Produkten und die Oslo-Fronten haben mich erneut überzeugt. Das Design ist minimalistisch und modern, und die Verarbeitung ist von höchster Qualität. Besonders gut gefällt mir der integrierte Glas-Einleger, der für einen interessanten Kontrast sorgt und den Möbeln eine edle Note verleiht.",
    },
    {
      id: 4,
      name: "Sophie Weber",
      role: "Möbeldesignerin",
      quote: "Die Stone-Veneer-Fronten sind ein Highlight in meinem Portfolio. Die natürliche Schieferstruktur und die edle Optik bringen eine ganz neue Dimension in moderne Wohnräume. Ich habe sie in mehreren Designprojekten verwendet und meine Kunden sind immer wieder begeistert von der einzigartigen Oberfläche und der Haptik.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="referenzen">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-center mb-16">Referenzen</h2>
        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto relative">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-[#333] text-white *:p-8 h-full animate-fade-in">
                  <div className="flex flex-col h-full justify-between">
                    <p className="mb-8">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-200">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 hover:bg-white/20 text-black" />
          <CarouselNext className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 hover:bg-white/20 text-black" />
        </Carousel>
      </div>
    </section>
  );
};
