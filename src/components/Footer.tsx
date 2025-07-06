import { Rabbit, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16 border-t border-purple-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* Logo Icon */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Rabbit className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1">
                  <span className="text-xl font-black bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent tracking-tight">WEB DESIGN BUNNY</span>
                </div>
                
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We're revolutionizing the industry by making stunning, professional web design accessible to everyone with exceptional quality at affordable prices.
            </p>
            
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Services</a></li>
              <li><a href="#portfolio" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Portfolio</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Company</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">About</a></li>
              <li><Link to="/login" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Login</Link></li>
              <li><Link to="/register" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Sign Up</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-gray-700 font-medium">info@webdesignbunny.com</span>
              </div>
              
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm font-medium">© 2025 Web Design Bunny. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                  <Rabbit className="w-3 h-3 text-purple-600" />
                </div>
                <span className="font-medium">Beautiful designs, affordable prices with creative excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;