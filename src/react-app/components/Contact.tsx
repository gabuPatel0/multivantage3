import { useState } from 'react';
import { Mail, MapPin, Instagram, Send, CheckCircle, Phone, User } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        // Reset form immediately
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          interest: '',
          message: ''
        });
      } else {
        setSubmitError(result.message || 'An error occurred while sending your message.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const interests = [
    'IT & AI Services',
    'Digital Consulting',
    'Financial Advisory & Bonds',
    'Trading & Distribution',
    'Event Management',
    'Real Estate & Infrastructure',
    'Energy & Power',
    'Agriculture & Agro Processing',
    'Manufacturing',
    'Hospitality & Healthcare',
    'General Inquiry'
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-orange-50/30 via-white to-green-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-48 h-48 bg-orange-400 rounded-full animate-float-slow blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-400 rounded-full animate-float-medium blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-orange-300 rounded-full animate-float-fast blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Get In Touch
          </h2>
          <div className="w-24 h-1 gradient-orange mx-auto mb-8 animate-width-expand"></div>
          <p className="font-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Ready to explore opportunities together? We'd love to hear from you. 
            Let's discuss how MULTIVANTAGE can help drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-orange-100/30 hover:shadow-3xl transition-all duration-500 animate-fade-in-up">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Send className="w-6 h-6 mr-3 text-orange-600" />
              Send us a Message
            </h3>

            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl animate-fade-in-up">
                <p className="text-red-700 font-body">{submitError}</p>
                <button
                  onClick={() => setSubmitError(null)}
                  className="mt-2 text-red-600 hover:text-red-800 underline text-sm"
                >
                  Dismiss
                </button>
              </div>
            )}

            {isSubmitted && (
              <div className="mb-6 p-6 bg-green-50 border border-green-200 rounded-xl animate-fade-in-up">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-heading text-lg font-semibold text-green-900 mb-1">
                      Message Sent Successfully!
                    </h4>
                    <p className="font-body text-green-700 text-sm">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-green-600 hover:text-green-800 text-sm font-medium"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}

            {/* Contact Form */}
            <div className={isSubmitted ? 'opacity-50' : ''}>
              <h4 className="font-heading text-lg font-semibold text-gray-700 mb-4">
                {isSubmitted ? 'Send Another Message' : 'Contact Form'}
              </h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block font-body text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="company" className="block font-body text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="email" className="block font-body text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="phone" className="block font-body text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                      placeholder="+91 94273 39287"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="interest" className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-hover:border-orange-300"
                  >
                    <option value="">Select an area of interest</option>
                    {interests.map((interest, index) => (
                      <option key={index} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none group-hover:border-orange-300"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-orange text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-2 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-5 h-5 group-hover:animate-bounce" />
                  )}
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Main Contact Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-green-100/30 hover:shadow-3xl transition-all duration-500 animate-fade-in-up-delay">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-green-600" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-gray-900 mb-1">Email</h4>
                    <a 
                      href="mailto:multivantagepvtltd@gmail.com"
                      className="font-body text-gray-600 hover:text-orange-600 transition-colors duration-300"
                    >
                      multivantagepvtltd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 gradient-green rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-gray-900 mb-1">Phone Numbers</h4>
                    <div className="space-y-1">
                      <a 
                        href="tel:+919427339287"
                        className="font-body text-gray-600 hover:text-green-600 transition-colors duration-300 block"
                      >
                        +91 94273 39287
                      </a>
                      <a 
                        href="tel:+916357591977"
                        className="font-body text-gray-600 hover:text-green-600 transition-colors duration-300 block"
                      >
                        +91 63575 91977
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 gradient-green rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-gray-900 mb-1">Social Media</h4>
                    <a 
                      href="https://www.instagram.com/multivantage/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-gray-600 hover:text-green-600 transition-colors duration-300"
                    >
                      @multivantage
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-gray-900 mb-1">Office Address</h4>
                    <p className="font-body text-gray-600 leading-relaxed">
                      A/6 Krishna Park Duplex<br />
                      Opp. Mothers School, Iskon Temple Road<br />
                      Gotri Road, Vadodara 390021<br />
                      Gujarat, India
                    </p>
                    <p className="font-body text-sm text-orange-600 mt-1 italic">
                      (Call before visit)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CEO Information */}
            <div className="bg-gradient-to-br from-orange-500/90 to-green-500/90 backdrop-blur-sm rounded-3xl p-8 text-white relative overflow-hidden animate-fade-in-up-delay-2">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4 p-4 bg-white/20 rounded-xl w-fit mx-auto">
                    <img 
                      src="https://mocha-cdn.com/0199e1f2-4caf-7b65-b046-778aaa80d015/output-onlinepngtools.png" 
                      alt="MULTIVANTAGE Logo"
                      className="h-20 w-20 animate-float-gentle drop-shadow-lg"
                    />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">
                    Poojan Pandya
                  </h3>
                  <p className="font-body text-lg opacity-90">
                    CEO & Co-Founder
                  </p>
                </div>
                
                <div className="text-center">
                  <h4 className="font-heading text-lg font-semibold mb-3">Key Verticals:</h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="opacity-90">• Digital & IT Consulting</div>
                    <div className="opacity-90">• Financial Advisory & Bonds</div>
                    <div className="opacity-90">• Trading & Distribution of Goods and Services</div>
                    <div className="opacity-90">• Event Management</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20 text-center">
                  <p className="font-body text-sm opacity-80">
                    Legal Advisor: Dwarkesh Pandya | +91 94093 29303
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
