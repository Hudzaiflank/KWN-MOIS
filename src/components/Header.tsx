import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Add smooth scrolling to all links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if it's a navigation link with href starting with #
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();

        const id = target.getAttribute("href");
        const element = document.querySelector(id as string);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        // Close mobile menu when an item is clicked
        setIsMenuOpen(false);
      }
    };

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll as EventListener);
    });

    // Clean up event listeners when component unmounts
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll as EventListener);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#c52e33] text-white py-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          Fashion Collection
        </h1>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#mix-match" className="hover:text-gray-200 transition">
                Mix & Match
              </a>
            </li>
            <li>
              <a href="#midi-dress" className="hover:text-gray-200 transition">
                Midi Dress
              </a>
            </li>
            <li>
              <a href="#tunik" className="hover:text-gray-200 transition">
                Tunik
              </a>
            </li>
            <li>
              <a href="#blouse" className="hover:text-gray-200 transition">
                Blouse
              </a>
            </li>
            <li>
              <a href="#skirts" className="hover:text-gray-200 transition">
                Skirts
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#c52e33] py-4 px-6 shadow-inner">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#mix-match"
                className="block hover:text-gray-200 transition"
              >
                Mix & Match
              </a>
            </li>
            <li>
              <a
                href="#midi-dress"
                className="block hover:text-gray-200 transition"
              >
                Midi Dress
              </a>
            </li>
            <li>
              <a href="#tunik" className="block hover:text-gray-200 transition">
                Tunik
              </a>
            </li>
            <li>
              <a
                href="#blouse"
                className="block hover:text-gray-200 transition"
              >
                Blouse
              </a>
            </li>
            <li>
              <a
                href="#skirts"
                className="block hover:text-gray-200 transition"
              >
                Skirts
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
