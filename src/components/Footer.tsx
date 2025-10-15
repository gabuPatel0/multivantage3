import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' }
  ];

  const resources = [
    { label: 'Contact Us', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-32 h-32 bg-orange-500 rounded-full animate-float-slow blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-500 rounded-full animate-float-medium blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 group">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-2 bg-white/10 rounded-xl">
                <img 
                  src="/logo.svg" 
                  alt="MULTIVANTAGE Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <div className="font-heading text-2xl font-bold text-gradient">
                MULTIVANTAGE
              </div>
            </div>
            <p className="font-body text-gray-300 mb-6 leading-relaxed max-w-md">
              Leading professional corporation specializing in IT & AI services, financial advisory, 
              trading, and comprehensive business solutions across multiple industries.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:multivantagepvtltd@gmail.com"
                className="w-10 h-10 gradient-orange rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <Mail className="w-5 h-5 text-white group-hover:animate-bounce" />
              </a>
              <a 
                href="https://www.instagram.com/multivantage/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 gradient-green rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:animate-pulse" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up">
            <h3 className="font-heading text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-body text-gray-300 hover:text-orange-400 transition-all duration-300 text-left hover:translate-x-2 transform block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fade-in-up-delay">
            <h3 className="font-heading text-lg font-semibold mb-4 text-white">
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(resource.href)}
                    className="font-body text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center space-x-2 text-left hover:translate-x-2 transform"
                  >
                    <span>{resource.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-gray-400 text-sm animate-fade-in">
              © {currentYear} MULTIVANTAGE. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="text-gray-500">Professional Services Since 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MULTIVANTAGE",
            "email": "multivantagepvtltd@gmail.com",
            "sameAs": [
              "https://www.instagram.com/multivantage/"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "description": "Leading professional corporation specializing in IT & AI services, financial advisory, trading, and comprehensive business solutions across multiple industries."
          })
        }}
      />
    </footer>
  );
}
