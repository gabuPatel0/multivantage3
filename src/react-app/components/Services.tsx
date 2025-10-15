import { TrendingUp, DollarSign, Bot, Briefcase, ArrowRight, Cpu, Cloud, Shield, Code } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: 'IT & AI Services',
      description: 'Comprehensive technology solutions including IT infrastructure, software development, AI automation, and intelligent system integration.',
      features: [
        'AI automation and machine learning solutions',
        'Custom software development and maintenance',
        'IT infrastructure design and management',
        'Cloud services and digital transformation'
      ],
      subIcons: [Cpu, Cloud, Shield, Code]
    },
    {
      icon: DollarSign,
      title: 'Financial & Investment Services',
      description: 'Expert financial consulting and investment strategies tailored to diverse client needs.',
      features: [
        'Investment portfolio management',
        'Financial planning and advisory',
        'Corporate finance solutions',
        'Risk assessment and management'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Trading & Commodities',
      description: 'Comprehensive trading solutions across global markets with strategic commodity management.',
      features: [
        'International trade facilitation',
        'Commodity sourcing and distribution',
        'Market analysis and forecasting',
        'Supply chain optimization'
      ]
    },
    {
      icon: Briefcase,
      title: 'Professional & Commercial Services',
      description: 'Comprehensive business services supporting organizational growth and operational excellence.',
      features: [
        'Legal and regulatory compliance',
        'Business process optimization',
        'Strategic consulting services',
        'Event management and coordination'
      ]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50/50 to-orange-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-400 rounded-full animate-float-slow blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-400 rounded-full animate-float-medium blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Our Core Services
          </h2>
          <div className="w-24 h-1 gradient-orange mx-auto mb-8 animate-width-expand"></div>
          <p className="font-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Delivering exceptional value through our comprehensive suite of professional services, 
            each designed to drive growth and innovation across diverse business sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-orange-100/20 hover:border-orange-200/40 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 gradient-orange rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                    <service.icon className="w-8 h-8 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Sub-icons for IT Services */}
                  {service.subIcons && (
                    <div className="absolute -bottom-2 -right-2 flex space-x-1">
                      {service.subIcons.map((SubIcon, subIndex) => (
                        <div 
                          key={subIndex}
                          className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"
                          style={{ transitionDelay: `${subIndex * 100}ms` }}
                        >
                          <SubIcon className="w-3 h-3 text-orange-600" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0"
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="w-2 h-2 gradient-orange rounded-full mr-3 flex-shrink-0 animate-pulse"></div>
                        <span className="font-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="group/btn inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-all duration-300 hover:bg-orange-50 px-4 py-2 rounded-lg">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up-delay-2">
          <div className="bg-gradient-to-r from-orange-500/90 to-green-500/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent animate-pulse-slow"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 animate-fade-in-up">
                Ready to Transform Your Business?
              </h3>
              <p className="font-body text-lg mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in-up-delay">
                Let our expert team help you navigate opportunities and challenges across multiple industries.
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
