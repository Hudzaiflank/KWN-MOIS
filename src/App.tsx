import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  // Update only the return statement:

  return (
    <div className="min-h-screen bg-white text-[#c52e33] font-sans">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
