import { ReactNode } from "react";
import { Palette } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 via-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="relative">
                  {/* Capybara face design */}
                  <div className="w-10 h-8 bg-gradient-to-b from-orange-100 to-orange-200 rounded-full relative">
                    {/* Eyes */}
                    <div className="absolute top-1.5 left-1.5 w-2 h-2 bg-gray-800 rounded-full"></div>
                    <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-gray-800 rounded-full"></div>
                    {/* Nose */}
                    <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1 bg-gray-700 rounded-full"></div>
                  </div>
                  {/* Ears */}
                  <div className="absolute -top-1 left-1.5 w-2.5 h-2.5 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full"></div>
                  <div className="absolute -top-1 right-1.5 w-2.5 h-2.5 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full"></div>
                </div>
              </div>
              {/* Design accent */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-md">
                <Palette className="w-2 h-2 text-white" />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-baseline space-x-1 mb-2">
              <span className="text-3xl font-black bg-gradient-to-r from-orange-600 via-orange-700 to-amber-600 bg-clip-text text-transparent tracking-tight">
                CAPYBARA
              </span>
            </div>
            <span className="text-sm font-semibold text-gray-600 -mt-1 tracking-widest uppercase">
              Web Design
            </span>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-orange-100 p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-600">{subtitle}</p>
          </div>
          {children}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>© 2024 Capybara Web Design. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
