import React from "react";

interface Item {
  id: number;
  src: string;
  alt: string;
}

const mixMatch = [
  { id: 1, src: "./images/blouse1.png", alt: "Blouse Hijau" },
  { id: 2, src: "./images/blouse2.png", alt: "Blouse Cream" },
  { id: 3, src: "./images/blouse3.png", alt: "Blouse Abu-abu" },
  { id: 4, src: "./images/kulot.png", alt: "Kulot Putih" },
];

const midiDress = [
  { id: 5, src: "./images/midi1.png", alt: "Midi Dress Biru" },
  { id: 6, src: "./images/midi2.png", alt: "Midi Dress Biru Muda" },
];

const tunik = [
  { id: 7, src: "./images/tunik1.png", alt: "Tunik Hijau" },
  { id: 8, src: "./images/tunik2.png", alt: "Tunik Hijau Muda" },
  { id: 9, src: "./images/pants1.png", alt: "Celana Oranye" },
];

const blouseModes = [
  { id: 10, src: "./images/blouseMode1.png", alt: "Blouse Abu Tua" },
  { id: 11, src: "./images/blouseMode2.png", alt: "Blouse Hijau Muda" },
  { id: 12, src: "./images/blouseMode3.png", alt: "Blouse Corak Bunga" },
];

const skirts = [
  { id: 13, src: "./images/skirt1.png", alt: "Rok Krem" },
  { id: 14, src: "./images/skirt2.png", alt: "Rok Coklat" },
];

const Gallery: React.FC = () => {
  // Just update the renderGrid function:

  const renderGrid = (items: Item[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          data-aos="fade-up"
          className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="aspect-square w-full overflow-hidden">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-center text-sm text-[#c52e33] font-semibold py-2">
            {item.alt}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <section id="mix-match" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b-4 border-[#c52e33] pb-2">
          Mix & Match (Top & Bottom)
        </h2>
        {renderGrid(mixMatch)}
      </section>

      <section id="midi-dress" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b-4 border-[#c52e33] pb-2">
          Midi Dress
        </h2>
        {renderGrid(midiDress)}
      </section>

      <section id="tunik" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b-4 border-[#c52e33] pb-2">
          Mix & Match Tunik
        </h2>
        {renderGrid(tunik)}
      </section>

      <section id="blouse" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b-4 border-[#c52e33] pb-2">
          Blouse Modes Mix & Match
        </h2>
        {renderGrid(blouseModes)}
      </section>

      <section id="skirts" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b-4 border-[#c52e33] pb-2">
          Skirts & Bottoms
        </h2>
        {renderGrid(skirts)}
      </section>
    </>
  );
};

export default Gallery;
