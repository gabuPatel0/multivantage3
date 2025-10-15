import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-50/80 to-green-50/80 backdrop-blur-sm border-b border-orange-100/30 animate-slide-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <a 
              href="mailto:multivantagepvtltd@gmail.com"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4 animate-pulse" />
              <span className="hidden sm:inline">multivantagepvtltd@gmail.com</span>
            </a>
            <a 
              href="https://www.instagram.com/multivantage/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-orange-100/30 transform' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="https://mocha-cdn.com/0199e1f2-4caf-7b65-b046-778aaa80d015/output-onlinepngtools.png" 
                  alt="MULTIVANTAGE Logo"
                  className="h-16 w-16 lg:h-20 lg:w-20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <div className="font-heading">
                <div className="text-xl lg:text-2xl font-bold text-gradient animate-fade-in">
                  MULTIVANTAGE
                </div>
                <div className="text-xs text-gray-600 font-body tracking-wider hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Your Partner in Growth
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 relative group transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-orange group-hover:w-full transition-all duration-500"></span>
                  <span className="absolute inset-0 bg-orange-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="hidden lg:block gradient-orange text-white px-6 py-2 rounded-xl font-medium hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 animate-bounce-gentle"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-green-600 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 transition-all duration-300 hover:scale-110"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="w-6 h-6 animate-spin-in" />
                ) : (
                  <Menu className="w-6 h-6 animate-fade-in" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full mt-4 gradient-orange text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
