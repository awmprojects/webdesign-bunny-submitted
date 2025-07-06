
import { Button } from "@/components/ui/button";
import { Bell, Settings, LogOut, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import DashboardNavigation from "./DashboardNavigation";

const DashboardHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-orange-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 lg:py-4">
        {/* Main header row */}
        <div className="flex items-center justify-between">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-orange-400 via-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
              <div className="relative">
                <div className="w-5 h-4 lg:w-6 lg:h-5 bg-gradient-to-b from-orange-100 to-orange-200 rounded-full relative">
                  <div className="absolute top-0.5 left-0.5 lg:top-1 lg:left-1 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-gray-800 rounded-full"></div>
                  <div className="absolute top-0.5 right-0.5 lg:top-1 lg:right-1 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-gray-800 rounded-full"></div>
                  <div className="absolute bottom-0.5 left-1/2 lg:bottom-1 transform -translate-x-1/2 w-0.5 h-0.5 lg:w-1 lg:h-0.5 bg-gray-700 rounded-full"></div>
                </div>
                <div className="absolute -top-0.5 left-0.5 lg:left-1 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full"></div>
                <div className="absolute -top-0.5 right-0.5 lg:right-1 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base lg:text-lg font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                CAPYBARA
              </span>
              <span className="text-xs font-semibold text-gray-600 -mt-1 tracking-widest uppercase">
                Web Design
              </span>
            </div>
          </Link>
          
          {/* Desktop navigation */}
          <div className="hidden lg:block">
            <DashboardNavigation />
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Notifications - always visible */}
            <Button variant="outline" size="sm" className="relative p-2 lg:px-3">
              <Bell className="w-4 h-4" />
              <div className="absolute -top-1 -right-1 w-2 h-2 lg:w-3 lg:h-3 bg-red-500 rounded-full"></div>
            </Button>
            
            {/* Settings - hidden on mobile */}
            <Button variant="outline" size="sm" className="hidden sm:flex p-2 lg:px-3">
              <Settings className="w-4 h-4" />
            </Button>
            
            {/* User info - simplified on mobile */}
            <div className="hidden sm:flex items-center space-x-2 px-2 py-1 lg:px-3 lg:py-2 bg-gray-50 rounded-lg">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 hidden md:inline">John Doe</span>
            </div>
            
            {/* Mobile user avatar */}
            <div className="sm:hidden w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            
            {/* Logout - hidden on small mobile */}
            <Button variant="outline" size="sm" className="hidden sm:flex text-red-600 hover:text-red-700 p-2 lg:px-3">
              <LogOut className="w-4 h-4" />
            </Button>
            
            {/* Mobile menu toggle */}
            <Button 
              variant="outline" 
              size="sm" 
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-orange-100">
            <div className="space-y-3">
              <Link 
                to="/dashboard" 
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/dashboard/reviews" 
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                to="/dashboard/earnings" 
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Earnings
              </Link>
              <Link 
                to="/dashboard/profile" 
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Profile
              </Link>
              <Link 
                to="/dashboard/settings" 
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Settings
              </Link>
              <button 
                className="block w-full text-left px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
