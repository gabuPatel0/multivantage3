export default function Hero() {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden pt-16 lg:pt-20">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-16 h-16 bg-orange-400 rounded-full animate-float-slow blur-xl"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-green-400 rounded-full animate-float-medium blur-xl"></div>
        <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-orange-300 rounded-full animate-float-fast blur-lg"></div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-green-300 rounded-full animate-float-slow blur-lg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Logo and Company Info */}
          <div className="text-center lg:text-left animate-fade-in-up-slow">
            {/* Logo and Company Name */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6 mb-8">
              <div className="flex-shrink-0 p-4">
                <img 
                  src="/logo.svg" 
                  alt="MULTIVANTAGE Logo" 
                  className="h-12 w-12 rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                    MULTIVANTAGE
                  </span>
                </h1>
                <p className="font-body text-lg text-gray-600 mb-6 leading-relaxed">
                  Your Partner in Multi-Sector Growth
                </p>
              </div>
            </div>

            {/* Company Description */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-100/30 mb-8">
              <p className="font-body text-lg md:text-xl text-gray-700 leading-relaxed">
                Leading professional corporation specializing in <span className="text-orange-600 font-bold text-xl">IT & AI Services</span>, 
                <span className="text-green-600 font-bold"> Financial Advisory & Investment Services</span>, 
                <span className="text-orange-600 font-bold"> Trading & Commodities</span>, and 
                <span className="text-green-600 font-bold"> Professional & Commercial Services</span> across multiple industries. 
                We drive innovation through cutting-edge technology, strategic partnerships, and sustainable growth initiatives.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToServices}
                className="group gradient-orange text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10">Explore Our Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={scrollToContact}
                className="group border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Contact Us</span>
              </button>
            </div>
          </div>

          {/* Right side - Professional Excellence Static Panel */}
          <div className="hidden lg:block">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-100/30">
              {/* Header */}
              <div className="mb-6 text-center">
                <div className="w-12 h-12 gradient-orange rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-5 h-5 bg-white rounded-full"></div>
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Professional Excellence</h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  Driving growth through strategic innovation and multi-sector expertise
                </p>
              </div>

              {/* Core Values */}
              <div className="space-y-3 mb-6">
                <div className="text-center p-3 bg-orange-50/50 rounded-lg">
                  <div className="w-8 h-8 gradient-orange rounded-lg flex items-center justify-center mx-auto mb-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="font-heading font-semibold text-gray-900 text-sm">Innovation First</div>
                  <div className="font-body text-xs text-gray-600">Cutting-edge technology solutions</div>
                </div>

                <div className="text-center p-3 bg-green-50/50 rounded-lg">
                  <div className="w-8 h-8 gradient-green rounded-lg flex items-center justify-center mx-auto mb-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="font-heading font-semibold text-gray-900 text-sm">Strategic Growth</div>
                  <div className="font-body text-xs text-gray-600">Multi-sector business expansion</div>
                </div>

                <div className="text-center p-3 bg-gradient-to-r from-orange-50/50 to-green-50/50 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="font-heading font-semibold text-gray-900 text-sm">Global Vision</div>
                  <div className="font-body text-xs text-gray-600">International partnerships & reach</div>
                </div>
              </div>

              {/* Simple Visual Element */}
              <div className="bg-gradient-to-r from-orange-50/30 to-green-50/30 rounded-xl p-3 border border-orange-100/20">
                <div className="flex items-center justify-around">
                  <div className="text-center">
                    <div className="w-8 h-8 gradient-orange rounded-full mx-auto mb-1 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="font-body text-xs text-gray-600">Technology</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 gradient-green rounded-full mx-auto mb-1 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="font-body text-xs text-gray-600">Finance</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="font-body text-xs text-gray-600">Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll-indicator"></div>
          <div className="absolute -bottom-2 text-gray-400 text-xs font-light">Scroll</div>
        </div>
      </div>
    </section>
  );
}
