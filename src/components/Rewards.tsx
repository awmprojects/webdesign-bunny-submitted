
import { Button } from "@/components/ui/button";
import { Globe, Code, Smartphone, ArrowRight, Star, Timer } from "lucide-react";
import { Link } from "react-router-dom";

const Rewards = () => {
  const packages = [
    { name: "Starter Website", icon: Globe, color: "from-blue-500 to-cyan-500", price: "$2,500", features: "5 pages, mobile responsive, SEO optimized" },
    { name: "Business Website", icon: Code, color: "from-purple-500 to-violet-500", price: "$5,000", features: "10 pages, custom design, contact forms" },
    { name: "E-commerce Site", icon: Smartphone, color: "from-green-500 to-emerald-500", price: "$8,000", features: "Online store, payment integration, product management" },
    { name: "Premium Package", icon: Globe, color: "from-purple-600 to-purple-700", price: "$12,000", features: "Unlimited pages, advanced features, priority support" },
    { name: "Landing Page", icon: Code, color: "from-pink-500 to-rose-500", price: "$1,500", features: "Single page, conversion focused, fast delivery" },
    { name: "Website Redesign", icon: Smartphone, color: "from-indigo-500 to-purple-500", price: "$3,500", features: "Modern refresh, improved UX, mobile optimization" }
  ];

  const addOns = [
    { title: "Website Maintenance", price: "$200/mo", description: "Ongoing updates and security" },
    { title: "SEO Plans", price: "$500/mo", description: "Get more traffic from SEO" },
    { title: "Content Creation", price: "$500/mo", description: "Professional content writing" },
    { title: "Social Media Plans", price: "$750/mo", description: "Complete social media management" }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Our Web Design
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional web design services tailored to your business needs and budget.
          </p>
        </div>

        {/* Special Offer Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 shadow-2xl border-4 border-purple-200 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full opacity-30 -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 rounded-full opacity-30 translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>SPECIAL OFFER</span>
                  <Timer className="w-4 h-4" />
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-gray-900">Small Business Web Design Package</h3>
                <p className="text-xl text-gray-700">Perfect for growing small businesses</p>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                    <div className="text-5xl font-bold text-purple-700">$1,000</div>
                    <div className="text-center">
                      <div className="text-2xl line-through text-gray-500">$3,000</div>
                      <div className="bg-purple-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                        65% OFF
                      </div>
                    </div>
                  </div>
                  <div className="text-lg text-gray-700 mb-4">
                    • Professional small business website<br/>
                    • Mobile responsive design<br/>
                    • Onpage SEO optimization included<br/>
                    • Contact form integration
                  </div>
                </div>

                <div className="text-center">
                  <Link to="/register">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Star className="w-5 h-5 mr-2" />
                      Claim This Offer
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <p className="text-sm text-gray-600 mt-2">Limited time offer!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center text-white shadow-lg`}>
                    <pkg.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-gray-600">{pkg.features}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-purple-600">{pkg.price}</div>
                  <div className="text-xs text-gray-500">Starting from</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-200">
          <div className="text-center mb-8">
            <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Add-On Services</h3>
            <p className="text-gray-600">Enhance your website with additional features</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl font-bold text-purple-600 mb-2">{addon.price}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{addon.title}</h4>
                <p className="text-sm text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
              <div className="flex items-center space-x-4">
                <Code className="w-8 h-8 text-green-600" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">Free Consultation</div>
                  <div className="text-purple-600 font-bold text-lg">Discuss Your Project</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 lg:mt-16">
          <Link to="/register">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-base lg:text-lg px-8 lg:px-12 py-4 lg:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <Globe className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
              Start Your Web Design Project
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
            </Button>
          </Link>
          <p className="text-xs lg:text-sm text-gray-500 mt-3 lg:mt-4 px-4">Free consultation • Professional design • Ongoing support</p>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
