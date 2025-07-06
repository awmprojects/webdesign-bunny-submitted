

import { Button } from "@/components/ui/button";
import { ArrowRight, Rabbit, Star, TrendingUp, Palette, Globe, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-indigo-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-200">
              <TrendingUp className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Beautiful designs, affordable prices</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">
                Beautiful Web Design, At Affordable Prices
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              We're revolutionizing the industry by making stunning, professional web 
              design accessible to everyone. Low-cost packages with exceptional quality! 🐰
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Rabbit className="w-5 h-5 mr-2" />
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="#portfolio">
                <Button variant="outline" size="lg" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 text-lg px-8 py-6 rounded-full">
                  View Portfolio
                </Button>
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-700">200+</div>
                <div className="text-sm text-gray-600">Websites Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-700">5</div>
                <div className="text-sm text-gray-600">Star Average Rating</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-purple-400 text-purple-400" />)}
                </div>
                <div className="text-sm text-gray-600">72hrs Delivery</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 border border-purple-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Our Services</h3>
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    Available Now
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                      <Palette className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Website Design</div>
                      <div className="text-sm text-gray-600">Custom responsive websites</div>
                    </div>
                    <div className="text-purple-600 font-bold">From $1000</div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Website Maintenance </div>
                      <div className="text-sm text-gray-600">Done for you website updates and management</div>
                    </div>
                    <div className="text-purple-600 font-bold">$200/mo</div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                      <Search className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">SEO Plans</div>
                      <div className="text-sm text-gray-600">Get more traffic from SEO</div>
                    </div>
                    <div className="text-purple-600 font-bold">$500/mo</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-purple-700 to-purple-800 rounded-full flex items-center justify-center shadow-lg animate-bounce z-20">
              <Rabbit className="w-6 h-6 text-white" />
            </div>
            
            {/* New bouncing bunny element at left bottom */}
            <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-purple-700 to-purple-800 rounded-full flex items-center justify-center shadow-lg animate-bounce z-20">
              <Rabbit className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;

