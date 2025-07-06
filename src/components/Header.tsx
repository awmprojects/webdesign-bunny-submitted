
import { Button } from "@/components/ui/button";
import { Rabbit, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-purple-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            {/* New Bunny Logo Icon */}
            <div className="relative">
              <div className="w-14 h-14 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300">
                <div className="relative">
                  {/* Bunny silhouette design */}
                  <Rabbit className="w-8 h-8 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </div>
            
            {/* Logo Text Only */}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 bg-clip-text text-transparent tracking-tight">
                WEB DESIGN BUNNY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors">
              Portfolio
            </a>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </a>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                Client Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
                <Rabbit className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm hover:bg-gray-50 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-purple-100 bg-white/95 backdrop-blur-sm rounded-lg shadow-sm">
            <div className="flex flex-col space-y-3 px-2">
              <a 
                href="#services" 
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a 
                href="#features" 
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-3 border-t border-purple-100">
                <Link to="/login">
                  <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50" onClick={() => setIsMenuOpen(false)}>
                    Client Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white" onClick={() => setIsMenuOpen(false)}>
                    <Rabbit className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
