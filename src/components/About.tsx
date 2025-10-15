import { Shield, Lightbulb, Users, TrendingUp, Award, Globe, Target, Heart } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Built on foundations of integrity and ethical business practices with unwavering commitment to client success'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Driven',
      description: 'Leveraging cutting-edge technology and AI-powered solutions to deliver forward-thinking strategies'
    },
    {
      icon: Users,
      title: 'Professional Excellence',
      description: 'Dedicated team of experts committed to delivering exceptional results across all business verticals'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'Creating long-term value for all stakeholders while fostering positive community impact'
    }
  ];

  const achievements = [
    { icon: Award, label: 'Industry Recognition', value: '10+' },
    { icon: Globe, label: 'Global Partnerships', value: '50+' },
    { icon: Target, label: 'Project Success Rate', value: '98%' },
    { icon: Heart, label: 'Client Satisfaction', value: '100%' }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-white via-orange-50/20 to-green-50/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-orange-400 rounded-full animate-float-slow blur-2xl"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-green-400 rounded-full animate-float-medium blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-orange-300 rounded-full animate-float-fast blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            About MULTIVANTAGE
          </h2>
          <div className="w-24 h-1 gradient-orange mx-auto mb-8 animate-width-expand"></div>
          <p className="font-body text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay">
            MULTIVANTAGE stands as a dynamic professional corporation with diversified 
            business interests spanning multiple industries. Our innovation-driven approach and 
            commitment to professional excellence have established us as a trusted partner in 
            <span className="text-orange-600 font-semibold"> IT & AI Services</span>, 
            Financial Advisory, Trading, and comprehensive business solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-orange-100/30 hover:border-orange-200/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 gradient-orange rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden">
                  <feature.icon className="w-8 h-8 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100/30 hover:border-green-200/50 animate-fade-in-up"
                style={{ animationDelay: `${(index + 4) * 150}ms` }}
              >
                <div className="w-12 h-12 gradient-green rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="font-heading text-2xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">
                  {achievement.value}
                </div>
                <div className="font-body text-sm text-gray-600">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="animate-fade-in-up-delay-2">
          <div className="bg-gradient-to-br from-orange-50/80 via-white/90 to-green-50/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-orange-100/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-green-200/20 to-transparent rounded-full blur-2xl"></div>
            
            <div className="text-center relative z-10">
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-white/80 rounded-2xl shadow-lg border border-orange-100/50">
                  <img 
                    src="/logo.svg" 
                    alt="MULTIVANTAGE Logo" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-500 shadow-lg"
                  />
                </div>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6 animate-gradient-text">
                Our Vision
              </h3>
              <p className="font-body text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                To be the premier multi-domain corporation that creates sustainable value through 
                innovation, integrity, and excellence. We envision a future where our diversified 
                expertise in <span className="text-orange-600 font-semibold">AI & Technology</span>, 
                financial services, and strategic partnerships drives positive transformation across 
                industries, fostering economic growth and social progress in every community we serve.
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="px-6 py-2 bg-orange-100/50 rounded-full text-orange-700 font-medium text-sm hover:bg-orange-200/50 transition-colors duration-300">
                  Digital Innovation
                </div>
                <div className="px-6 py-2 bg-green-100/50 rounded-full text-green-700 font-medium text-sm hover:bg-green-200/50 transition-colors duration-300">
                  Sustainable Growth
                </div>
                <div className="px-6 py-2 bg-blue-100/50 rounded-full text-blue-700 font-medium text-sm hover:bg-blue-200/50 transition-colors duration-300">
                  Global Partnership
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
