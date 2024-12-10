import React from 'react';

interface FooterProps {
  links: { label: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <footer className="relative bg-gradient-to-b from-teal-500 to-teal-700 text-white py-10">
      {/* Tropical Background */}
      <div className="absolute inset-0">
        <div className="bg-[url('/path-to-your-palm-tree-animation.gif')] bg-cover bg-center h-full w-full opacity-50 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-satisfy mb-5">Explore with Us</h2>
        <div className="flex justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:scale-110 transform transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.tripadvisor.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium hover:scale-110 transform transition-all duration-300"
          >
            <i className="fab fa-tripadvisor text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;