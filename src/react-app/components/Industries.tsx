export default function Industries() {
  const industries = [
    {
      title: 'Real Estate & Infrastructure',
      description: 'Developing sustainable urban spaces and modern infrastructure solutions with smart technology integration',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=entropy&auto=format',
      gradient: 'from-orange-500 to-orange-600',
      features: ['Smart Buildings', 'Urban Planning', 'Sustainable Design']
    },
    {
      title: 'Energy & Power',
      description: 'Renewable energy projects and efficient power distribution systems for sustainable future',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop&crop=entropy&auto=format',
      gradient: 'from-green-500 to-green-600',
      features: ['Solar Solutions', 'Wind Energy', 'Grid Management']
    },
    {
      title: 'Agriculture & Agro Processing',
      description: 'Modern farming techniques and value-added agricultural processing with AI-driven optimization',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop&crop=entropy&auto=format',
      gradient: 'from-emerald-500 to-emerald-600',
      features: ['Smart Farming', 'Crop Analytics', 'Food Processing']
    },
    {
      title: 'Manufacturing & Engineering',
      description: 'Advanced manufacturing processes and precision engineering solutions with Industry 4.0 integration',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=entropy&auto=format',
      gradient: 'from-blue-500 to-blue-600',
      features: ['Automation', 'Quality Control', 'Supply Chain']
    },
    {
      title: 'Hospitality & Healthcare',
      description: 'Premium hospitality services and comprehensive healthcare solutions with digital transformation',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop&crop=entropy&auto=format',
      gradient: 'from-purple-500 to-purple-600',
      features: ['Digital Health', 'Guest Experience', 'Wellness Tech']
    },
    {
      title: 'Logistics & Retail',
      description: 'Efficient supply chain management and modern retail solutions with AI-powered analytics',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&crop=entropy&auto=format',
      gradient: 'from-indigo-500 to-indigo-600',
      features: ['Smart Logistics', 'E-commerce', 'Inventory AI']
    }
  ];

  return (
    <section id="industries" className="py-16 lg:py-24 bg-gradient-to-br from-white via-green-50/20 to-orange-50/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-40 h-40 bg-green-400 rounded-full animate-float-slow blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-32 h-32 bg-orange-400 rounded-full animate-float-medium blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-300 rounded-full animate-float-fast blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Industries We Serve
          </h2>
          <div className="w-24 h-1 gradient-orange mx-auto mb-8 animate-width-expand"></div>
          <p className="font-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Our diverse expertise spans across key sectors of the economy, delivering innovative 
            solutions that drive sustainable growth and create lasting value through technology integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 border border-orange-100/30 hover:border-orange-200/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${industry.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-float-gentle"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-float-medium"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-orange-100 transition-colors duration-300 transform group-hover:-translate-y-1">
                    {industry.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  {industry.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {industry.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 flex items-center text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                  <span className="font-semibold text-sm">Explore Solutions</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up-delay-2">
          <div className="bg-gradient-to-br from-orange-50/80 via-white/90 to-green-50/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-orange-100/30 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-green-200/20 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="p-5 bg-white/80 rounded-2xl shadow-lg border border-orange-100/50">
                  <img 
                    src="https://mocha-cdn.com/0199e1f2-4caf-7b65-b046-778aaa80d015/output-onlinepngtools.png" 
                    alt="MULTIVANTAGE Logo"
                    className="h-24 w-24 animate-float-gentle drop-shadow-lg"
                  />
                </div>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4 animate-gradient-text">
                Industry-Specific Solutions
              </h3>
              <p className="font-body text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Each industry presents unique challenges and opportunities. Our multi-domain expertise 
                allows us to deliver tailored solutions that address specific sector requirements while 
                maintaining the highest standards of quality and innovation through AI and digital transformation.
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group gradient-orange text-white px-8 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10">Discuss Your Industry Needs</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
